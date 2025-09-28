import clearIcon from '../assets/clear.png';
import cloudIcon from '../assets/cloud.png';
import rainIcon from '../assets/rain.png';
import snowIcon from '../assets/snow.png';
import drizzleIcon from '../assets/drizzle.png';

function WeatherIcon({weather,icons}) {
    return (
        <img src={weather.icons} alt='' className='weather-icon'/>
    )
}

export default WeatherIcon;