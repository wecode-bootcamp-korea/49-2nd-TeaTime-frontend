import React, { useState } from 'react';
import Header from './Component/Header/Header';
import MainForm from './Component/MainForm/MainForm';
import './Login.scss';

const Login = () => {
  return (
    <div className="login">
      <Header text="로그인" />
      <MainForm />
    </div>
  );
};

export default Login;
