import * as React from 'react';
import {AppShell as MantineAppShell, Header, MantineProvider, Navbar, Text, Title} from "@mantine/core";
import {Outlet, BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import { NavLink, NavRoute } from '../../types/routeType';
import { MainLink } from '../../MainLink';

import {useStore} from 'store';

export const AppShell: React.FunctionComponent<{
  title: string;
  colorScheme?: 'light' | 'dark';
  navLinks:NavLink[]
  routes: NavRoute[];
}> = ({ title, colorScheme, routes, navLinks }) =>{
  const {movies}=useStore();
  return (
  <BrowserRouter>
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme }}>
      <MantineAppShell
        padding="md"
        navbar={
          <Navbar width={{base:300}} height={500} p="xs">
            {navLinks.map((link)=>(
              <MainLink {...link} key={link.path} />
            ))}
          </Navbar>
        }
        header={
          <Header
            height={60}
            p="xs"
            sx={{ display: 'flex' }}
            styles={(theme) => ({
              main: {
                backgroundColor:
                  theme.colorScheme === 'dark'
                    ? theme.colors.dark[8]
                    : theme.colors.gray[0],
              },
            })}
          >
            <Title sx={{flexGrow:1}}>{title}</Title>
            <Text size="xl">{movies.length} selected</Text>
          </Header>
        }
      >
        <Routes>
          {routes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={<route.element />}
            />
          ))}
        </Routes>
        <Outlet></Outlet>
      </MantineAppShell>
    </MantineProvider>
  </BrowserRouter>
)};
