import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    transition: all 0.3s ease;
  }

  body {
    background: ${({ theme }) => theme.palette.background.default};
    font-family: ${({ theme }) => theme.typography.fontFamily};
    min-height: 100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;