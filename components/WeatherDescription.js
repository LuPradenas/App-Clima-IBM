import React, { useState, useEffect } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card } from 'react-native-paper';
import { COLORS } from '../utils/colors';

const WeatherDescription = ({weatherData}) => {
    if(Object.keys(weatherData).length === 0) return null;
    const [description, setDescription] = useState([]);

    useEffect(() => {
        const datos = weatherData.weather.map( e => {
           return {
               description: e.description,
               main: e.main,
               icon: e.icon,
               id: e.id
            } 
        } );

        setDescription(datos);
        

    }, [])
    return (
        <View>
             <Card style={styles.card}>
                <Card.Content>
                 {
                 description.map( item => {
                     return (
                     <View style={styles.cardItem} key={item.id}>
                         <Image 
                            style={styles.logo}
                            source={{ uri: `http://openweathermap.org/img/wn/${item.icon}@2x.png`}}
                         />
                         <Text style={{color:'#fff', fontSize:20}}>{item.description}</Text>
                     </View>)
                })
                }
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
        alignItems:'center'    
    },
    cardItem:{
        backgroundColor: COLORS.secondaryVariantGradient,
        textAlign:'center',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 10,
        paddingHorizontal:10,
        borderRadius: 8,
    },
    logo: {
        width: 66,
        height: 58,
    }
})

export default WeatherDescription;
