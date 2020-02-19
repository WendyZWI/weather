import axios from 'axios';

//requete GET sur https://api.openweathermap.org/data/2.5/weather?q=London&appid=0aaf8a1cd595c5a845064ea52996cb45
//Axios pour faire la requete


export function getWeather(){
    return axios.get("https://api.openweathermap.org/data/2.5/weather?q=Baccarat&appid=0aaf8a1cd595c5a845064ea52996cb45");
}