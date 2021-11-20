import React, { useEffect, useState }from 'react';
import { View, Text } from 'react-native';
import { Card } from 'react-native-paper';

const WeatherDetails = ({weatherData}) => {

    if(Object.keys(weatherData).length === 0) return null;
    const [temperature, setTemperature] = useState({
        temp: '',
        feels_like: '',
        humidity: '',
        pressure: '',
        temp_max: '',
        temp_min: ''
    })
    

useEffect(() => {
    if(weatherData){
        setTemperature(weatherData.main);
    }
}, [])

    return (
        <View>
             <Card>
                <Card.Title title="Detalles Temperatura"/>
                <Card.Content>
                    <Text>Temperatura: { temperature.temp? temperature.temp : 'cargando..' }</Text>
                    <Text>Sensacion termica:{ temperature.feels_like? temperature.feels_like : 'cargando..' }</Text>
                    <Text>Temperatura minima:{ temperature.temp_min? temperature.temp_min : 'cargando..' }</Text>
                    <Text>Temperatura maxima:{ temperature.temp_max? temperature.temp_max : 'cargando..' }</Text>
                    <Text>Presion:{ temperature.pressure? temperature.pressure : 'cargando..' }</Text>
                    <Text>Humedad:{ temperature.humidity? temperature.humidity : 'cargando..' }</Text>
                </Card.Content>
            </Card>
        </View>
    )
}

export default WeatherDetails;
