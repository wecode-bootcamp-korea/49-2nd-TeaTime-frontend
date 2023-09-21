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
      fullWidth={fullWidth}
      color={color}
    >
      {children}
    </button>
  );
};

export default Button;
