import { useLocation } from 'react-router-dom';
import { StyledLink } from './MovieItem.styled';

export const MovieItem = ({ id, title }) => {
  const location = useLocation();

  return (
    <li>
      <StyledLink to={'/movies/' + id } state = {{from: location }}>
        {title}
      </StyledLink>
    </li>
  );
};
