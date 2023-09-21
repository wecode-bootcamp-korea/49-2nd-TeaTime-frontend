import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Component/Button/Button';
import ButtonWrap from '../../Component/ButtonWrap/ButtonWrap';
import IconButton from '../../Component/IconButton/IconButton';
import IconBtnWrap from '../../Component/IconBtnWrap/IconBtnWrap';
import Header from '../../Component/Header/Header';
import './Login.scss';
import Input from '../../Component/Input/Input';
import InputWrap from '../../Component/InputWrap/InputWrap';

const Login = () => {
  return (
    <div className="login">
      <Header text="로그인" />
      <div className="loginContainer">
        <div className="loginSubTitle">
          <h2>
            TeaTime에 오신 것을 환영합니다. <br />
            로그인 해주세요.
          </h2>
        </div>
        <form className="loginForm">
          <fieldset>
            <legend className="legend">로그인</legend>
            <InputWrap />
            <Input className="idSaveCheck" type="checkbox" id="check" />
            <label htmlFor="check">아이디 저장</label>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default Login;
