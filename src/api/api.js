import * as axios from "axios";
import {credentials} from "../assets/data/data"

// let authHeader = () => {return {headers: {Authorization: `Bearer ${localStorage.getItem('jwt')}`}}};

// const instance = axios.create({
//   withCredentials: false,
//   baseURL: 'http://coach.panter.fun/api/v1/'
// });

// const newsApiKey = "55a0258f13144130b0c6729c32cac542"

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

// export const newsAPI = {
//   getNews() {
//     return axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsApiKey}`);
//   }
// };
