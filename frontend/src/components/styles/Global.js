import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;

  }

  html {
  overflow: scroll;
    overflow-x: hidden;
    /* overflow-y: scroll; */
    ::-webkit-scrollbar {
    /* display: none; */
    width: 0;
    /* background: transparent; */
  }

  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  }

   .App {
    max-width: 2000px;
    width: 100%;
    /* border: 2px solid ${({ theme }) => theme.colors.greyishNavy}; */
    background: ${({ theme }) => theme.colors.white};
    /* font-family: ${({ theme }) => theme.fontFamily.primary}; */


  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, button, span {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.primary};

  }


  ul, ol {
    list-style: none;
  }

  a {
    text-decoration: none;
    color: #000;
  }

  img {
    width:100% ;
    object-fit: cover;
  }

  button {
    cursor: pointer;
    outline: none;
    border: none;
  }

  input, textarea {
    outline: none;
    border:none ;
  }

  #theme:checked ~ .App {
    filter: invert(1);
  }

  #theme {
    display: none;
  }

`;
