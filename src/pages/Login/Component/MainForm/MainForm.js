import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../../Component/Input/Input';
import InputWrap from '../../../../Component/InputWrap/InputWrap';
import Button from '../../../../Component/Button/Button';
import IconButton from '../../../../Component/IconButton/IconButton';
import './MainForm.scss';

const MainForm = props => {
  const { onChange } = props;
  const navigate = useNavigate();
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });

  const { userId, userPw } = userInfo;
  const onChangeCheck = e => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  const loginValidation = e => {
    const idRegExp = /^[A-Za-z0-9]{6,}$/;
    const passwordRegEx =
      /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;

    if (!idRegExp.test(userId)) {
      return false;
    } else if (!passwordRegEx.test(userPw)) {
      return false;
    } else {
      return true;
    }
  };

  return (
    <div className="loginContainer">
      <div className="loginSubTitle">
        <h2>
          TeaTime에 오신 것을 환영합니다. <br />
          로그인 해주세요.
        </h2>
      </div>
      <form className="loginForm" onChange={onChangeCheck} onSubmit={onSubmit}>
        <fieldset>
          <legend className="legend">로그인</legend>

          <Input
            placeholder="아이디 입력"
            type="text"
            scale="large"
            name="userId"
          />
          <Input
            placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
            type="password"
            scale="large"
            name="userPw"
          />

          <Input
            className="checkbox"
            type="checkbox"
            text="아이디 저장"
            onChange={onChange}
          />
          <Button
            className="btn loginBtn"
            scale="large"
            shape="fill"
            color="primary"
            fullWidth="true"
            disabled={!loginValidation() ? true : false}
          >
            <span>로그인</span>
          </Button>

          <ul className="snsLoginBtn">
            <li>
              <IconButton type="submit" img="kakao">
                <span>
                  카카오 <br />
                  로그인
                </span>
              </IconButton>
            </li>
          </ul>
          <ul className="bottomMenu">
            <li>
              <Link to="#">
                <a href="#!">아이디 찾기</a>
              </Link>
            </li>
            <li>
              <Link to="#">
                <a href="#!">비밀번호 찾기</a>
              </Link>
            </li>
          </ul>

          <Button
            className="btn joinBtn"
            fullWidth="true"
            shape="outLine"
            color="primary"
          >
            <div
              className="joinText"
              onClick={() => {
                navigate('/');
              }}
            >
              <span>아직 회원이 아니세요?</span>
              <span className="joinSpan">회원가입</span>
            </div>
          </Button>
        </fieldset>
      </form>
    </div>
  );
};

export default MainForm;
