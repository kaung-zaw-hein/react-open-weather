import  {useState} from 'react';
import Input from './Input';
import WeatherState from './weatherstate';
import classes from './Container.module.css'

const Container = () => {
    const [value, setValue] = useState('1234');

    const SearchCityweather = (entername) => {
        setValue(entername);
    };

    return(
        <div className={classes.container} style={{ backgroundImage: `url(https://images.unsplash.com/photo-1485677959733-60c357f80d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80)` }}>
            <div className={classes.blur}>
                <Input entername={SearchCityweather}/>
                <WeatherState data={value}></WeatherState>
            </div>
        </div>
    )
}

export default Container;