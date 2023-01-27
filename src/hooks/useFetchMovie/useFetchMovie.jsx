import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMovieById } from '../../services/movies.service';

export const useFetchMovie =()=> {
  const {movieId} = useParams();
  const [movie, setMovie]= useState(null);

  useEffect(() => {
    getMovieById(movieId)
      .then(setMovie)
      .catch(error => console.log(error));
  },[movieId]);

return movie;
}
