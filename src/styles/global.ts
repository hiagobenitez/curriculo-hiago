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
  background: #020005;
  width: 8px;
}
::-webkit-scrollbar-thumb {
  background: linear-gradient(180deg, rgba(102, 54, 221, 0) 0%, #6636DD 100%);
  border-radius: 6px;
}
  `;

export default GlobalStyles;
