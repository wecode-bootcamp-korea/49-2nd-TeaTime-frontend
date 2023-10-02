import React, { useEffect, useState } from 'react';
import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import Chip from '../../Component/Chip/Chip';
import ImgBanner from '../../Component/ImgBanner/ImgBanner';
import BestList from './BestList/BestList';
import './Best.scss';

const Best = () => {
  // state
  const [bestData, setBestData] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();

  // hooks
  const params = useParams();
  const navigate = useNavigate();

  // var
  const currentChip = params.bestType || 'best';
  const sort = searchParams.get('sort');

  // useEffects
  useEffect(() => {
    if (
      params.bestType !== 'best' &&
      params.bestType !== 'giftBest' &&
      params.bestType !== 'weeklyBest'
    ) {
      navigate('/best/best', { replace: true });
    }

    fetch(`http://51.20.57.76:8000/products/best?sort=${sort}`)
      .then(res => res.json())
      .then(result => setBestData(result.data));
  }, [params.bestType, navigate, currentChip, sort]);

  // handlers
  const onClickChip = (bestType, index) => {
    searchParams.set('sort', index);
    setSearchParams(searchParams);
    navigate(`/best/${bestType}?sort=${index}`);
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

      {currentChip === 'weeklyBest' && (
        <ImgBanner
          src="../../../images/tea-banner (3).jpg"
          alt="weeklyBest 상품 배너"
          text="주간 베스트"
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
                onClick={() => {
                  onClickChip('best', 1);
                }}
              />
            </li>
            <li>
              <Chip
                scale="large"
                checked={currentChip === 'weeklyBest'}
                text="위클리 베스트"
                onClick={() => {
                  onClickChip('weeklyBest', 2);
                }}
              />
            </li>
            <li>
              <Chip
                scale="large"
                checked={currentChip === 'giftBest'}
                text="선물하기 베스트"
                onClick={() => {
                  onClickChip('giftBest', 3);
                }}
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
