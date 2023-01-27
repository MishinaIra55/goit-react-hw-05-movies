import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getMoviesReviews } from '../../services/movies.service';

export const useFetchReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    getMoviesReviews(movieId)
      .then(setReviews)
      .catch(error => console.error(error));
  }, [movieId]);

  return reviews;
};
