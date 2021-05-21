import React, { useState, useEffect } from 'react';
import useAuth from '../../useAuth.jsx';
import SpotifyWebAPI from 'spotify-web-api-node';
import Credentials from '../../../../Credentials.js';
import CustomButton from '../CustomButton/CustomButton.jsx';
import PlaylistGenre from '../PlaylistGenre/PlaylistGenre.jsx';
import axios from 'axios';
import './CategoriesSelection.css';

const spotifyAPI = new SpotifyWebAPI({
  clientId: Credentials.clientID
})


const CategoriesSelection = ({ code }) => {
  const accessToken = useAuth(code);
  const [categories, setCategories] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState();

  useEffect(() => {
    if(!accessToken) return
    spotifyAPI.setAccessToken(accessToken)
    spotifyAPI.getCategories({
      offset: 0,
      country: 'US',
      locale: 'sv_US'
    })
    .then(function(data) {
      console.log(data.body);
      setCategories(data.body.categories.items);
    }, function(err) {
      console.log("Something went wrong!", err);
    });
  }, [accessToken])

  let genreClick = (genre) => {
    console.log(genre);
    let acceptableGenre = genre.toLowerCase();
    spotifyAPI.getPlaylistsForCategory(acceptableGenre, {
      country: 'US',
      limit : 2,
      offset : 0
    })
  .then(function(data) {
    console.log(data.body);
    setSelectedGenre(data.body);
  }, function(err) {
    console.log("Something went wrong!", err);
  });
  }

  if (categories.length === 0) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    return (
      <div className="genre-container">
        <ul>
        {categories.map(category => {
          return(
            <li>
              <CustomButton onClick={() => genreClick(category.name)} className="signin-button custom-button-ghost">
                {category.name}
              </CustomButton>
            </li>
          )
        })}
        </ul>
      </div>
    )
  }
}

export default CategoriesSelection;