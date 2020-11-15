import React from 'react';
import {Redirect} from "react-router-dom";

const Weather = (props) => {
  console.log(props.isAuth);
  if (localStorage.jwt === "false" && !props.isAuth) {
    return <Redirect to={"/login"} />
  }

  return (
      <div>
        Weather
      </div>
  );
};

export default Weather;