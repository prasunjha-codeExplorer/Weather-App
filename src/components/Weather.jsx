import React, { useEffect,useRef } from 'react'
import './Weather.css'; 
import { use } from 'react';
import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/cloud.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import drizzleIcon from '../assets/drizzle.png';
import WeatherData from './WeatherData';
import ShowTemp from './ShowTemp';
import ShowLocation from './ShowLocation';
import SearchCityTemp from './SearchCityTemp';
import WeatherIcon from './WeatherIcon';
const Weather = () => {

    const [weatherData, setWeatherData] = React.useState(true);
    const cityTemp = useRef("New York");
    const allIcons = {
        "01d": clearIcon,
        "01n": clearIcon,
        "02d": cloudIcon,
        "02n": cloudIcon,
        "03d": cloudIcon,
        "03n": cloudIcon,
        "04d": cloudIcon,
        "04n": cloudIcon,
        "09d": drizzleIcon,
        "09n": drizzleIcon,
        "10d": rainIcon,
        "10n": rainIcon,
        "11d": rainIcon,
        "11n": rainIcon,
        "13d": snowIcon,
        "13n": snowIcon,
    }
    useEffect(() => {
        handleSearch("New York");
    },[]);
    const handleSearch = async (city) => {
        try{
            const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}&units=metric`;
            const response = await fetch(apiUrl);
            const data = await response.json();
            if(data.cod === "404"){
                alert("City not found");
            }
            const iconCode = data.weather[0].icon;
            setWeatherData({
                humidity: data.main.humidity,
                wind : data.wind.speed,
                location: data.name,
                temp: Math.floor(data.main.temp),
                weatherType: data.weather[0].main,
                icons: iconCode in allIcons ? allIcons[iconCode] : clearIcon, 
            });
        }catch(error){
            alert("Error occuring when fetching the data");
        }
        cityTemp.current.value = "";
    }
  return (
    <div className='weather'>
        <SearchCityTemp city={cityTemp} search={handleSearch}/>
        {/* {weatherData && <img src={weatherData.icons} alt='' className='weather-icon'/>} */}
        {weatherData && <WeatherIcon weather={weatherData} icons={allIcons}/>}
        <ShowTemp weather={weatherData}/>
        <ShowLocation weather={weatherData}/>
        <WeatherData weather = {weatherData}/>
    </div>
  )
}

export default Weather;
