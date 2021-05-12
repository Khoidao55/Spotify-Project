import React, { useEffect, useState } from 'react';
import Login from './Components/Login/Login.jsx';
import CategoriesSelection from './Components/CategoriesSelection/CategoriesSelection.jsx'
import axios from 'axios';
import './App.css';

const code = new URLSearchParams(window.location.search).get('code');
const App = () => {
  return code
  ? (
    <div>
      <CategoriesSelection code={code} />
    </div>
  )
  :(
    <div>
      <Login />
    </div>
  )
}

export default App;