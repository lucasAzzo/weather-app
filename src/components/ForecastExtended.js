import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import ForecastItem from './ForecastItem/index';
import './styles.css';

/*
const days = ['Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes',];

const data = {
    temperature: 10,
    humidity: 10,
    weatherState: 'normal',
    wind: 'normal',
};
*/

const api_key = "b62f4c776e3b79a63706347f061baefe";
const url = "http://api.openweathermap.org/data/2.5/forecast";


class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null };
    }

    componentDidMount() {
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {console.log(weather_data);}
        )
    }

    renderForecastItemDays() {
        return "Render items";
        //return days.map(day => (<ForecastItem weekDay={day} hour={10} data={data}></ForecastItem>))
    }

    renderProgress = () => {
        return "Cargando Pronostico extendido...";
    }

    render(){
        const { city } = this.props;
        const { forecastData } = this.state;
        return (
        <div>
            <h2 className="forecast-title">Pronóstico Extendido para {city}</h2>
            {forecastData ? this.renderForecastItemDays() : this.renderProgress()}
        </div>)
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
}

export default ForecastExtended;