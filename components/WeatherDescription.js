import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';
import { Card, Paragraph} from 'react-native-paper';

const WeatherDescription = ({weatherData}) => {
    if(Object.keys(weatherData).length === 0) return null;
    const [description, setDescription] = useState([]);

    useEffect(() => {
        setDescription(weatherData.weather[0].description);
        console.log(weatherData.weather[0]);
    }, [])
    return (
        <View>
             <Card>
                <Card.Title title="Descripcion"/>
                <Card.Content>
                <Paragraph>{description}</Paragraph>
                </Card.Content>
            </Card>
        </View>
    )
}

export default WeatherDescription;
