import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/mainHeader/Header';
import { Books, Signin, Waitlists, LandingPage } from './routes';
import { AppContainer } from './components/styles/Global';
import axios from 'axios';
import { translate } from './redux/api';

const App = () => {
  const [auth] = useState(true);
  // const [openWaitlistForm, setOpenWaitlistForm] = useState(false);

  const changeColor = () => {
    if (localStorage.getItem('theme') !== null) {
      if (localStorage.getItem('theme') === 'light') {
        document.body.classList.remove('dark');
      } else {
        document.body.classList.add('dark');
      }
    }
  };

  useEffect(() => {
    changeColor();
  }, []);

  // useEffect(() => {
  //   translate;

  //   console.log('This is res data ', translate);
  // });

  return (
    <>
      <BrowserRouter>
        <AppContainer>
          <Header />
          <Routes>
            <Route path='/' element={auth ? <LandingPage /> : <Waitlists />} />
            <Route path='/books' element={<Books />} />
            <Route path='/users/signin' element={<Signin />} />
            <Route path='/users/waitlist' element={<Waitlists />} />
          </Routes>
        </AppContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
