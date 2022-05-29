import React from 'react';
import {AppShell} from 'ui';
import {PlaylistContent} from 'playlist-content';
import ErrorBoundary from './ErrorBoundary';

// @ts-ignore
// import MoviesContent from 'movies/Movies';
const MoviesContent = React.lazy(() => import('movies/Movies'));

function App() {
  return (
    <div>
      <AppShell
        title="Playlist"
        colorScheme="light"
        routes={[
          {
            path: '/',
            element: ()=>(
              <ErrorBoundary><MoviesContent /></ErrorBoundary>
            ),
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
