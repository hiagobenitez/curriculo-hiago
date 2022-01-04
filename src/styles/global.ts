import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`

    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
  
    }
  body {
    overflow-x: hidden;
  }
  ::-webkit-scrollbar {
  background: #000200;
  width: 3px;
}
::-webkit-scrollbar-thumb {
  background: #2EEB2E ;
  border-radius: 6px;
}
  `;

export default GlobalStyles;
