import { useSearchParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { searchMovie } from '../../services/movies.service';
import { Container, StyledButton, StyledForm, StyledInput, StyledList } from './Movies.styled';
import { MovieItem } from '../../components/MovieItem/MovieItem';

export const Movies =()=> {
  const [searchParams, setSearchParams] = useSearchParams();
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchQuery = searchParams.get('query') ?? '';

  useEffect(()=> {
    if (!searchQuery) {
      return;
    }

    const fetchData = async () => {
      setIsLoading(true);
      try {
        const results = await searchMovie(searchQuery);
        setMovies([...results]);
      } catch (error) {
        console.log(error);
      }finally {
        setIsLoading(false);
      }
    };
    fetchData();
  }, [searchQuery]);

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.elements.search;
    setMovies([]);
    setSearchParams({query: value});
  };

  return (
    <Container>
      <StyledForm onSubmit={handleSubmit}>
        <StyledInput
          type="text"
          name="search"
          placeholder="Enter key word..."
        />
        <StyledButton type="submit">Search</StyledButton>
      </StyledForm>

      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <StyledList>
          {movies.map(({ id, title }) => (
            <MovieItem key={id} id={id} title={title} />
          ))}
        </StyledList>
      )}
    </Container>
  );
}
