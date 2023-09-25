import React from 'react';
import Input from '../Input/Input';
import IconButton from '../IconButton/IconButton';
import './Count.scss';

export default function CountBox(props) {
  const { onClickPlus, onClickMinus, value } = props;

  return (
    <div className="count">
      <IconButton className="minusBtn" img="minus" onClick={onClickMinus} />
      <Input className="countInput" type="text" value={value} />
      <IconButton className="plusBtn" img="plus" onClick={onClickPlus} />
    </div>
  );
}
