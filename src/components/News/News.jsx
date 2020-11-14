import React from 'react';
import {Redirect} from "react-router-dom";

const News = () => {

  if (!localStorage.jwt) {
    return <Redirect to={"/login"} />
  }

  return (
      <div>
        News
      </div>
  );
};

export default News;