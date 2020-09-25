import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  html {
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }

  body {
    background-color: #ffffff;
    scroll-behavior: smooth;
    text-rendering: optimizeSpeed;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  a,
  button,
  div {
    margin: 0;
    font-size: inherit;
  }

  a {
    text-decoration: inherit;
    color: inherit;
  }

  button,
  select,
  input,
  textarea {
    font: inherit;
  }
`

export default GlobalStyle
