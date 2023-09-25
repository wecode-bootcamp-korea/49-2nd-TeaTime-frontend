import React from 'react';
import './Chip.scss';

const Chip = props => {
  const { className, scale, checked, text, onClick } = props;
  return (
    <div
      className={className ? `chip ${className}` : 'chip'}
      data-scale={scale}
      data-checked={checked}
      onClick={onClick}
    >
      <div className="chipTitle">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Chip;
