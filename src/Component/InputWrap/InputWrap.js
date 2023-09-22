import React from 'react';
import Input from '../Input/Input';
import './InputWrap.scss';
const InputWrap = props => {
  const { className = 'inputWrap', children } = props;

  return <div className={`inputWrap ${className}`}>{children}</div>;
};

export default InputWrap;
