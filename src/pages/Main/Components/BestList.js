import React, { useEffect, useState } from 'react';
import IconButton from '../../../Component/IconButton/IconButton';
import '../Main.scss';
import Button from '../../../Component/Button/Button';

const BestList = () => {
  const [sortOn, setSortOn] = useState(false);
  const [data, setData] = useState([]);
  const handleSort = () => {
    setSortOn(!sortOn);
  };

  useEffect(() => {
    //fech문 사용 , sortOn true면 이번주, false면 베스트 5개 제품 가져오기
    let sort = 0;
    sortOn ? (sort = 1) : (sort = 3);
    fetch(`http://51.20.57.76:8000/products/best?sort=${sort}`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        console.log(result);
        if (result.message === 'READ_SUCCESS') {
          setData(result.data.slice(0, 5));
        } else {
          alert('오류입니다. 관리자에게 문의하세요.');
        }
      });
  }, [sortOn]);
  console.log(data);
  return (
    <div className="bestList">
      <div className="titBox">
        <div>
          <span className="bestTit">오늘은 어떤 차를 마셔볼까요</span>
        </div>
        <ul className="bestTab">
          <li
            className={`tabItem ${sortOn ? null : 'on'}`}
            onClick={handleSort}
          >
            베스트
          </li>
          <li
            className={`tabItem ${sortOn ? 'on' : null}`}
            onClick={handleSort}
          >
            이번 주 인기 제품
          </li>
        </ul>
      </div>
      <div className="itemList">
        <div className="prdListBox">
          {data.map(item => (
            <div className="prdInfo">
              <div className="prdThumb">
                <img
                  alt="이미지"
                  src={
                    item.mainImageUrl
                      ? item.mainImageUrl
                      : '/images/no-image.jpg'
                  }
                />
                <IconButton className="cartBtn" img="cart" onClick={() => {}} />
              </div>
              <div className="prdDesc">
                <div className="prdInfo">
                  <p className="prdName">
                    <a href="/kr/ko/shop/item/bakery/14943">{item.name}</a>
                  </p>
                  {item.discountRate ? (
                    <div className="prdPrice">
                      <p className="priceOrigin">
                        {item.price && item.price.toLocaleString()}원
                      </p>
                      <div className="flexBox">
                        <p className="priceResult">
                          {item.discountPrice &&
                            item.discountPrice.toLocaleString()}
                          원
                        </p>
                        <p className="salePercent">{item.discountRate}%</p>
                      </div>
                    </div>
                  ) : (
                    <div className="prdPrice">
                      <div className="flexBox">
                        <p className="priceResult">
                          {item.price && item.price.toLocaleString()}원
                        </p>
                      </div>
                    </div>
                  )}
                </div>
                <div className="prdTag" />
              </div>
            </div>
          ))}
        </div>
        <div className="prdBtnBox">
          <Button
            className="prdBtn"
            scale="middle"
            shape="fill"
            color="tertiary"
          >
            <span>더보기</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
export default BestList;
