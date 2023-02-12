import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  justify-content: center;
  align-items: center;
  
  font-family:'Roboto', sans-serif;
  background-color: ${({ theme }) => theme.color.background};
  height: 100vh;
}

button {
  cursor: pointer;
}

`