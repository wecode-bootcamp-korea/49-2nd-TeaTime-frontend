import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Chip from '../../Component/Chip/Chip';
import ImgBanner from '../../Component/ImgBanner/ImgBanner';
import BestList from './BestList/BestList';
import './Best.scss';

const Best = () => {
  // state
  const [bestData, setBestData] = useState([]);

  // hooks
  const params = useParams();
  const navigate = useNavigate();

  // var
  const currentChip = params.bestType || 'best';

  // useEffects
  useEffect(() => {
    if (params.bestType !== 'best' && params.bestType !== 'giftBest') {
      navigate('/best/best', { replace: true });
    }

    const url =
      currentChip === 'best'
        ? '/data/BestComponentData.json'
        : '/data/GiftBestData.json';

    fetch(url)
      .then(res => res.json())
      .then(data => setBestData(data));
  }, [params.bestType, navigate, currentChip]);

  // handlers

  const onClickChip = bestType => {
    navigate(`/best/${bestType}`);
  };

  return (
    <div className="best">
      {currentChip === 'best' && (
        <ImgBanner
          src="../../../images/tea-banner.jpg"
          alt="best 상품 배너"
          text="베스트"
        />
      )}

      {currentChip === 'giftBest' && (
        <ImgBanner
          src="../../../images/tea-banner (2).jpg"
          alt="GiftBest 상품 배너"
          text="선물하기 베스트"
        />
      )}

      <div className="bestContainer">
        <div className="bestChipBtnWrap">
          <ul className="ChipBtn">
            <li>
              <Chip
                scale="large"
                checked={currentChip === 'best'}
                text="베스트 상품"
                onClick={() => onClickChip('best')}
              />
            </li>
            <li>
              <Chip
                scale="large"
                checked={currentChip === 'giftBest'}
                text="선물하기 베스트"
                onClick={() => onClickChip('giftBest')}
              />
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
