import React, { useEffect, useState } from 'react';
import { View, Text , StyleSheet, FlatList, Image} from 'react-native';
import { Card } from 'react-native-paper';

const WeatherWeekTable = ({weekWeatherData}) => {
  if(Object.keys(weekWeatherData).length === 0) return null;
  const [weekday, setWeekday] = useState([]);

  useEffect(() => {
    if(weekWeatherData.length !== 0){
      const list = weekWeatherData.map( item => {
        return {
          id: item.dt_txt,
          time: item.dt_txt,
          main: item.main,
          weather: item.weather
        }
      });
      
      const newList = filterDayTime(list);
      
      setWeekday(newList);
    }
  }, [])

//cambia esta fecha "2021-11-23 00:00:00" a mar, 23 nov, 12:00
  const getDayTime = (date) =>{
    const d = new Date(date);
    return {
      day: d.toLocaleString('es-ES',{weekday: 'short'}),
      date: d.toLocaleString('es-ES',{month: 'numeric', day: 'numeric'}),
    }
  }

  //funcion auxiliar que de la lista de datos filtra la temperatura de cada dia a las 12:00 hs
  const filterDayTime = (arr) => {
    const newArr = arr.filter( el => {
      const d = new Date(el.time);
      if(d.toLocaleString('es-ES',{hour: '2-digit', minute: '2-digit'}) === '12:00'){
        return el
      }
    })
    return newArr
  }

  //cada componente que debe mostrar la FlatList
  const renderItem = ({item}) =>{
    const dateData = getDayTime(item.time);
    return (
      <View style={styles.weekItem}>
        <Text style={styles.day}>{dateData.day.toLocaleUpperCase()}</Text>
        <Text style={styles.date}>{dateData.date}</Text>
        <Text style={styles.temp}>{`${Math.round(item.main.temp)} ºC`}</Text>
        <Image
          style={styles.logo}
          source={{ uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png` }}
        />
      </View>
    )
  }

  //retorna la lista semanal
  return (
    <Card style={styles.card}>
        <Card.Content>
              <FlatList
                contentContainerStyle={styles.cardContainer}
                data={weekday}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                horizontal
              />
        </Card.Content>
    </Card>
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
    flexGrow: 1,
    justifyContent: 'space-between'
  },
  weekItem:{
      textAlign: 'center',
      paddingHorizontal: 5,
      marginHorizontal: 8,
      paddingBottom: 8
  },
  logo: {
    width: 35,
    height: 50,
},
date:{
  fontSize: 12
},
temp:{
  fontSize:20,
  fontWeight: 'bold'
},
day:{
  fontSize:20,
  fontWeight: 'bold'
}
})

export default WeatherWeekTable
