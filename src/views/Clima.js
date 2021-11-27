import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Platform, ScrollView } from 'react-native';
import { Appbar, Button } from 'react-native-paper';
import axios from 'axios';
import WeatherDetails from '../components/WeatherDetails'
import WeatherDescription from '../components/WeatherDescription';
import ModalMaps from '../components/ModalMaps';
import { COLORS } from '../utils/colors';
import WeatherWeekTable from '../components/WeatherWeekTable';
import { FAB } from "react-native-paper";
import { API_KEY } from '@env';

const Clima = (props) => {
    const [ cityName, setCityName ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');
    const [ weekWeatherData, setWeekWeatherData ] = useState([]);
    const { route, navigation } =  props;
    const [coordinates , setCoordinates ] = useState([]);  

    //si llegan parametros (o cambian) se usan para setear la ciudad y coordenadas
    useEffect(() => {
        
        if(props?.route?.params?.city){
            setCoordinates(route.params.coords)
            setCityName(route.params.city);

            //con el nombre de ciudad busca el clima del dia y los setea en el estado WeatherData
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
            //tambien con el nombre de ciudad busca el clima semanal y lo setea en WeekWeatherData
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
                const { list } = res.data
                setWeekWeatherData(list);
            }
    
            getWeather();
            getWeekWeather();
        }

    }, [props]);

    //funcion auxiliar para normalizar los nombres de las ciudades que llegan por parametros
    const getCityWithoutSpecialChars = (city) =>{
        return city.normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    }

    //opciones para parsear la fecha que llega en los datos
    //"2021-11-27 12:00:00" => sabado 27 de nov, 12:00 hs
    const date = new Date();
    const options = { weekday: 'long',year: 'numeric', month: 'short', day: 'numeric', hour: '2-digit', minute: '2-digit' }

    //retorna los componentes con la temperatura, los detalles del clima del momento de consulta
    //y el componente con los datos del clima de la semana
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
                        <FAB 
                            style={styles.fab}
                            small
                            label='Volver a Ciudades'
                            onPress={()=> {props.navigation.jumpTo('Ciudades')}}
                        />

                    <View>
                        <WeatherDescription weatherData={weatherData}/>
                    </View>

                    <View>
                        <WeatherDetails weatherData={weatherData}/>
                    </View>
                    {
                        (weekWeatherData.length !== 0)
                        ? 
                            <View>
                                <WeatherWeekTable weekWeatherData={weekWeatherData}/>
                            </View>
                        :
                            null
                    }
                        <ModalMaps 
                            coordinates={coordinates}
                        /> 
                </>          
            :
                //si no hay seteada ninguna ciudad al principio te da un mensaje para volver a la vista de ciudades
                <View style={styles.container_mensaje}>
                    <Text style={styles.mensaje}>Tienes que seleccionar una ciudad de la lista</Text>
                        <FAB 
                            style={styles.fab}
                            small
                            label='Volver a Ciudades'
                            onPress={()=> {props.navigation.jumpTo('Ciudades')}}
                        />
                </View>
    
            }
                  
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.primaryVariant,
        textAlign: 'center',
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
        marginVertical: 8,
        fontSize: 16,
        textAlign: 'center'
    },
    fab:{
        backgroundColor: '#0071d4',
        marginTop:10,
        marginBottom:10,
        width:250,
        alignSelf: 'center'
      }
})

export default Clima
