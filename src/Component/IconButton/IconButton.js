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
  } = props;
  return (
    <button
      className={className ? `iconBtn ${className}` : 'iconBtn'}
      type={type}
      scale={scale}
      img={img}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default IconButton;
