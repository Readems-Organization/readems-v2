import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';
import { Home, Books, Signin, Waitlists } from './routes';

const App = () => {
  const [auth] = useState(false);
  const [openWaitlistForm, setOpenWaitlistForm] = useState(false);

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

  return (
    <>
      <BrowserRouter>
        <input type='checkbox' id='theme' />
        <div className='App'>
          <Header setOpenWaitlistForm={setOpenWaitlistForm} />

          <Routes>
            <Route
              path='/'
              element={
                auth ? (
                  <Home />
                ) : (
                  <Waitlists
                    openWaitlistForm={openWaitlistForm}
                    setOpenWaitlistForm={setOpenWaitlistForm}
                  />
                )
              }
            />
            <Route path='/books' element={<Books />} />
            <Route path='/users/signin' element={<Signin />} />
            <Route
              path='/users/waitlist'
              element={
                <Waitlists
                  openWaitlistForm={openWaitlistForm}
                  setOpenWaitlistForm={setOpenWaitlistForm}
                />
              }
            />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
