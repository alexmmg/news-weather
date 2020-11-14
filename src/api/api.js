import * as axios from "axios";
import {credentials} from "../assets/data/data"

// let authHeader = () => {return {headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}}};

const instance = axios.create({
  withCredentials: false,
  baseURL: 'http://coach.panter.fun/api/v1/'
});

export const authAPI = {
  getMyAccount() {
    return credentials;
  },

  login(email, password) {
    if (email == credentials.email && password == credentials.password) {
      return "OK";
    }
  },

  logout(email, password) {
      return "LOGGED OUT";
  }
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  }
};
