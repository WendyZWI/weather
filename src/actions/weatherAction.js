import axios from 'axios';

//requete GET sur https://api.openweathermap.org/data/2.5/weather?q=London&appid=0aaf8a1cd595c5a845064ea52996cb45
//Axios pour faire la requete


const baseUrl = "https://api.openweathermap.org/data/2.5";
const appId = "&appid=0aaf8a1cd595c5a845064ea52996cb45"

export function getWeather(){
    return axios.get(baseUrl+"/weather?q=Japan"+appId);
}