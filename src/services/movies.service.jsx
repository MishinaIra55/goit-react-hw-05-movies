import axios from 'axios';


const KEY = 'ba8dcbd85c920d35a18c62d81006cd9d';

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

 export const getMovieById = async movieId => {
   const { data } = await moviesGetApi.get(`movie/${movieId}`, {
     params: {
       api_key: KEY,
       language: 'en-US',
     },
   })
   const { title, poster_path, vote_average, overview, genres } =data;

   return({ title, poster_path, vote_average, overview, genres });
 }

 export const getMoviesReviews = async movieId => {
   const {data} = await moviesGetApi.get(`movie/${movieId}/reviews`,{
   params: {
     api_key: KEY,
       language: 'en-US',
       page: 1,
       },
 });
   return data.results;
 };


 export const searchMovie = async query => {
   const { data } = await moviesGetApi.get(`search/movie`,{
     params: {
       api_key: KEY,
       language: 'en-US',
       page: 1,
       include_adult: true,
       query,
     },
   })
   return data.results.map(({id, title }) => ({ id, title }))
 };
