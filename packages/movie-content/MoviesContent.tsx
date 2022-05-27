import React from 'react'
import {MovieCard} from 'card';
import  movies from './data.json';
import { Grid, Title } from '@mantine/core';

export const MoviesContent = () => {
  return (
    <>
      <Title>Movies</Title>
      <Grid sx={{gap:"1em"}}>
        {movies.map((movie)=>(
          <MovieCard {...movie} key={movie.title} showAddButton />
        ))}
      </Grid>
    </>
  )
}
