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
    onClick,
    value,
    children,
  } = props;

  return (
    <label className="label">
      <input
        className={className ? `input ${className}` : 'input'}
        placeholder={placeholder}
        type={type}
        disabled={disabled}
        name={name}
        scale={scale}
        text={text}
        value={value}
        onChange={onChange}
        onClick={onClick}
      >
        {children}
      </input>
      <span>{text}</span>
    </label>
  );
};

export default Input;
