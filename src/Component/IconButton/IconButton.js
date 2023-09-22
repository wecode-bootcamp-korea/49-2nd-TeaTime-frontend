import React from 'react';
import './IconButton.scss';

const IconButton = props => {
  const {
    className = 'iconBtn',
    type = 'button',
    scale = 'small',
    img,
    children,
  } = props;
  return (
    <button className={className} type={type} scale={scale} img={img}>
      {children}
    </button>
  );
};

export default IconButton;
