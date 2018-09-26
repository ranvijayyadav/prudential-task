import {GET_WEATHER} from "../constants";
import environments from "./../../environments"

export const getWeather = (city, country )=> ({
    type: GET_WEATHER,
    promise: client => client.get(`${environments.API_URL}?q=${city},${country}&appid=${environments.APP_ID}&cnt=5`)
});

//http://api.openweathermap.org/data/2.5/forecast?q=Mumbai,in&appid=e4a2f18f580be77b9a099f5cf187b867&cnt=5

//http://openweathermap.org/img/w/02d.png