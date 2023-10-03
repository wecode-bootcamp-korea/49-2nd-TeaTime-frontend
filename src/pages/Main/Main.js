import React from 'react';
import './Main.scss';
import BestList from './Components/BestList';
import { useNavigate } from 'react-router-dom';
import Button from '../../Component/Button/Button';
const Main = () => {
  const navigate = useNavigate();
  const goTrbox = () => {
    navigate('/trbox');
  };
  return (
    <div className="main">
      <div className="mainImg">
        <img alt="이미지" src="/images/main.png" />
      </div>
      <div className="contents">
        <BestList />
        <div className="trboxImg">
          <img alt="이미지" src="/images/trbox.png" />
          <div className="trboxBtnBox">
            <Button
              className="trBoxMore"
              scale="middle"
              shape="fill"
              color="bording"
              onClick={goTrbox}
            >
              바로가기 +
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
