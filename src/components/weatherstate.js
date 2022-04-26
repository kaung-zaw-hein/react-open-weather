import classes from './weatherstate.module.css';

const WeatherState = (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.city}>Latha</p>
            <div className={classes.temp}>
                <h1>33'C</h1>
            </div>
            <h3 className={classes.state}>Cloudy</h3>
            <p className={classes.date}>{props.data}</p>
        </div>
     );
};

export default WeatherState;