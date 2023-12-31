import React from 'react';
import './IconButton.scss';

const IconButton = props => {
  const {
    className,
    type = 'button',
    scale = 'small',
    img,
    children,
    onClick,
    plusOnClick,
  } = props;

  return (
    <button
      className={className ? `iconBtn ${className}` : 'iconBtn'}
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
