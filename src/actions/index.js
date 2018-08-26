import axios from 'axios'
const API_KEY = '08614133efcb172d51b564e737ec33e4'
export const FETCH_WEATHER = 'FETCH_WEATHER'
export const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city}`
    const request = axios.get(url)
    return {
        type : FETCH_WEATHER,
        payload : request
    }
}