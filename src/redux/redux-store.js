import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';
import weatherReducer from "./weather-reducer";

let reducers = combineReducers({
    weather: weatherReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;
