import React from 'react';
import BestList from './Components/BestList';
import EventSwiper from './Components/EventSwiper/EventSwiper';
import './Main.scss';
const Main = () => {
  return (
    <div className="main">
      <EventSwiper />
      <div className="contents">
        <BestList />
        <div className="trboxImg">
          {/* <img alt="이미지" src="/images/trbox.png" /> */}
          <div className="trboxBtnBox">
            {/* <button className="trBoxMore">
              <span>바로가기 +</span>
            </button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
