import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';
// import 'react-toastify/dist/ReactToastify.css';
import App from './App';
import { GlobalStyle } from './components/styles/Global';
import theme from './components/themes';
import { store } from './redux/store';
// import { Translate } from './Translate';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </ThemeProvider>,

  document.getElementById('root'),

  // document.getElementById('google_element'),
);
