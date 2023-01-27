import { useEffect, useState } from 'react';
import { getTrendingMovies } from '../../services/movies.service';
import { StyledList } from './HomePage.styled';
import { MovieItem } from '../../components/MovieItem/MovieItem';

export const HomePage = () => {
  const [movies, setMovies] = useState([]);


  useEffect(() => {
    const fetchData = async ({ page }) => {
      try {
        const results = await getTrendingMovies({ page });
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData({ page: 1 });
  }, []);

  return (
    <div>
      <h1>Trending today</h1>
      <StyledList>
        {movies?.map(({id, title })=> (
          <MovieItem key={ id} id={id} title={title}/>
        ))}
      </StyledList>
    </div>
  );
}
