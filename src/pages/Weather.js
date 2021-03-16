import React from 'react';
import WeatherMain from '../images/weather_one.png';
import WeatherTwo from '../images/weather_two.png';
import Navigation from './Navigation';

const Weather = () => (
    <>
        <Navigation />
        <div className="container-fluid">
            <h1 className="cool-line">Weather Microsite</h1>
            <div className="row">
                <div className="col-sm-12">
                    <img className="img-fluid img-border" src={WeatherMain} alt="Weather" />
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-sm-6 ">
                    <img className="img-fluid img-border" src={WeatherTwo} alt="Weather" />
                </div>
            </div>
        </div>

    </>
)

export default Weather;
