import React from 'react';
import './Main.scss';
import BestList from './Components/BestList';
const Main = () => {
  return (
    <div className="main">
      <div className="mainImg">
        <img src="/images/main.png"></img>
      </div>
      <div className="contents">
        <BestList />
        <div className="trboxImg">
          <img src="/images/trbox.png"></img>
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
