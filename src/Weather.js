import React, { useState } from "react";
import axios from 'axios';
import './Weather.css'

function Weather() {

    const [weather, setWeather] = useState('');
    const apikey = '2f45668e9e68388f5c3ebab7c41e0b0b';

    function getWeather(city) {
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apikey}&units=metric`)
            .then((result) => {
                setWeather(result.data)
            }).catch((err) => {
                console.log(err)
            });
    }


    function wData() {
        if(weather !== "" ){
        return (
            <div className="cdata">
                <p>{weather.name}</p>
                <p>{weather.main.temp} °C</p>
                <p>{weather.weather[0].main}</p>
            </div>
        )}else{
            return ""
        }
    }

    return (
        <div className="container">
            <div className="cities">
                <p onClick={() => getWeather('Jeruzalem')}>Jeruzalem</p>
                <p onClick={() => getWeather('Gaza')}>Gaza</p>
                <p onClick={() => getWeather('Cairo')}>Cairo</p>
                <p onClick={() => getWeather('Tunis')}>Tunis</p>
                <p onClick={() => getWeather('Baghdad')}>Baghdad</p>
            </div>
            <div >
            {wData()}
            </div>
        </div>
    )

}
export default Weather;
