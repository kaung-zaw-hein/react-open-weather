import { useState,useEffect } from 'react';
import classes from './weatherstate.module.css';

const WeatherState = ({temp,humidity,pressure,weatherType,name,speed,country,sunset,}) => {
    const [weatherState, setWeatherState] = useState("");
  useEffect(() => {
    if (weatherType) {
      switch (weatherType) {
        case "Clouds":
          setWeatherState("wi-day-cloudy");
          break;
        case "Haze":
          setWeatherState("wi-fog");
          break;
        case "Clear":
          setWeatherState("wi-day-sunny");
          break;
        case "Mist":
          setWeatherState("wi-dust");
          break;
        case "Rain":
          setWeatherState("wi-day-rain");
          break;

        default:
          setWeatherState("wi-day-sunny");
          break;
      }
    }
  }, [weatherType]);
    //conveting the seconds in time
    let sec = sunset;
    let date = new Date(sec * 1000);
    let timeStr = `${date.getHours()}:${date.getMinutes()}`;

    const dateBuilder = (d) => {
      let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  
      let day = days[d.getDay()];
      let date = d.getDate();
      let month = months[d.getMonth()];
      let year = d.getFullYear();
  
      return `${day} ${date} ${month} ${year}`
    }
    
    return (
        <div className={classes.container}>
            <p className={classes.city}>{name}<br/>
            <span className={classes.country}>{country}</span></p>
            <div className={classes.temp}>
                <h1>{temp}°C</h1>
            </div>
            <div className={classes.state}>
                <div className={classes.twosidedsection}>
                <p>
                    <i className={"wi wi-sunset"}></i>
                </p>
                <p className="extra-info-leftside">
                    {timeStr} PM <br />
                    Sunset
                </p>
                </div>
                <div className={classes.twosidedsection}>
                    <p>
                        <i className={"wi wi-humidity"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {humidity} <br />
                        Humidity
                    </p>
                </div>
                <div className={classes.twosidedsection}>
                    <p>
                        <i className={"wi wi-rain"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {pressure} <br />
                        Pressure
                    </p>
                </div>

                <div className={classes.twosidedsection}>
                    <p>
                        <i className={"wi wi-strong-wind"}></i>
                    </p>
                    <p className="extra-info-leftside">
                        {speed} <br />
                        Speed
                    </p>
                </div>
            </div>
            <p className={classes.date}>{dateBuilder(new Date())}</p>
            <div className={classes.weatherState}><i className={`wi ${weatherState}`}></i></div>
        </div>
     );
};

export default WeatherState;