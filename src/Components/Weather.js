import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            temperature : 0,
            name : '',
            icon : '',
        }
    }
    getWeather = async () => {
        const apiKey = process.env.REACT_APP_API_KEY;
        await fetch(`https://api.openweathermap.org/data/2.5/weather?q=Incheon&appid=${apiKey}`)
        .then(response => response.json())
        .then(json => {
            this.setState({
                temperature : Math.floor(json.main.temp - 273.15),
                name : json.weather[0].main,
                icon : json.weather[0].icon,
            });
        });
    }
    
    componentDidMount() {
        this.getWeather();
    }
    
    render() {
        const { temperature, name, icon } = this.state;
        const img_url = `http://openweathermap.org/img/w/${icon}.png`;
    
        return (
            <>
                <h1>오늘의 날씨</h1>
                <img alt = "weather_icon" src = {img_url} />
                <h3>온도 : {temperature}℃</h3>
                <h3>날씨 : {name}</h3>
            </>
        );
    }
}

export default Weather;