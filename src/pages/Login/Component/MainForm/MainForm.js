import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Input from '../../../../Component/Input/Input';
import Button from '../../../../Component/Button/Button';
import './MainForm.scss';

const MainForm = props => {
  const [userInfo, setUserInfo] = useState({
    userId: '',
    userPw: '',
  });
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false); // 체크박스 체크 여부 [true, false]
  const { userId, userPw } = userInfo;

  useEffect(() => {
    if (localStorage.getItem('isChecked') === 'true') {
      setIsChecked(true);
      setUserInfo({ ...userInfo, userId: localStorage.getItem('userId') });
    } else {
      setIsChecked(false);
      setUserInfo({ ...userInfo, userId: '' });
    }
  }, []);

  const checkItemHandler = e => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const onChangeCheck = e => {
    const { name, value } = e.target;

    setUserInfo({ ...userInfo, [name]: value });
  };

  const onSubmit = e => {
    e.preventDefault();

    fetch('http://51.20.57.76:8000/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        loginId: userId,
        password: userPw,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          if (!isChecked) {
            localStorage.setItem('accessToken', res.accessToken);
            localStorage.setItem('isChecked', false);
            localStorage.removeItem('userId');
            navigate('/');
          } else {
            localStorage.setItem('accessToken', res.accessToken);
            localStorage.setItem('userId', userId);
            localStorage.setItem('isChecked', true);
            navigate('/');
          }
        } else if (res.code === 'ERRORLOGIN_ID') {
          alert('아이디가 일치하지 않습니다.');
        } else if (res.code === 'PASSWORDERROR') {
          alert('비밀번호가 일치하지 않습니다.');
        }
      });
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
            value={isChecked ? localStorage.getItem('userId') : null}
          />
          <Input
            placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
            type="password"
            scale="large"
            name="userPw"
          />

          <Input
            className={`checkbox ${isChecked ? 'checked' : ''}`}
            type="checkbox"
            text="아이디 저장"
            onChange={checkItemHandler}
          />

          <Button
            className="loginBtn"
            scale="large"
            shape="fill"
            color="primary"
            fullWidth="true"
            onClick={onSubmit}
            disabled={!loginValidation() ? true : false}
          >
            <span>로그인</span>
          </Button>

          {/* <ul className="snsLoginBtn">
            <li>
              <IconButton type="submit" img="kakao">
                <span>
                  카카오 <br />
                  로그인
                </span>
              </IconButton>
            </li>
          </ul> */}
          <ul className="bottomMenu">
            <li>
              <Link to="#">아이디 찾기</Link>
            </li>
            <li>
              <Link to="#">비밀번호 찾기</Link>
            </li>
          </ul>

          <Button
            className="joinBtn"
            fullWidth="true"
            shape="outLine"
            color="primary"
            onClick={() => navigate('/signup')}
          >
            <div className="joinText" type="button">
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
