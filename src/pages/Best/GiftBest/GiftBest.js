import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chip from '../../../Component/Chip/Chip';
import BestList from '../BestList/BestList';
import './GiftBest.scss';

const GiftBest = () => {
  const [giftBestData, setGiftBestData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/GiftBestData.json')
      .then(res => res.json())
      .then(data => setGiftBestData(data));
  }, []);

  return (
    <div className="giftBest">
      <div className="giftBestContainer">
        <div className="bestChipBtnWrap">
          <ul className="ChipBtn">
            <li>
              <Chip scale="large" checked="true" text="베스트 상품" />
            </li>
            <li>
              <Chip scale="large" checked="false" text="선물하기 베스트" />
            </li>
          </ul>
        </div>

        <div className="giftBestListTitle">
          <h2>2023년 10월 1째주</h2>
        </div>

        <BestList bestData={giftBestData} navigate={navigate} />
      </div>
    </div>
  );
};
export default GiftBest;
