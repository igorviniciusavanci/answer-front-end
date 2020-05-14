import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}
body: {
  -webkit-font-smoothing: antialiased;
}
html {
  background-color: #e5e5e5;
}

body, input, button {
  font-family: 'Lato', serif;
  font-size: 16px;
}

a {
  text-decoration: none;
}

button: {
  cursor: pointer;
}

`;
