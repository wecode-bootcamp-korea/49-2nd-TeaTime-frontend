import React from 'react';
import './IconButton.scss';

const IconButton = props => {
  const {
    className = 'iconBtn',
    type = 'button',
    scale = 'small',
    img,
    onClick,
    plusOnClick,
    children,
  } = props;
  return (
    <button
      className={`iconBtn ${className}`}
      type={type}
      scale={scale}
      img={img}
      onClick={onClick}
      plusOnClick={plusOnClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
