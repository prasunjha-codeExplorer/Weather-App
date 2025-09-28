import  humidityIcon from '../assets/humidity.png';
import windIcon from '../assets/wind.png';
const WeatherData = ({weather}) => {
    return (
        <div className='weather-data'>
            <div className='col'>
                <img src={humidityIcon} alt='' />
                <div>
                    <h4 className='space'>{weather.humidity}%</h4>
                    <span>Humidity</span>
                </div>
            </div>
            <div className='col'>
                <img src={windIcon} alt='' />
                <div>
                    <h4>{weather.wind}m/s</h4>
                    <span>Wind Speed</span>
                </div>
            </div>
        </div>
    )
}

export default WeatherData;