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
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 200px;
      background: ${({ theme }) => theme.palette.primary.gradient};
      z-index: -1;
    }
  }

  a {
    text-decoration: none;
    color: inherit;
  }
`;