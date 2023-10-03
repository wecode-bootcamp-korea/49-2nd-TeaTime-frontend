import React from 'react';
import BestList from './Components/BestList';
import EventSwiper from './Components/EventSwiper/EventSwiper';
import './Main.scss';
import { useNavigate } from 'react-router-dom';
import Button from '../../Component/Button/Button';
const Main = () => {
  const navigate = useNavigate();
  const goTrbox = () => {
    navigate('/trbox');
  };
  return (
    <div className="main">
      <EventSwiper />
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
