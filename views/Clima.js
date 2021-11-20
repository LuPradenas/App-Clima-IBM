import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Appbar } from 'react-native-paper';
import axios from 'axios';
import WeatherDetails from '../components/WeatherDetails'
import WeatherDescription from '../components/WeatherDescription';
import ModalMaps from '../components/ModalMaps'

const Clima = ({city}) => {
    const [ cityName, setCityName ] = useState('');
    const [ weatherData, setWeatherData ] = useState('');
    // const [coordenadas, setCoordenadas] = useState('');
    const [ requesting, setRequesting ] = useState(false);

    const ciudadEj = ['Buenos Aires', 'La Plata', 'Rosario']

    useEffect(() => {
        const getWeather = async () => {
            const instance = axios.create({
                baseURL: `http://api.openweathermap.org/data/2.5/weather?q=${ciudadEj[2]}&appid=${process.env.OPENWEATHER_KEY}`,
                params: { 'units': 'metric', 'lang': 'es'}
            });

            const res = await instance.get();
            const {weather, main, coord} = res.data

            console.log(weather, main, coord);
            setWeatherData({weather, main, coord});
        }

        getWeather();


    }, []);

    return (
        <ScrollView>
            <Appbar.Header>
                <Appbar.Content title="Clima" subtitle={`Actualizacion de ${ciudadEj[2]}`} />
            </Appbar.Header>
            <View>
                <Text>
                    {weatherData? 'Datos cargados' : 'Cargando datos...'}
                </Text>
            </View>

            <View style={styles.detailsCard}>
                <WeatherDetails weatherData={weatherData}/>
            </View>

            <WeatherDescription weatherData={weatherData}/>

            <View>
                <ModalMaps 
                    weatherData={weatherData}
                />                 
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    detailsCard:{
        marginBottom: 10
    },
})

export default Clima
