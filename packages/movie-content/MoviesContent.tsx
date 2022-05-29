import React from 'react'
import {MovieCard} from 'card';
import  movies from './data.json';
import { Grid, Title, Box } from '@mantine/core';

export const MoviesContent = () => {
  return (
    <>
     <Box>
        <Title>Movies</Title>
      </Box>
      <Grid mt={20} sx={{gap:"1em"}}>
        {movies.map((movie)=>(
          <MovieCard {...movie} key={movie.title} showAddButton />
        ))}
      </Grid>
    </>
  )
}
