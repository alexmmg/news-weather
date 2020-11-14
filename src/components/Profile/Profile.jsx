import React from 'react';
import {Redirect} from "react-router-dom";

const Profile = () => {

  if (!localStorage.jwt) {
    return <Redirect to={"/login"} />
  }

  return (
      <div>
        Profile
      </div>
  );
};

export default Profile;