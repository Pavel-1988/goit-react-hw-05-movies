import styled from 'styled-components';
import { NavLink } from 'react-router-dom';




export const Container = styled.div`
  max-width: 970px;
  margin: 0 auto;
  padding: 0 15px;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  padding: 8px 0;
  margin-bottom: 15px;
  border-bottom: 1px solid black;

  > nav {
    display: flex;
  }
`;


export const StyledLink = styled(NavLink)`
  padding: 8px 16px;
  border-radius: 4px;
  text-decoration: none;
  color: black;
  font-weight: 500;

  &.active {
    color: white;
    background-color: orangered;
  }
  :hover:not(.active) {
    color: orangered;
  }
`;