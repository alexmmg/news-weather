// import * as axios from "axios";
import {credentials} from "../assets/data/data"

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
