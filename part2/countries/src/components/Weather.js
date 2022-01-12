import axios from "axios";
import { useEffect, useState } from "react";

const Weather = ({countrie}) => {

    const[weather, setWeather] = useState([]);

    useEffect(() => {
        const params = {
            q: countrie.capital[0],
            appid: process.env.REACT_APP_API_KEY_WEATHER
        };

        axios
        .get(`https://api.openweathermap.org/data/2.5/weather`, {params})
        .then(resp => {
            setWeather([resp.data]);
        }).catch(error => console.log(error))
    }, []);

    const convertKelvinToCelsius = (tempK) => {
        return (Math.round((tempK - 273.15) * 10) / 10).toFixed(1);
    };

    return (
        <div>
            <h2>Weather in {weather.length > 0 ? weather[0].name : 'Cargando...' }</h2>

            temperature: {weather.length > 0 ? convertKelvinToCelsius(weather[0].main.temp) : 'Cargando...'}
        </div>
    )
};

export default Weather;