import styled from 'styled-components';

export const Input = styled.input`
  width: 250px;
  height: 20px;
  font-size: 15px;
  margin-right: 3px;
  border-radius: 4px;
  &:focus-within {
    outline-color: orangered !important;
  }
  &:focus-visible {
    outline-color: orangered !important;
  }
  &:focus {
    outline-color: orangered !important;
  }
  &:active {
    outline-color: orangered !important;
  }
`;

export const SearchBtn = styled.input`
  padding: 4px 8px;
  background-color: orangered;
  color: white;
  border-radius: 4px;
  border-color: orangered;
  margin-left: 5px;
  font-weight: bold;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
`;