import  React, {useEffect,useState} from 'react';
import Input from './Input';
import WeatherState from './weatherstate';
import classes from './Container.module.css';
import Spinnner from './spinner/Spinner';
import cold from './assets/winter.avif';
import hot from './assets/summer.avif';

const Container = () => {
    const [searchTerm, setSearchTerm] = useState("lanmadaw");
    const [tempInfo, setTempInfo] = useState({});
    const [loading, setloading]  = useState(true);
    const [httpError, setHttpError] = useState();


    const SearchCityweather = (entername) => {
        setSearchTerm(entername);
    };

    const getWeatherInfo = async () => {
        try {
        setloading(true);
          let url = `http://api.openweathermap.org/data/2.5/weather?q=${searchTerm}&units=metric&appid=4629514969e5416648023e360603cbec`;
    
          let res = await fetch(url);
          let data = await res.json();
          const { temp, humidity, pressure } = data.main;
          const { main: weatherType } = data.weather[0];
          const { name } = data;
          const { speed } = data.wind;
          const { country, sunset } = data.sys;
    
          const myNewWeatherInfo = {
            temp,
            humidity,
            pressure,
            weatherType,
            name,
            speed,
            country,
            sunset,
          };
    
          setTempInfo(myNewWeatherInfo);
          setloading(false);
        } catch (error) {
            setHttpError("Your searched city name is not exist");
          setloading(false);
        }
      };
    
      useEffect(() => {
        getWeatherInfo();
      }, [searchTerm]);

      if(loading){
        return (
          <div className="menu">
            <div className="loadingnerror">
                    <Spinnner />
            </div>
          </div>
         
        );
      }
  
      if (httpError) {
        return (
          <div className="menu">
            <div className="loadingnerror">
              <h1>{httpError}</h1>
            </div>
          </div>
          
        );
      }


    return(
        <div className={classes.container} style={{ backgroundImage: `url(${ tempInfo.temp < 16 ? cold : hot})` }}>
            <div className={classes.blur}>
                <Input entername={SearchCityweather}/>
                <WeatherState temp = {tempInfo.temp}
                            humidity = {tempInfo.humidity}
                            pressure = {tempInfo.pressure} 
                            weatherType = {tempInfo.weatherType}
                            name = {tempInfo.name}
                            speed = {tempInfo.speed}
                            country = {tempInfo.country}
                            sunset = {tempInfo.sunset} />
            </div>
        </div>
    )
}

export default Container;