import React from 'react';
import environments from "./../../environments";
const WeatherCard=(props)=>{
    const tile = props.tile;
    const weatherIcon= `${environments.IMAGE_URL}${tile.weather[0].icon}.png`
    
return(
    <div>
        <h5>Time: {tile.dt_txt}</h5>
        <p>
            <span>General</span>
            <strong><span> {String(tile.weather[0].description).toLocaleUpperCase()}</span></strong>
        </p>   
        <img src={weatherIcon} alt="Smiley face" height="42" width="42"/>
        <ul>
            <li>Temp:{convertToCelcious(tile.main.temp)}°</li>
            <li>Max Temp:{convertToCelcious(tile.main.temp_max)}°</li>
            <li>Min Temp:{convertToCelcious(tile.main.temp_min)}°</li>
            <li>Wind Speed:{tile.wind.speed} mph</li>
            <li>Humidity:{tile.main.humidity}%</li>
        </ul>
    </div>)

}
const convertToCelcious=(temp)=>{
    return parseInt((temp - 273.15), 10)
}

export default WeatherCard;