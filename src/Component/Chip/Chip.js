import React from 'react';
import './Chip.scss';

const Chip = props => {
  const { className, scale, checked, text, onClick, onChange } = props;
  return (
    <div
      className={className ? `chip ${className}` : 'chip'}
      data-scale={scale}
      data-checked={checked}
      onClick={onClick}
      onChange={onChange}
    >
      <div className="chipTitle">
        <span>{text}</span>
      </div>
    </div>
  );
};

export default Chip;
