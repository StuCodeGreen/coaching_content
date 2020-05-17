import { createGlobalStyle } from 'styled-components/macro';

const GlobalStyle = createGlobalStyle`
  * {
    border: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: auto;
		font-weight: inherit;
		font-style: normal;
    margin: 0;
    outline: 0;
    padding: 0;
    text-decoration: none;
    text-rendering: optimizeLegibility;
    -webkit-appearance: none;
    -moz-appearance: none;
  }
  html {
    font-size: 14px;
    line-height: 1.5;
    color: #16171a;
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    overflow-wrap: break-word;
    background-color: #E5E5E5;
  }
  body {
    box-sizing: border-box;
    font-family: 'Montserrat', Arial, Helvetica, sans-serif;
	}
`;

export default GlobalStyle;
