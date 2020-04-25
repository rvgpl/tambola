import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

html {
	box-sizing: border-box;
	-webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-display: swap;
}

*,
*:before,
*:after {
  box-sizing: inherit;
}


body {
  color: #132437;
  background-color:#FFF;
  font-size: 16px;
}

img {
  max-width: 100%;
}

input,
textarea {
  line-height: var(--lh-2);
}

`;

export { GlobalStyle };
