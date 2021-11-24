import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { API_KEY } from '@env'

function getCityWeather(city) {
  const cityWithoutSpecialChars = city
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')

  const [weatherData, setWeatherData] = useState({})

  useEffect(async () => {
    await getWeather()
  }, [city])

  const instance = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5/weather',
    url: `https://api.openweathermap.org/data/2.5/weather`,
    params: {
      units: 'metric',
      lang: 'es',
      q: `${cityWithoutSpecialChars},ar`,
      appid: API_KEY,
    },
  })

  const getWeather = async () => {
    await instance
      .get()
      .then((res) => {
        setWeatherData(res.data)
      })
      .catch((err) => {
        setWeatherData({})

        if (err.response.status === 404) {
          setWeatherData({ error: 'No se encontró informacion para ' })
        }
      })
  }

  return weatherData
}

export default getCityWeather
