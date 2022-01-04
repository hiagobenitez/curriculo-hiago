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
  width: 0px;
}
::-webkit-scrollbar-thumb {
  background: #000200 ;
  border-radius: 6px;
}
  `;

export default GlobalStyles;
