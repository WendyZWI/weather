import React, { useState, useEffect } from 'react';
import {getWeather} from '../actions/weatherAction'
//import {mockWeather} from '../mocks/mockWeather.js'

function Weather() {

    const[weather, setWeather] = useState(null);
    const[city, setCity] = useState("London");

    //User Effect => Le composant est cahrgé
    // =>Le state est modifié (géré par [])
    // loadWeatherData();

    useEffect(()=>{
        loadWeatherData()
    }, [city])

    function KelvinToCelsius(tempKelvin){
        return Math.round(tempKelvin - 273.15);
    }

    async function loadWeatherData(){
        const weatherAjax = await getWeather(city);
        console.log(weatherAjax.data);
        setWeather(weatherAjax.data);
    }

    function loadIconWeather(idIcon) {
        return "http://openweathermap.org/img/wn/"+idIcon+"@2x.png";
    }

    function changeCity(city){
        setCity(city);
    }

    return (
        <div>
            {weather ?

            <div>

                <h1>Météo : {weather.name}</h1>
                <img src={loadIconWeather(weather.weather[0].icon)} alt="pluie" />

                <p>{weather.weather[0].description}</p>
                <input type="text" placeholder="city" onChange={(event)=>{changeCity(event.target.value)}} />
                
                <p>{KelvinToCelsius(weather.main.temp)}°C</p>
                <p>Precipitaiton : {weather.main.humidity}%</p>
                <p>Vitesse du vent : {weather.wind.speed}m/s</p>
                <p>Température ressentie : {KelvinToCelsius(weather.main.feels_like)}°C</p>

            </div>
            :<div>
                <h2>Météo en attente de chargement</h2>
            </div>
            }

        </div>
    )
}

export default Weather;