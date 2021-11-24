import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import axios from 'axios';
import WeatherDetails from '../components/WeatherDetails'
import WeatherDescription from '../components/WeatherDescription';
import ModalMaps from '../components/ModalMaps';
import { COLORS } from '../utils/colors';
import WeatherWeekTable from '../components/WeatherWeekTable';
import { API_KEY } from '@env';

const Clima = ({city}) => {
    const [ cityName, setCityName ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');
    const [ weekWeatherData, setWeekWeatherData ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const ciudadEj = ['Buenos Aires', 'La Plata', 'Rosario']

    useEffect(() => {
        const getWeather = async () => {
            const instance = axios.create({
                baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${ciudadEj[2]}&appid=${API_KEY}`,
                params: { 'units': 'metric', 'lang': 'es'}
            });

            const res = await instance.get();
            const {weather, main, coord, clouds} = res.data

            // console.log(res.data);
            setWeatherData({weather, main, coord, clouds});
        }

        const getWeekWeather = async () => {
            const instance = axios.create({
                baseURL: `http://api.openweathermap.org/data/2.5/forecast?q=${ciudadEj[2]}&appid=${API_KEY}`,
                params: { 'units': 'metric', 'lang': 'es'}
            });
            const res = await instance.get();
            // console.log(res.data.list);
            setWeekWeatherData(res.data.list);
        }

        getWeather();
        getWeekWeather();


    }, []);

    const date = new Date();
    const options = { weekday: 'long',year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit' }

    return (
        <ScrollView style={styles.container}>
            <Appbar.Header style={styles.bar}>
                <Appbar.Content 
                title={`Clima de ${ciudadEj[2]}`} 
                titleStyle={styles.title}
                subtitle={` ${date.toLocaleString('es-ES', options)} hs`} 
                subtitleStyle={styles.subtitle}
                />
            </Appbar.Header>

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
                    weatherData={weatherData}
                />                 
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
    }
})

export default Clima
