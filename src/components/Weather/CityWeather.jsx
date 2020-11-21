import React from 'react';

const CityWeather = ({city, humidity, pressure, temp}) => {

    return (
        <div>
            {city}
            {humidity}
            {pressure}
            {temp}
        </div>
    );
};

export default CityWeather;