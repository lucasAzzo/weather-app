import React from 'react';
import PropTypes from 'prop-types';
import WeatherData from './../WeatherLocation/WeatherData';

const ForecastItem = ({weekDay, hour, data}) => (
    <div>
        <div>{weekDay} Hora: {hour} hs</div>
        <WeatherData data={data}></WeatherData>
    </div>
)

ForecastItem.propTypes = {
    weekDay: PropTypes.string.isRequired,
    hour: PropTypes.number.isRequired,
    data: PropTypes.shape({
        temperature: PropTypes.number.isRequired,
        weather_state: PropTypes.PropTypes.string.isRequired,
        humidity: PropTypes.PropTypes.number.isRequired,
        wind: PropTypes.PropTypes.string.isRequired,
    }),
}

export default ForecastItem;