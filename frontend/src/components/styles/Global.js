import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Inter:wght@200;500;600;800&family=Lato:wght@100;300;400;700;900&display=swap'); */


  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box ;
    font-family: 'Lato', sans-serif;

  }

  :root{
   --bg-black-900: #ffffff;
  --bg-black-100: #353535;
  --bg-black-50: #2b2c2f;
  --bg-opacity: rgba(43, 44, 47, 0.5);
  --text-black-900: #000000;
  --text-black-700: #ffffff;
  --text-black-600: #bbbbbb;
  --outer-shadow: 3px 3px 3px #222327, -3px -3px 3px #363636;
  --outer-shadow-0: 0 0 0 #222327, 0 0 0 #363636;
  --inner-shadow: inset 3px 3px 3px #222327, inset -3px -3px 3px #363636;
  --inner-shadow-0: inset 0px 0px 0px #222327, inset 0px 0px 0px #363636;
  --text-gray-0: #c6c6c7;
  --text-black-0: #191722;
}



  body.dark{
 --bg-black-900: #000000;
  --bg-black-100: #dddddd;
  --bg-black-50: #eff0f4;
  --bg-opacity: rgba(255, 255, 255, 0.5);
  --text-black-900: #fff;
  --text-black-700: #555555;
  --text-black-600: #666666;
  --text-black-300: #bbbbbb;
  --outer-shadow: 3px 3px 3px #d0d0d0, -3px -3px 3px #f8f8f8;
  --outer-shadow-0: 0 0 0 #d0d0d0, 0 0 0 #f8f8f8;
  --inner-shadow: inset 3px 3px 3px #d0d0d0, inset -3px -3px 3px #f8f8f8;
  --inner-shadow-0: inset 0px 0px 0px #d0d0d0, inset 0px 0px 0px #f8f8f8;
   --text-gray-0: #c6c6c7;
    --text-black-0: #d9d9d9;

}

body {
  background-color: var(--bg-black-900);
  color: var(--text-black-900);
}

  /* html {
  overflow: scroll;
    overflow-x: hidden;
    ::-webkit-scrollbar {
    width: 0;
  }

  ::-webkit-scrollbar-thumb {
    background: #ff0000;
  }
  } */

  body, h1, h2, h3, h4, h5, h6, p, ol, ul, button, span {
    margin: 0;
    padding: 0;
    /* font-family: ${({ theme }) => theme.fontFamily.primary}; */
    /* font-family: 'Lato', sans-serif; */
     /* color: var(--text-black-900); */

  }


  ul, li {
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

    img {
       filter: invert(1);
    }
  }

  #theme {
    display: none;
  }

`;

export const AppContainer = styled.div`
  max-width: 1500px;
  width: 100%;
  margin: 0 auto;
  /* border: 2px solid ${({ theme }) => theme.colors.greyishNavy}; */
  padding: 0 30px;
`;
