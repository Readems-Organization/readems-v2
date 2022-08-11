import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/header/Header';

import Nav from './components/nav/Nav';

import { Home, Books, Signin, Waitlists } from './routes';

const App = () => {
  const [auth, setAuth] = useState(false);
  return (
    <>
      <BrowserRouter>
        <input type='checkbox' id='theme' />
        <div className='App'>
          <Header />

          <Routes>
            <Route path='/' element={auth ? <Home /> : <Waitlists />} />
            <Route path='/books' element={<Books />} />
            <Route path='/users/signin' element={<Signin />} />
            <Route path='/users/waitlist' element={<Waitlists />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
