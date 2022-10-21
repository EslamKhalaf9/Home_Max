// import http from "@framework/utils/http";
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';

export const fetchMovies = async () => {
  const  {data}  = await axios.get(`http://localhost:8000/movies`);
  return data;
};

export const useGetMoviesQuery = () => {
  console.log('eslamkhalaf');
  return useQuery<string[], Error>(['movies'], () => fetchMovies());
};

