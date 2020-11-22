import React from 'react';
import {Button} from "@material-ui/core";
import {deleteCityWeatherData} from "../../redux/weather-reducer";
import {useDispatch, useSelector} from "react-redux";


const CityWeather = ({city, humidity, pressure, temp, index}) => {
    const dispatch = useDispatch();

    console.log(index);

    const handleClick = () => {
        // e.preventDefault()
        dispatch(deleteCityWeatherData(index))
    }

    return (
        <div>
            {city}
            {humidity}
            {pressure}
            {temp}
            <Button onClick={(index) => {handleClick(index)}} >X</Button>
        </div>
    );
};
// (key) => {dispatch(deleteCityWeatherData(key))}

export default CityWeather;