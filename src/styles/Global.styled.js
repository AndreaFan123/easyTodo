import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@200;300;500;700;900&display=swap');

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: 'Nunito', sans-serif;
  font-size: 62.5%;
  line-height: 1.5;
  width: 100%;
  height: 100%;
  /* background: rgb(238,174,202); */
  /* background: linear-gradient(90deg, rgba(238,174,202,1) 0%, rgba(148,187,233,1) 100%); */
}

`;
