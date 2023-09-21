import React from 'react';
import './IconBtnWrap.scss';
import IconButton from '../IconButton/IconButton';

const IconBtnWrap = props => {
  const { img, children } = props;
  return (
    <div className="iconBtnWrap">
      <IconButton img={img}>{children}</IconButton>
    </div>
  );
};

export default IconBtnWrap;
