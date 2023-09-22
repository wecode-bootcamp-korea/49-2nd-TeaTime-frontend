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
    text,
    onChange,
    children,
  } = props;
  return (
    <label className="label">
      <input
        className={className}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        scale={scale}
        text={text}
        onChange={onChange}
      >
        {children}
      </input>
      <span>{text}</span>
    </label>
  );
};

export default Input;
