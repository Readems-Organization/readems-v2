import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/mainHeader/Header';
import { Books, Signin, Waitlists, LandingPage, SignUp } from './routes';
import { AppContainer } from './components/styles/Global';
import { toast } from 'react-toastify';

// import Translate from './Translate';

const App = () => {
  const [auth] = useState(true);

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

  toast.configure();

  const user = false;

  return (
    <>
      <BrowserRouter>
        <AppContainer>
          {user ? (
            <div>
              <Header />
              <Routes>
                <Route path='/books' element={<Books />} />
              </Routes>
            </div>
          ) : (
            <Routes>
              <Route path='/users/signin' element={<Signin />} />
              <Route path='/users/signup' element={<SignUp />} />

              <Route
                path='/'
                element={auth ? <LandingPage /> : <Waitlists />}
              />
              <Route path='/users/waitlist' element={<Waitlists />} />
            </Routes>
          )}
        </AppContainer>
      </BrowserRouter>
    </>
  );
};

export default App;
