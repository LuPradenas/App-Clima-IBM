import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import { COLORS } from '../utils/colors';

const WeatherDescription = ({weatherData}) => {
    if(Object.keys(weatherData).length === 0) return null;
    const [description, setDescription] = useState('');
    const [iconUri, setIconUri] = useState('');

    useEffect(() => {
        setIconUri(`http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`)
        setDescription(weatherData.weather[0].description);
    }, [])


    return (
        <View>
             <Card style={styles.card}>
                <Card.Content style={{ flexDirection: 'row' }}>
                     <View style={styles.cardItem}>
                         <Image 
                            style={styles.logo}
                            source={{ uri: iconUri }}
                         />
                         <Text style={styles.numbers}>{Number.parseFloat(weatherData.main.temp).toFixed(1)} º C</Text>
                         <Text style={{color:'#fff', fontSize:20}}>{description}</Text>
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
        borderRadius: 8, 
        alignItems:'center',
    },
    cardItem:{
        backgroundColor: COLORS.secondaryVariantGradient,
        textAlign:'center',
        justifyContent: 'space-evenly',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal:10,
        marginHorizontal: 3,
        borderRadius: 8,
    },
    logo: {
        width: 90,
        height: 75,
    },
    numbers:{
        fontSize:30,
        fontWeight: 'bold',
        color: '#fff'
    }
})

export default WeatherDescription;
