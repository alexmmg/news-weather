import React, {useEffect, useState} from 'react';
import useLocation from "../../assets/hooks/useLocation";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import {setLocalError, setWeatherData} from "../../redux/weather-reducer";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import CityWeather from "./CityWeather";
import LocalCityWeather from "./LocalCityWeather";

const LocalWeather = (props) => {
    const dispatch = useDispatch();
    const {location, error} = useLocation();
    const weather = useSelector(state => state.weather);
    const [apiError, setApiError] = useState({})


    useEffect(() => {
        const getWeather = async () => {
            try {
                const apikey = `0f525f6e24d072a9dd5bbca6e92dc9b1`;
                const lat = location.latitude;
                const lngt = location.longitude;
                console.log(lat);

                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lngt}&appid=${apikey}&units=metric`)
                dispatch(setWeatherData(response.data.main, response.data.name))
            } catch (err) {
                // setApiError({error: err.message});
                // console.log(err.message);
            }
        }

        getWeather()
    }, [])

    console.log(apiError);

    return (
        <div>
            {error
                ? <div> {error}</div>
                : <LocalCityWeather city={weather.name} humidity={weather.main.humidity} pressure={weather.main.pressure} temp={weather.main.temp} />
            }
        </div>
    );
};

export default LocalWeather;