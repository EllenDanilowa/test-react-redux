import {createGlobalStyle} from 'styled-components';
import colors from './styles/colors';

import './styles/fonts.css';

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto, sans-serif;
  }
  
  a,
  a:visited {
    color: ${colors.link};
    text-decoration: none;
  }
  
  a:hover {
    text-decoration: underline;
  }
`;
