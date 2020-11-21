import {authAPI} from "../api/api";

const SET_USER_DATA = 'auth/SET_USER_DATA';

let initialState = {
    // id: null,
    email: null,
    password: null,
    // isFetching: false,
    isAuth: false,

};

const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }
        default:
            return state;
    }
};


export const setAuthUserData = (email, password, isAuth) => ({
    type: SET_USER_DATA,
    payload: {email, password, isAuth}
});


// export const getMyAccount = () => async (dispatch) => {
//     let response = await authAPI.getMyAccount();
//     if (response.credentials) {
//         let {email, login} = response.credentials;
//         dispatch(setAuthUserData(email, login, true));
//     }
// };

export const login = (email, password) => async (dispatch) => {
    let response = await authAPI.login(email, password);
    if (response === "OK") {
        localStorage.setItem("jwt", "true");
        dispatch(setAuthUserData(email, password, true));
    }
};


export const logout = (email, password) => async (dispatch) => {
    let response = await authAPI.logout(email, password);
    if (response === "LOGGED OUT") {
        dispatch(setAuthUserData(null, null, false));
        localStorage.setItem("jwt", "false");
    }
};

export default authReducer;
