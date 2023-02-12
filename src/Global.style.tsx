import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  font: 1rem Roboto, sans-serif;
  background-color: ${({ theme }) => theme.color.background};
}

button {
  cursor: pointer;
}

`