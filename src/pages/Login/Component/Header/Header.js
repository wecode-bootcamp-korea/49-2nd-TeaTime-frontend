import React from 'react';
import { useNavigate } from 'react-router-dom';
import IconButton from '../../../../Component/IconButton/IconButton';
import './Header.scss';

const Header = props => {
  const { text } = props;
  const navigate = useNavigate();
  return (
    <header className="header">
      <div className="headerBox">
        <div className="inner">
          <h1>{text}</h1>
          <IconButton
            className="closeBtn"
            img="close"
            onClick={() => {
              navigate('/');
            }}
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
