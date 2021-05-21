import React from 'react';

const PlaylistGenre = (genre) => {
  const embedURL = 'https://open.spotify.com/embed';

  return (
    <div>
      <iframe
        title="This Week’s Playlist"
        src={embedURL + genre.playlists.items[0].external_urls.spotify.slice(embedURL.length - 6)}
        width="100%"
        height="320"
        class="spotifyPlayer"
        frameborder="0"
        allowtransparency="true"
        allow="encrypted-media"></iframe>
    </div>
  )
}

export default PlaylistGenre;