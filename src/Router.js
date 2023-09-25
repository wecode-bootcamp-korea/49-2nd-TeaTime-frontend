import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Component/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import SignUp from './pages/SignUp/SignUp';
import MyPage from './pages/MyPage/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/mypage/:tabId" element={<MyPage />} />
        <Route path="/mypage" element={<Navigate to="/mypage/userinfo" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
