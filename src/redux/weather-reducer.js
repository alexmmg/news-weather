const SET_WEATHER_DATA = 'weather/SET_WEATHER_DATA';
const SET_CITY_WEATHER_DATA = 'weather/SET_CITY_WEATHER_DATA';

let initialState = {
    main: {
        humidity: "",
        pressure: "",
        temp: ""
    },
    name: "",
    searchHistory: []

};

const weatherReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_WEATHER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        case SET_CITY_WEATHER_DATA: {
            let searchHistory = [...state.searchHistory];
            searchHistory.push(action.payload.cityWeather);
            return {
                ...state,
                searchHistory
            };
        }

        default:
            return state;
    }
};


export const setWeatherData = (main, name) => ({
    type: SET_WEATHER_DATA,
    payload: {main, name}
});

export const setCityWeatherData = (cityWeather) => ({
    type: SET_CITY_WEATHER_DATA,
    payload: {cityWeather}
});


// export const getMyAccount = () => async (dispatch) => {
//     let response = await authAPI.getMyAccount();
//     if (response.credentials) {
//         let {email, login} = response.credentials;
//         dispatch(setAuthUserData(email, login, true));
//     }
// };
//
// export const login = (email, password) => async (dispatch) => {
//     let response = await authAPI.login(email, password);
//     if (response === "OK") {
//         localStorage.setItem("jwt", "true");
//         dispatch(setAuthUserData(email, login, true));
//     }
// };
//
//
// export const logout = (email, password) => async (dispatch) => {
//     let response = await authAPI.logout(email, password);
//     if (response === "LOGGED OUT") {
//         dispatch(setAuthUserData(null, null, null));
//         localStorage.setItem("jwt", "false");
//     }
// };

export default weatherReducer;
