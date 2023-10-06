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
    defaultValue,
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
        defaultValue={defaultValue}
      >
        {children}
      </input>
      <span>{text}</span>
    </label>
  );
};

export default Input;
