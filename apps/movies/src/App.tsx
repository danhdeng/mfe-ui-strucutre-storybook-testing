import React from 'react';
import {AppShell} from 'ui';
import {MoviesContent} from 'movie-content';
import { PlaylistContent } from 'playlist-content';

function App() {
  return (
    <div>
      <AppShell
        title="Movies"
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
