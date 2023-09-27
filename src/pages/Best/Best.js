import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Chip from '../../Component/Chip/Chip';
import ImgBanner from '../../Component/ImgBanner/ImgBanner';
import BestList from './Component/BestList/BestList';
import './Best.scss';

const Best = () => {
  const [bestData, setBestData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('/data/BestComponentData.json')
      .then(res => res.json())
      .then(data => setBestData(data));
  }, []);

  return (
    <div className="best">
      <ImgBanner
        src="../../../images/tea-banner.jpg"
        alt="best 상품 배너"
        text="베스트"
      />

      <div className="bestContainer">
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

        <div className="bestListTitle">
          <h2>2023년 10월 1째주</h2>
        </div>
        <BestList bestData={bestData} navigate={navigate} />
      </div>
    </div>
  );
};

export default Best;
