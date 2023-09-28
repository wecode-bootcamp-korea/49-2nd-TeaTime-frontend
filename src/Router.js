import React from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import Nav from './Component/Nav/Nav';
import Main from './pages/Main/Main';
import Login from './pages/Login/Login';
import Products from './pages/Products/Products';
import Product from './pages/Product/Product';
import SignUp from './pages/SignUp/SignUp';
import Payment from './pages/Payment/Payment';
import MyPage from './pages/MyPage/MyPage';
import Best from './pages/Best/Best';

const Router = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/best/:bestType" element={<Best />} />
        <Route path="/best" element={<Navigate to="/best/best" />} />
        <Route path="/mypage/:tabId" element={<MyPage />} />
        <Route path="/mypage" element={<Navigate to="/mypage/userinfo" />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
