import React, { useState } from "react";
import axios from 'axios';
import './Weather.css'
import 'bootstrap/dist/css/bootstrap.min.css';

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


    // function wData() {
    //     if(weather !== "" ){
    //     return (
    //         <div className="cdata">
    //             <p>{weather.name}</p>
    //             <p>{weather.main.temp} °C</p>
    //             <p>{weather.weather[0].main}</p>
    //         </div>
    //     )}else{
    //         return ""
    //     }
    // }
    function wData() {
        if (weather !== "") {
            return (
                <div className="contanier">
                    <div className='row bg-light'>
                        <p className="badge  text-dark  fs-1">{weather.name}</p>
                        <p className="badge text-dark  fs-1">{weather.main.temp} °C</p>
                        <p className="badge text-dark  fs-1">{weather.weather[0].main}</p>
                        <div>
                            <img src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                                alt='icon' width="100" height="100" />
                        </div>
                    </div>
                </div>
            )
        } else {
            return <div className="text-uppercase"><br />"Please Choose a Country ..,"</div>
        }
    }

    return (
        <div className="container">

            <p className='btn btn-outline-dark' onClick={() => getWeather('Jeruzalem')}>Jeruzalem</p>
            <p className='btn btn-outline-dark' onClick={() => getWeather('Gaza')}>Gaza</p>
            <p className='btn btn-outline-dark' onClick={() => getWeather('Cairo')}>Cairo</p>
            <p className='btn btn-outline-dark' onClick={() => getWeather('Tunis')}>Tunis</p>
            <p className='btn btn-outline-dark' onClick={() => getWeather('Baghdad')}>Baghdad</p>


            {wData()}

        </div>
    )

}
export default Weather;
