import React, { useEffect, useState }from 'react';
import { View, Text, StyleSheet } from 'react-native';
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
             <Card style={styles.card}>
                <Card.Content>
                    <View style={styles.cardContainer}>
                        <View style={styles.cardItem}>
                            <Text>Temperatura</Text>
                            <Text style={styles.numbers}>{ temperature.temp? `${temperature.temp} º C` : 'cargando..' }</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text>Sensacion termica</Text>
                            <Text style={styles.numbers}>{ temperature.feels_like? `${temperature.feels_like} º C` : 'cargando..' }</Text>
                        </View>
                        <View style={styles.cardItem}>
                            <Text>Minima: </Text>
                            <Text style={styles.numbers}>{ temperature.temp_min? `${temperature.temp_min} º C` : 'cargando..' }</Text>

                        </View>
                        <View style={styles.cardItem}>
                            <Text>Maxima:</Text>
                            <Text style={styles.numbers}>{ temperature.temp_max? `${temperature.temp_max} º C` : 'cargando..' }</Text>

                        </View>
                        <View style={styles.cardItem}>
                            <Text>Presion: </Text>
                            <Text style={styles.numbers}>{ temperature.pressure? `${temperature.pressure} hPa` : 'cargando..' }</Text>

                        </View>
                        <View style={styles.cardItem}>
                            <Text>Humedad: </Text>
                            <Text style={styles.numbers}>{ temperature.humidity? `${temperature.humidity} %` : 'cargando..' }</Text>

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
        justifyContent: 'space-between'
    },
    cardItem:{
        flexBasis: '49%',
        paddingVertical:5
    },
    numbers:{
        fontSize:30,
        fontWeight: 'bold'
    }
})

export default WeatherDetails;
