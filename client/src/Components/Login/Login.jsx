import React, { useState, useEffect } from 'react';

const AUTH_URL = 'https://accounts.spotify.com/authorize?client_id=41392d848d8a47f882900e44c43aa44e&response_type=code&redirect_uri=http://localhost:3000&scope=streaming%20user-read-email%20user-read-private%20user-library-read%20user-library-modify%20user-read-playback-state%20user-modify-playback-state'
const Login = () => {
  return (
    <div>
      <a href={AUTH_URL}>Log in</a>
    </div>
  )
}

export default Login;