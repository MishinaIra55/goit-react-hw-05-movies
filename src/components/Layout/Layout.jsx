import {  Outlet } from 'react-router-dom';
import { StyledNavLink } from './Layout.styled';

export const Layout = () => {
  return(
    <>
      <header>
        <nav>
          <li>
            <StyledNavLink to='/'>Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to='/movies'>Movies</StyledNavLink>
          </li>
        </nav>
      </header>
      <main>
        <Outlet/>
      </main>
    </>
  )
 }
