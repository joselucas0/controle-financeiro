import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.palette.background.default};
    min-height: 100vh;
    font-family: ${({ theme }) => theme.typography.fontFamily};
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;