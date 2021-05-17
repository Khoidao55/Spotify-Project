import React, { useState, useEffect } from 'react';
import useAuth from '../../useAuth.jsx';
import SpotifyWebAPI from 'spotify-web-api-node';
import Credentials from '../../../../Credentials.js';
import CustomButton from '../CustomButton/CustomButton.jsx';
import './CategoriesSelection.css';

const spotifyAPI = new SpotifyWebAPI({
  clientId: Credentials.clientID
})

const embedURL = 'https://open.spotify.com/embed';

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
      //locale: 'sv_SE'
    })
    .then(function(data) {
      console.log(data.body);
      setCategories(data.body.categories.items);
    }, function(err) {
      console.log("Something went wrong!", err);
    });

    spotifyAPI.getPlaylistsForCategory('party', {
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
  }, [accessToken])


  if (categories.length === 0 || !selectedGenre) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  } else {
    {console.log(selectedGenre)}
    return (
      <div className="genre-container">
        <ul>
        {categories.map(category => {
          return(
            <li>
              <CustomButton className="signin-button custom-button-ghost">
                {category.name}
              </CustomButton>
            </li>
          )
        })}
        </ul>
        {/* <iframe title="This Week’s Playlist" src={embedURL + selectedGenre.playlists.items[0].external_urls.spotify.slice(embedURL.length - 6)} width="100%" height="320" class="spotifyPlayer" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe> */}
      </div>
    )
  }
}

export default CategoriesSelection;