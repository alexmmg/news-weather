import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import dialogsReducer from "./dialogsReducer";
import sidebarReducer from "./sidebarReducer";
import authReducer from "./auth-reducer";
import thunkMiddleware from 'redux-thunk';

let reducers = combineReducers({
    dialogPage: dialogsReducer,
    sidebar: sidebarReducer,
    auth: authReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.store = store;

export default store;
