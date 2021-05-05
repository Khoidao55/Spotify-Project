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
    <div className='background'>
      <p></p>
    </div>
  )
}

export default App;