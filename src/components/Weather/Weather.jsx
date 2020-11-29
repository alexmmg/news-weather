import useLocation from "../../assets/hooks/useLocation";
import React, {useEffect, useState} from 'react';
import LocalWeather from "./LocalWeather";
import axios from "axios";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {setCityWeatherData} from "../../redux/weather-reducer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import CityWeather from "./CityWeather";
import makeStyles from "@material-ui/core/styles/makeStyles";


const Weather = (props) => {
    const dispatch = useDispatch();
    const {location, error} = useLocation();
    const isAuth = useSelector(state => state.auth.isAuth);
    const weatherHistory = useSelector(state => state.weather.searchHistory);
    const [city, setCity] = useState("")
    const [cityOnButtonClick, setCityOnButtonClick] = useState("")

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,

        },
        item: {
            textAlign: 'center',
            margin: 20
        },
        button: {
            margin: 9,

        }
    }));
    const classes = useStyles();

    useEffect(() => {
        let cityWeather = async () => {
            try {
                const apikey = `0f525f6e24d072a9dd5bbca6e92dc9b1`;

                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cityOnButtonClick}&appid=${apikey}&units=metric`)
                dispatch(setCityWeatherData(response.data))
            } catch (e) {
            }
        }

        cityWeather()

    }, [cityOnButtonClick])

    if (!isAuth) {
        return <Redirect to={"/login"}/>
    }

    const handleClick = (e) => {
        e.preventDefault()
        setCityOnButtonClick(city)
        setCity('')
    }

    return (
        <Grid container spacing={1} className={classes.root}>
            <Grid item xs={12} className={classes.item}>

                <form noValidate autoComplete="off">
                    <TextField value={city} onChange={e => setCity(e.target.value)} id="outlined-basic"
                               label="Find city"
                               variant="outlined"/>
                    <Button className={classes.button} type='submit' variant="contained" color="primary"
                            onClick={handleClick}>Search</Button>
                </form>
            </Grid>
            <Grid item xs={6}>
                <div>
                    {
                        weatherHistory.map((el, index) => (
                            <CityWeather city={el.name} country={el.sys.country} humidity={el.main.humidity}
                                         pressure={el.main.pressure}
                                         temp={el.main.temp} key={el.id} i={index}/>)
                        )
                    }
                </div>
            </Grid>
            <Grid item xs={6}>
                <LocalWeather/>
            </Grid>
        </Grid>
    )
};

export default Weather;
