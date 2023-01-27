import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  display: flex;
  font-size: 20px;

  &.active {
    color: chocolate;
  }
`
export const StyledHeader = styled.header`
  padding: 20px;
`;
 export const StyledList = styled.ul`
 display: flex;
  gap: 20px;
   list-style: none;
 `
