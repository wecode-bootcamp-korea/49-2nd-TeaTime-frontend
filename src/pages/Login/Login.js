import React, { useState } from 'react';
import Header from './Component/Header/Header';
import MainForm from './Component/MainForm/MainForm';
import './Login.scss';

const Login = () => {
  const [isChecked, setIsChecked] = useState(false); // 체크박스 체크 여부 [true, false]

  const checkItemHandler = e => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  return (
    <div className="login">
      <Header text="로그인" />
      <MainForm onChange={checkItemHandler} />
    </div>
  );
};

export default Login;
