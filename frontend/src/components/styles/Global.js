import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
    /* font-family: cursive; */
    font-family: ${({ theme }) => theme.fontFamily.cursive};

  }

   .App {
    max-width: 2000px;
    width: 100%;
    border: 2px solid ${({ theme }) => theme.colors.greyishNavy};
    background: ${({ theme }) => theme.colors.white};
    /* font-family: ${({ theme }) => theme.fontFamily.primary}; */



  }

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, button, span {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fontFamily.primary};
    /* color: ${({ theme }) => theme.colors.midnight0}; */
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
