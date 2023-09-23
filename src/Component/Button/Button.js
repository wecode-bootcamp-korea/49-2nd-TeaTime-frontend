import React from 'react';
import './Button.scss';

const Button = props => {
  const {
    className = 'btn',
    type = 'button',
    scale,
    shape,
    item,
    disabled,
    style,
    fullWidth = false,
    color,
    onClick,
    text,
    children,
  } = props;
  return (
    <button
      className={className}
      type={type}
      scale={scale}
      shape={shape}
      item={item}
      disabled={disabled}
      style={style}
      data-fullWidth={fullWidth}
      color={color}
      onClick={onClick}
      text={text}
    >
      {children}
    </button>
  );
};

export default Button;
