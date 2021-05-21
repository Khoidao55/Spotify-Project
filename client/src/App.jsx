import React, { useEffect, useState } from 'react';
import { Switch, Route } from "react-router-dom";
import About from './Components/About/About.jsx';
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
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/register" component={About} />
      </Switch>
    </div>
  )
}

export default App;