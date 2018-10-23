import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {CLOUD} from '../../constants/weathers';

const WeatherData = (data) => (
    <div>
        <WeatherTemperature temperature={20} weatherState={CLOUD}></WeatherTemperature>
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
);

export default WeatherData;