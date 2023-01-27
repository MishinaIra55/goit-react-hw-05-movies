import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const StyledLink = styled(Link)`
text-decoration: none;
  color: crimson;

  :hover,
  :focus {
    color: chartreuse;
    text-decoration: black;
  }
`;
