import React from 'react'
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Pressable,
} from 'react-native'
import { COLORS } from '../utils/colors'
import { FontAwesome5 } from '@expo/vector-icons'
import { AntDesign } from '@expo/vector-icons'
import { Ionicons } from '@expo/vector-icons'
import getCityWeather from './getCityWeather'

const CardList = ({ city, eliminarCity}) => {
  //const getData = obtenerDatos().then( data => console.log(data))
  const cityWeather = getCityWeather(city)
  const temperature = cityWeather?.main?.temp.toFixed()
  const condition1 = cityWeather?.weather?.[0].description
  const mainWeatherCondition = cityWeather?.weather?.[0]?.main

  const dialogoEliminar = city => {
    console.log('Eliminando...', city);
    eliminarCity(city);
}

  const weatherConditionMap = {
    Snow: (
      <FontAwesome5
        name="snowflake"
        size={55}
        color={COLORS.secondaryVariant}
      />
    ),
    Clear: <Ionicons name="sunny" size={55} color={COLORS.secondaryVariant} />,
    Clouds: (
      <Ionicons name="cloudy" size={55} color={COLORS.secondaryVariant} />
    ),
    Rain: (
      <FontAwesome5
        name="cloud-sun-rain"
        size={55}
        color={COLORS.secondaryVariant}
      />
    ),
  }

  return (
    <>
      <TouchableOpacity
        style={
          !cityWeather.error ? styles.cardContainer : styles.cardContainerError
        }
      >
        <View style={styles.cardCityDetails}>
          <Text style={{ fontSize: 30, color: COLORS.onPrimary }}>
            {!cityWeather.error ? city : `${cityWeather.error}:${city}`}
          </Text>
        </View>
        <View style={styles.cardIcon}>
          {!cityWeather.error
            ? weatherConditionMap[mainWeatherCondition]
            : null}
          <Text
            style={{
              fontSize: 15,
              color: COLORS.onPrimary,
              textAlign: 'center',
            }}
          >
            {!cityWeather.error ? condition1 : null}
          </Text>
        </View>
        <View style={styles.cardTempDetails}>
          <View>
            <Text
              style={{ fontSize: 45, color: COLORS.onPrimary, marginTop: 10 }}
            >
              {!cityWeather.error ? `${temperature} °` : null}
            </Text>
          </View>
        </View>
        <Pressable>
          <AntDesign
            name="close"
            size={22}
            color="white"
            onPress={() => dialogoEliminar(city)}
          />
        </Pressable>
      </TouchableOpacity>
    </>
  )
}
const styles = StyleSheet.create({
  cardContainer: {
    width: '100%',
    backgroundColor: '#00c5ff',
    minHeight: 100,
    padding: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardContainerError: {
    width: '100%',
    backgroundColor: 'red',
    minHeight: 100,
    padding: 10,
    borderRadius: 10,
    shadowColor: COLORS.black,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    flexDirection: 'row',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  cardCityDetails: {
    justifyContent: 'space-evenly',
    maxWidth: '44%',
  },
  cardTempDetails: {
    justifyContent: 'space-between',
    paddingVertical: 10,
    marginVertical: 10,
  },
  cardIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '30%',
  },
  IconDelete: {},
})

export default CardList
