import { Suspense } from "react";
import { Outlet } from 'react-router-dom';
import {Container, Header, StyledLink} from './Layout.styled'

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <StyledLink to="/" end>
            Home
          </StyledLink>   
          <StyledLink to="/movies">
            Movies
          </StyledLink>
        </nav>
      </Header>
      <Suspense>
            <Outlet />
    </Suspense>
    </Container>
   
  )
}