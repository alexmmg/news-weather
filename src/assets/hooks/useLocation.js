import { useState, useEffect } from "react";
import * as axios from "axios";
import {setWeatherData} from "../../redux/weather-reducer";

const useLocation = (options = {}) => {
  const [location, setLocation] = useState({});
  const [error, setError] = useState();

  const handleSuccess = (position) => {
    const { latitude, longitude } = position.coords;

    setLocation({
      latitude,
      longitude,
    });
  };

  const handleError = (error) => {
    setError(error.message);
  };

  useEffect(() => {

    if (!navigator.geolocation) {
      setError("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(handleSuccess, handleError, options);
  }, [options]);

  return { location, error };
};

export default useLocation;