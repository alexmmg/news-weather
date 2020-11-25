import {useState, useEffect} from "react";

const useLocation = () => {
    const [location, setLocation] = useState({});
    const [error, setError] = useState();

    const options = {enableHighAccuracy: false, timeout: 8000, maximumAge: 850000};

    const handleSuccess = (position) => {
        const {latitude, longitude} = position.coords;

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
    }, []);

    return {location, error};
};

export default useLocation;