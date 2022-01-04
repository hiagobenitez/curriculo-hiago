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
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(40, 208, 172, 0) 0%, #2EEB2E 100%);
  border-radius: 6px;
}
  `;

export default GlobalStyles;
