import React from 'react';
import './Main.scss';
import BestList from './Components/BestList';
const Main = () => {
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
            <button className="trBoxMore">
              <span>바로가기 +</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
