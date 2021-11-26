import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import axios from 'axios';
import WeatherDetails from '../components/WeatherDetails'
import WeatherDescription from '../components/WeatherDescription';
import ModalMaps from '../components/ModalMaps';
import { COLORS } from '../utils/colors';
import WeatherWeekTable from '../components/WeatherWeekTable';
import { API_KEY } from '@env';

const Clima = (props) => {
    const [ cityName, setCityName ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');
    const [ weekWeatherData, setWeekWeatherData ] = useState([]);
    // const [ loading, setLoading ] = useState(false);
    const { route, navigation } =  props;
    const [coordinates , setCoordinates ] = useState([]);  

    useEffect(() => {
        setCoordinates(route.params.coords)

        if(props?.route?.params?.city){

            console.log(props);
            console.log(route.params.city);
            setCityName(route.params.city);

            const getWeather = async () => {
                const instance = axios.create({
                    baseURL: `http://api.openweathermap.org/data/2.5/weather`,
                    params: { 
                        units: 'metric',
                        lang: 'es',
                        q: `${getCityWithoutSpecialChars(cityName)},ar`,
                        appid: API_KEY
                    }
                });
    
                const res = await instance.get();
                const {weather, main, coord, clouds} = res.data
                setWeatherData({weather, main, coord, clouds});
            }
    
            const getWeekWeather = async () => {
                const instance = axios.create({
                    baseURL: `http://api.openweathermap.org/data/2.5/forecast`,
                    params: { 
                        units: 'metric',
                        lang: 'es',
                        q: `${getCityWithoutSpecialChars(cityName)},ar`,
                        appid: API_KEY
                    }
                });
                const res = await instance.get();
                setWeekWeatherData(res.data.list);
            }
    
            getWeather();
            getWeekWeather();
        }

    }, [props]);

    const getCityWithoutSpecialChars = (city) =>{
        return city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }

    const date = new Date();
    const options = { weekday: 'long',year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }

    return (
        <ScrollView style={styles.container}>
            {cityName && props? 
                <>
                    <Appbar.Header style={styles.bar}>
                    <Appbar.Content 
                    title={`Clima de ${cityName}`} 
                    titleStyle={styles.title}
                    subtitle={` ${date.toLocaleString('es-ES', options)} hs`} 
                    subtitleStyle={styles.subtitle}
                    />
                    </Appbar.Header>
                    <Button onPress={()=> {
                        props.navigation.jumpTo('Ciudades')
                        }}>Volver</Button>

                    <View>
                        <WeatherDescription weatherData={weatherData}/>
                    </View>

                    <View>
                        <WeatherDetails weatherData={weatherData}/>
                    </View>

                    <View>
                        <WeatherWeekTable weekWeatherData={weekWeatherData}/>
                    </View>
                        <ModalMaps 
                            coordinates={coordinates}
                        /> 
                </>          
            :
                
                <View style={styles.container_mensaje}>
                    <Text style={styles.mensaje}>Tienes que seleccionar una ciudad de la lista</Text>
                    <Button 
                        onPress={()=> {
                            props.navigation.jumpTo('Ciudades')
                        }}>Volver</Button>
                </View>
    
            }
                  
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryVariant
    },
    bar:{
        backgroundColor: "#007AFF"
    },
    title:{
        fontWeight: 'bold'
    },
    subtitle:{
        fontSize:15
    },
    container_mensaje: {
        marginTop: Platform.OS === 'ios' ?  60  : 50 ,
        alignItems: 'center',
    },
    mensaje: {
        fontSize: 16
    }
})

export default Clima
