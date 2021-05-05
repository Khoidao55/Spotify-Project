import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';

const App = () => {
  return (
    <div>
      <iframe title="This Week’s Playlist" src="https://open.spotify.com/embed/playlist/3LFIBdP7eZXJKqf3guepZ1?si=91df77917f764fb1" width="100%" height="80" class="spotifyPlayer" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
    </div>
  )
}

export default App;