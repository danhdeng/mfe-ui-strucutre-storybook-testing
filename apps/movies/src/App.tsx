import React from 'react';
import logo from './logo.svg';
import './App.css';
import {AppShell} from 'ui';

function App() {
  return (
    <div>
      <AppShell
        title="Movies"
        colorScheme="dark"
        routes={[
          {
            path: '/',
            element: () => <div>this is home page</div>,
          },
          {
            path: '/playlist',
            element: () => <div>this is PLAYLIST page</div>,
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
