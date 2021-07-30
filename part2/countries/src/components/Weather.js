import axios from 'axios'
import React, { useState, useEffect } from 'react'

const Weather = ({ capital }) => {
    const api_key = process.env.REACT_APP_API_KEY
    const [ weather, setWeather ] = useState([])

    useEffect(() => {
        axios
        .get('http://api.weatherstack.com/current', { params: { access_key: api_key, query: capital } })
        .then(response => {
            setWeather(response.data.current)
    }) }
    , [])

    if (weather) {
        return (
            <div>
                <h2>Weather in {capital}</h2>
                <b>temperature: </b> {weather.temperature} Celcius
                <br />
                <img src={weather.weather_icons} alt="Weather icon" />
                <br />
                <b>wind: </b> {weather.wind_speed} mph direction {weather.wind_dir}
            </div>
            )
    }

    else {
        return (
            <div>
                Cannot read weather data
            </div>
        )
    }
}

export default Weather

