import React from 'react';
import './Input.scss';

const Input = props => {
  const {
    className = 'input',
    placeholder,
    type,
    disabled,
    name,
    scale,
    children,
  } = props;
  return (
    <label htmlFor="input">
      <input
        className={`input ${className}`}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        scale={scale}
        htmlFor="input"
      >
        {children}
      </input>
    </label>
  );
};

export default Input;
