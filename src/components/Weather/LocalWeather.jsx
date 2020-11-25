import React, {useEffect} from 'react';
import useLocation from "../../assets/hooks/useLocation";
import axios from 'axios';
import {useDispatch, useSelector} from "react-redux";
import {setWeatherData} from "../../redux/weather-reducer";
import LocalCityWeather from "./LocalCityWeather";

const LocalWeather = () => {
    const dispatch = useDispatch();
    const {location, error} = useLocation();
    const weather = useSelector(state => state.weather);


    useEffect(() => {
        const getWeather = async () => {
            try {
                const apikey = `0f525f6e24d072a9dd5bbca6e92dc9b1`;
                const lat = location.latitude;
                const lngt = location.longitude;
                // console.log(1)

                //Works only with https certificate or add console.log(1) above to test the API
                const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lngt}&appid=${apikey}&units=metric`)
                dispatch(setWeatherData(response.data.main, response.data.name))
            } catch (err) {
                console.log(err.message);
            }
        }
        getWeather()
    }, [])


    return (
        <div>
            {error
                ? <div> {error}</div>
                : <LocalCityWeather city={weather.name} humidity={weather.main.humidity} pressure={weather.main.pressure}
                                  temp={weather.main.temp}/>
            }
        </div>
    );
};

export default LocalWeather;