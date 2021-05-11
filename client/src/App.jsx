import React, { useEffect, useState } from 'react';
import Login from './Components/Login/Login.jsx';
import axios from 'axios';
import './App.css';

const App = () => {
  return (
    <div>
      <h1>Hello World</h1>
      <Login />
    </div>
  )
}

export default App;