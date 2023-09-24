import React from 'react';
import './Header.scss';

const Header = props => {
  const { text } = props;
  return (
    <header className="header">
      <div className="headerBox">
        <div className="inner">
          <h1>{text}</h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
