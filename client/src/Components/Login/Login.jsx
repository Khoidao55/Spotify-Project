import React, { useState, useEffect, Fragment } from 'react';
import { Link } from "react-router-dom";
import "./Login.css";
import "./background.png";
import CustomButton from "../CustomButton/CustomButton.jsx";

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=41392d848d8a47f882900e44c43aa44e&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
// const Login = () => {
//   return (
//     <div>
//       <a href={AUTH_URL}>Log in</a>
//     </div>
//   )
// }

const Login = () => {
  return (
    <Fragment>
      <div className="background">
        <div className="row">
          <div className="gryffin-text-box">
            <h1 className='login-text'>SPOTIFY presents:</h1>
            <h1 className='login-text'>Electric Dance Music</h1>
            <a className="custom-button custom-button-full" href={AUTH_URL}>Login</a>
            <Link to="/register">
              <CustomButton className="custom-button custom-button-ghost">
                Register
              </CustomButton>
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

export default Login;