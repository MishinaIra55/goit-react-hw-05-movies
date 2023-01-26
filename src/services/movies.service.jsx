import axios from 'axios';


const KEY = 'ba8dcbd85c920d35a18c62d81006cd9d ';

const moviesGetApi = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});


export const getTrendingMovies = async () => {
  const { data } = await moviesGetApi.get(`trending/movie/day`, {
    params: {
      api_key: KEY,
      page: 1,
    },
  });
  return data.results.map(({id, title }) => ({id, title }));
};
