import React, {useRef} from 'react';
import classes from './Input.module.css';

const Input = React.forwardRef((props, ref)=> {
    const searchcity = useRef();

    const Submitehandler = (event)=> {
        event.preventDefault();
        props.entername(searchcity.current.value);
        searchcity.current.value = "";
    }

    return (
        <form onSubmit={Submitehandler} className={classes.form}>
            <input ref={searchcity} type="text" className={classes.input} placeholder="Search a City's weather"></input>
        </form>
    )
});

export default Input;