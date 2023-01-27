import {  Outlet } from 'react-router-dom';
import { StyledNavLink, StyledHeader, StyledList } from './Layout.styled';
// import { StyledList } from '../../pages/HomePage/HomePage.styled';

export const Layout = () => {
  return(
    <>
      <StyledHeader>
        <StyledList>
          <li>
            <StyledNavLink to='/'>Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/movies'>Movies</StyledNavLink>
          </li>
        </StyledList>
      </StyledHeader>
      <main>

      </main>
      <Outlet/>
    </>
  )
 }
