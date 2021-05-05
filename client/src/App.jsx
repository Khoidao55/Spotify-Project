import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  useEffect(() => {
    axios.get('/categories')
    .then(data => console.log('data:', data))
    .catch(err => console.log(err))
  });
  return (
    <div>
      <h1>Khoi's World</h1>
    </div>
  )
}

export default App;