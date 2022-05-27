import React from 'react';
import { MovieCard } from 'card';
import { Box, Grid, Title } from '@mantine/core';
import {useStore} from 'store';

export const PlaylistContent = () => {
  const {movies} =useStore();
  return (
    <>
      <Box>
        <Title>Viewing List</Title>
      </Box>
      <Grid mt={20} sx={{ gap: '1em' }}>
        {movies.map((movie) => (
          <MovieCard {...movie} key={movie.title} />
        ))}
      </Grid>
    </>
  );
};
