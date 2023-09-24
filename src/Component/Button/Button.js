import React from 'react';
import './Button.scss';

/**
 * Button Component
 * @param className 버튼의 클래스명
 * @param type 버튼의 타입 (button, submit)
 * @param scale 버튼의 크기(small, medium, large)
 * @param fullWidth width 100% 여부
 * @param disabled 버튼의 비활성화 여부
 * @param shape 버튼의 모양(fill, outline, tap)
 * @param img 버튼의 이미지 (close, ...)
 * @param color primary, secondary
 */
const Button = props => {
  const {
    className,
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
      className={className ? `btn ${className}` : 'btn'}
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
