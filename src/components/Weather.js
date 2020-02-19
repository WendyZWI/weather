import React, { useState, useEffect } from 'react';
import {getWeather} from '../actions/weatherAction'
//import {mockWeather} from '../mocks/mockWeather.js'

function Weather() {

    const[weather, setWeather] = useState(null);

    //User Effect => Le composant est cahrgé
    // =>Le state est modifié (géré par [])
    loadWeatherData();

    useEffect(()=>{
        loadWeatherData()
    }, [])

    function KelvinToCelsius(tempKelvin){
        return Math.round(tempKelvin - 273.15);
    }

    async function loadWeatherData(){
        const weatherAjax = await getWeather();
        console.log(weatherAjax.data);
        setWeather(weatherAjax.data);
    }

    function loadIconWeather(idIcon) {
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
    }

    return (
        <div>
            {weather ?

            <div>
                <h1>Météo : {weather.name}</h1>
                <img src={loadIconWeather(weather.weather[0].icon)} alt="pluie" />
                <p>{weather.weather[0].description}</p>
                <p>{KelvinToCelsius(weather.main.temp)}°C</p>
                </div>
                :<div>
                <h2>Météo en attente de chargement</h2>
                </div>
            }

        </div>
    )
}

export default Weather;