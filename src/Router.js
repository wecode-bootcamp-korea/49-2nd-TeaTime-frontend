import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Nav from './Component/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
