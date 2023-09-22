import React from 'react';
import Input from '../Input/Input';
import './InputWrap.scss';
const InputWrap = props => {
  const { className = 'inputWrap' } = props;
  return (
    <div className={`inputWrap ${className}`}>
      <Input placeholder="아이디 입력" type="text" scale="large" />
      <Input
        placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
        type="password"
        scale="large"
      />
    </div>
  );
};

export default InputWrap;
