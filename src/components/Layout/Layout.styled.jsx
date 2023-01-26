import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  color: aqua;
  text-decoration: none;

  display: flex;

  &.active {
    color: chocolate;
  }
`
