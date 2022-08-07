import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Nav from './components/nav/Nav';
import { Home, Books, Signin, WaitList } from './routes';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <input type='checkbox' id='theme' />
        <div className='App'>
          <Nav />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/books' element={<Books />} />
            <Route path='/users/signin' element={<Signin />} />
            <Route path='/users/waitlist' element={<WaitList />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
