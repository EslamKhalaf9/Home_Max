import axios from 'axios';
import React from 'react';
import MovieCard from '../../components/movies/MovieCard';
import { useQuery } from '@tanstack/react-query';

export const fetchMovies = async () => {
  const { data } = await axios.get(`http://localhost:8000/movies`);
  return data;
};

const MoviesPage = () => {
  const { data } = useQuery<string[], Error>(['movies'], () => fetchMovies());

  return (
    <div className='moviesList flex flex-wrap gap-4 justify-center'>
      {data?.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
  );
};

export default MoviesPage;
