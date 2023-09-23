import React, { useState } from 'react';
import Header from '../Login/Component/Header/Header';
import JoinForm from './Component/JoinForm/JoinForm';
import './SignUp.scss';

const SignUp = () => {
  const [isScroll, setIsScroll] = useState(false);

  const isScrollCheck = e => {
    const scroll =
      e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight;

    setIsScroll(scroll);
  };

  return (
    <div className="signUp">
      <Header text="회원가입" />
      <div className="signUpContainer">
        <JoinForm onScroll={isScrollCheck} isScroll={isScroll} />
      </div>
    </div>
  );
};

export default SignUp;
