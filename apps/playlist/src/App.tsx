import React from 'react';
import {AppShell} from 'ui';
import {PlaylistContent} from 'playlist-content';
// import {MoviesContent} from 'movie-content';

// @ts-ignore
import MoviesContent from 'movies/Movies';

function App() {
  return (
    <div>
      <AppShell
        title="Playlist"
        colorScheme="dark"
        routes={[
          {
            path: '/',
            element: MoviesContent,
          },
          {
            path: '/playlist',
            element: PlaylistContent,
          },
        ]}
        navLinks={[
          {
            label: 'Home',
            path: '/',
          },
          {
            label: 'Playlist',
            path: '/playlist',
          },
        ]}
      />
    </div>
  );
}

export default App;
