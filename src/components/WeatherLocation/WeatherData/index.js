import React from 'react';
import PropTypes from 'prop-types';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';

const WeatherData = ({ data: { temperature, weather_state, humidity, wind } }) => (
    <div className="weatherDataCont">
        <WeatherTemperature temperature={temperature} weatherState={weather_state}></WeatherTemperature>
        <WeatherExtraInfo humidity={humidity} wind={wind}></WeatherExtraInfo>
    </div>
);

WeatherData.propTypes = {
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weather_state: PropTypes.PropTypes.string.isRequired,
        humidity: PropTypes.PropTypes.number.isRequired,
        wind: PropTypes.PropTypes.string.isRequired,
    })
};

export default WeatherData;