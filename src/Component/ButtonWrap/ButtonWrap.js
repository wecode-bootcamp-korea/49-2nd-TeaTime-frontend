import React from 'react';
import Button from '../Button/Button';
import './ButtonWrap.scss';

const ButtonWrap = props => {
  const { className, type, scale, text, onClick, disabled, shape, children } =
    props;
  return (
    <div className={`btnWrap ${className}`}>
      <Button
        className={className}
        type={type}
        scale={scale}
        text={text}
        onClick={onClick}
        disabled={disabled}
        shape={shape}
      >
        {children}
      </Button>
    </div>
  );
};

export default ButtonWrap;
