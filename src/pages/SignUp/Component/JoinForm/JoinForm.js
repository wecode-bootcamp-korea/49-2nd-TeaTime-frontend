import React, { useState } from 'react';
import Input from '../../../../Component/Input/Input';
import InputWrap from '../../../../Component/InputWrap/InputWrap';
import Button from '../../../../Component/Button/Button';
import JoinCheckBox from '../JoinInput/JoinCheckBox';

const JoinForm = props => {
  const [isChecked, setIsChecked] = useState(false);
  const [joinInfo, setJoinInfo] = useState({
    userId: '',
    userPw: '',
    userPwCheck: '',
    userName: '',
    userEmail: '',
    userPhonePrefix: '010',
    userPhone: '',
  });

  const {
    userId,
    userPw,
    userPwCheck,
    userName,
    userEmail,
    userPhonePrefix,
    userPhone,
  } = joinInfo;

  const { onScroll, isScroll } = props;

  const idRegExp = /^[A-Za-z0-9]{6,}$/;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,20}$/;
  const emailRegExp =
    /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

  const isIdValidation = !idRegExp.test(userId);
  const isPasswordValidation = !passwordRegEx.test(userPw);
  const isPhoneValidation = `${userPhonePrefix}-${userPhone}`.length === 13;
  const isEmailValidation = !emailRegExp.test(userEmail);

  const handleUserPhone = e => {
    e.target.value = e.target.value
      .replace(/[^0-9]/g, '')
      .replace(/([0-9]{3,4})([0-9]{4})/g, '$1-$2');
  };

  const isCheckItemHandler = e => {
    if (e.target.checked) {
      setIsChecked(true);
    } else {
      setIsChecked(false);
    }
  };

  const onChangeHandler = e => {
    const { name, value } = e.target;

    setJoinInfo({ ...joinInfo, [name]: value });
  };

  const handlerJoinBtn = e => {
    e.preventDefault();

    fetch('http://10.58.52.115:8000/user/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        name: userName,
        login_id: userId,
        password: userPw,
        email: userEmail,
        phoneNumber: `${userPhonePrefix}-${userPhone}`,
        is_agree: isChecked,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('회원가입이 완료되었습니다.');
          window.location.replace('/login');
        } else if (res.code === 'ALREADYLOGIN_ID') {
          alert('중복된 아이디입니다.');
        }
      });
  };

  const handleIdCheck = () => {
    fetch('http://10.58.52.115:8000/user/check-duplicate-userid', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        login_id: userId,
      }),
    })
      .then(res => res.json())
      .then(res => {
        if (res.message === 'SUCCESS') {
          alert('사용 가능한 아이디입니다.');
        } else {
          alert('사용 불가능한 아이디입니다.');
        }
      });
  };

  const isSignUpValidation =
    !isIdValidation &&
    !isPasswordValidation &&
    userName.length >= 1 &&
    isPhoneValidation &&
    !isEmailValidation &&
    isChecked;

  return (
    <form className="signUpForm" onChange={onChangeHandler}>
      <fieldset>
        <legend className="legend">회원가입</legend>
        <div className="signUpInputWrap">
          <div className="signUpNcsry">
            <p>기본 정보</p>
            <span>필수 사항</span>
          </div>
          <div className="signUpInput">
            <div className="signUpIdCheck">
              <InputWrap
                className={`input ${isIdValidation && 'error'}`}
                scale="large"
                placeholder="아이디 입력 (영문, 숫자 조합)"
                name="userId"
                type="text"
              />
              <Button
                className="signUpIdCheckBtn"
                scale="xSmall"
                shape="fill"
                color="tertiary"
                onClick={handleIdCheck}
              >
                중복확인
              </Button>
            </div>
            <InputWrap
              className={`input ${isPasswordValidation && 'error'}`}
              scale="large"
              fullWidth="true"
              placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
              name="userPw"
              type="password"
            />
            <InputWrap
              className={`input ${userPw !== userPwCheck && 'error'}`}
              scale="large"
              fullWidth="true"
              placeholder="비밀번호 확인"
              name="userPwCheck"
              type="password"
            />
          </div>
          <div className="signUpNcsry">
            <p>이름</p>
            <span>필수 사항</span>
          </div>
          <div>
            <Input
              scale="large"
              fullWidth="true"
              placeholder="이름"
              name="userName"
            />
          </div>

          <div className="signUpNcsry">
            <p>이메일</p>
            <span>필수 사항</span>
          </div>
          <div>
            <Input
              scale="large"
              fullWidth="true"
              placeholder="이메일"
              name="userEmail"
            />
          </div>
          <div className="signUpNcsry">
            <p>전화번호</p>
            <span>필수 사항</span>
          </div>
          <div className="signUpPhone">
            <select className="signUpSelect" name="userPhonePrefix">
              <option>010</option>
              <option>011</option>
              <option>016</option>
              <option>017</option>
            </select>

            <Input
              className="input signUpInput"
              scale="large"
              placeholder="전화번호"
              name="userPhone"
              onChange={handleUserPhone}
            />
          </div>
          <JoinCheckBox
            onChange={isCheckItemHandler}
            onScroll={onScroll}
            isScroll={isScroll}
          />
        </div>

        <div className="signUpBtnWrap">
          <Button
            className="signUpBtn"
            scale="large"
            shape="fill"
            fullWidth="true"
            color="primary"
            disabled={!isSignUpValidation ? true : false}
            onClick={handlerJoinBtn}
          >
            회원가입
          </Button>
        </div>
      </fieldset>
    </form>
  );
};

export default JoinForm;
