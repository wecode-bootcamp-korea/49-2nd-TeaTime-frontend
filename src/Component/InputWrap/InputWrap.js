import React from 'react';
import Input from '../Input/Input';
import { ReactComponent as Error } from '../../svg/error.svg';
import { ReactComponent as Done } from '../../svg/done.svg';
import './InputWrap.scss';

const InputWrap = props => {
  const { className, scale, fullWidth, placeholder, type, disabled, name } =
    props;

  return (
    <div className="inputWrap">
      <Input
        className={className}
        scale={scale}
        fullWidth={fullWidth}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
      />
      {name === 'userId' && className === `input error` && (
        <div className="errorText">
          <Error />
          <span>6글자 이상 소문자와 숫자로 혼합된 아이디를 입력해주세요.</span>
        </div>
      )}
      {name === 'userPw' && className === `input error` && (
        <div className="errorText">
          <Error />
          <span>
            비밀번호는 영문, 숫자, 특수기호를 조합하여 8~20글자 이상
            입력해주세요.
          </span>
        </div>
      )}
      {name === 'userPwCheck' && className === `input error` && (
        <div className="errorText">
          <Error />
          <span>비밀번호가 일치하지 않습니다.</span>
        </div>
      )}
    </div>
  );
};

export default InputWrap;
