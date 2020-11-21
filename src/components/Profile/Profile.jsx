import React from 'react';
import {Redirect} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";

const Profile = () => {
  const isAuth = useSelector(state => state.auth.isAuth);
  if (!isAuth) {
    return <Redirect to={"/login"}/>
  }

  return (
      <div>
        Profile
      </div>
  );
};

export default Profile;