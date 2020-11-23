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


const Weather = (props) => {
    const dispatch = useDispatch();
    const {location, error} = useLocation();
    const isAuth = useSelector(state => state.auth.isAuth);
    const weatherHistory = useSelector(state => state.weather.searchHistory);
    // const{humidity = main.humidity, pressure = main.pressure, temp = main.temp, name = name} = weatherHistory;

    const [city, setCity] = useState("")
    const [cityOnButtonClick, setCityOnButtonClick] = useState("")


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

    console.log(weatherHistory);
    return (
        <Grid container spacing={1}>
            <Grid container item xs={8} spacing={3}>
                <form noValidate autoComplete="off">
                    <TextField value={city} onChange={e => setCity(e.target.value)} id="outlined-basic"
                               label="Find city"
                               variant="outlined"/>
                    <Button type='submit' variant="contained" color="primary" onClick={handleClick}>Search</Button>
                </form>

                <div>
                    {
                        weatherHistory.map((el, index) => (
                            <CityWeather city={el.name} country={el.sys.country} humidity={el.main.humidity} pressure={el.main.pressure}
                                         temp={el.main.temp} key={el.id} i={index} />)
                        )
                    }
                </div>

            </Grid>
            <Grid container item xs={4} spacing={3}>
                <LocalWeather/>
            </Grid>
        </Grid>
    )
};

export default Weather;
