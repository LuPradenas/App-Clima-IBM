import React, { useEffect, useState }from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';

//componente que presenta los detalles como le sensacion termica, max y min
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
             <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardItem}>
                            <Text>Sensacion termica</Text>
                            <Text style={styles.numbers}>{ `${Number.parseFloat(temperature.feels_like).toFixed(1)} º C` }</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text>Minima </Text>
                            <Text style={styles.numbers}>{  `${Number.parseFloat(temperature.temp_min).toFixed(1)} º C` }</Text>

                        </View>
                        <View style={styles.cardItem}>
                            <Text>Maxima</Text>
                            <Text style={styles.numbers}>{ `${Number.parseFloat(temperature.temp_max).toFixed(1)} º C` }</Text>

                        </View>
                        <View style={styles.cardItem}>
                            <Text>Presion </Text>
                            <Text style={styles.numbers}>{ `${temperature.pressure} hPa` }</Text>

                        </View>
                        <View style={styles.cardItem}>
                            <Text>Humedad </Text>
                            <Text style={styles.numbers}>{  `${temperature.humidity} %` }</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text>Nubosidad</Text>
                            <Text style={styles.numbers}>{`${weatherData.clouds.all} %`}</Text>
                        </View>
                    </View>
                </Card.Content>
            </Card>
            
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
        backgroundColor:'#fff',
        marginHorizontal: 20,
        marginVertical:10,
        borderRadius: 8 
    },
    cardContainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    cardItem:{
        flexBasis: '49%',
        paddingVertical:5
    },
    weekItem:{
        textAlign: 'center'
    },
    numbers:{
        fontSize:25,
        fontWeight: 'bold'
    }
})

export default WeatherDetails;
