import React, { Component } from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import { SUN, } from './../../constants/weathers';

const location = "Buenos Aires,ar";
const api_key = "b62f4c776e3b79a63706347f061baefe";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;

const data = {
    temperature: 5,
    weatherState: SUN,
    humidity: 10,
    wind: '10 m/s'
}

class WeatherLocation extends Component {

    constructor(){
        super();
        this.state = {
            city: "Buenos Aires",
            data: data,
        };
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getData = weather_data => {
        const {humidity, temp} = weather_data.main;
        const {speed} = weather_data.wind;
        const weather_state = this.getWeatherState(weather_data);

        const data = {
            humidity,
            temperature: temp,
            weather_state,
            wind: `${speed} m/s`
        }

        return data;
    }

    handleUpdateClick = () => {
        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            this.setState({
                data: newWeather
            })
        });
    }

    render() {
        const {city, data} = this.state;
        return (<div className="weatherLocationCont">
            <Location city={city}></Location>
            <WeatherData data={data}></WeatherData>
            <button onClick={this.handleUpdateClick}>Actualizar</button>
        </div>)
    }
};

export default WeatherLocation;