// import http from "@framework/utils/http";
// import { API_ENDPOINTS } from "@framework/utils/api-endpoints";
import { useQuery } from 'react-query';

export const fetchMovies = async () => {
  // const  {data}  = await http.get(`${language}${API_ENDPOINTS.CITIES}`);
  return ['suppose it a movie (2050)'];
};

export const useGetMoviesQuery = () => {
  return useQuery<string[], Error>(['movies'], () => fetchMovies());
};
