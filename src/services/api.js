import axios from 'axios';

//link by lat and lon 
//api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}

//link by city name
//api.openweathermap.org/data/2.5/weather?q=London&appid={API key}

//lin by lat and lon 5 days/3hour
//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}

//link by city name, 5 days/3hour
//api.openweathermap.org/data/2.5/forecast?q={city name}&appid={API key}
const api = axios.create ({

    
    baseURL: 'https://api.openweathermap.org/data/2.5/'

})

export default api;