import React, { useEffect, useState } from 'react';
import IconButton from '../../../Component/IconButton/IconButton';
import '../Main.scss';
import Button from '../../../Component/Button/Button';

const BestList = () => {
  const [sortOn, setSortOn] = useState(true);
  const handleSort = () => {
    setSortOn(!sortOn);
  };

  // useEffect(() => {
  //   fech문 사용 , sortOn true면 이번주, false면 베스트 5개 제품 가져오기
  // },[sortOn]);

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
          {/* 여기서부터 */}
          <div className="prdInfo">
            <div className="prdThumb">
              <img
                alt="이미지"
                src="https://image.osulloc.com/upload/kr/ko/adminImage/YZ/EK/304_20221202173016036XG.png"
              />
              <IconButton className="cartBtn" img="cart" onClick={() => {}} />
            </div>
            <div className="prdDesc">
              <div className="prdInfo">
                <p className="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div className="prdPrice">
                  <p className="priceOrigin">39,000원</p>
                  <div className="flexBox">
                    <p className="priceResult">13,000원</p>
                    <p className="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div className="prdTag" />
            </div>
          </div>
          {/* 여기까지 */}
          <div className="prdInfo">
            <div className="prdThumb">
              <img
                alt="이미지"
                src="https://image.osulloc.com/upload/kr/ko/adminImage/YZ/EK/304_20221202173016036XG.png"
              />
              <div className="hoverIcon">
                <button>장바구니</button>
              </div>
            </div>
            <div className="prdDesc">
              <div className="prdInfo">
                <p className="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div className="prdPrice">
                  <p className="priceOrigin">39,000원</p>
                  <div className="flexBox">
                    <p className="priceResult">13,000원</p>
                    <p className="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div className="prdTag" />
            </div>
          </div>
          <div className="prdInfo">
            <div className="prdThumb">
              <img
                alt="이미지"
                src="	https://image.osulloc.com/upload/kr/ko/adminImage/YZ/EK/304_20221202173016036XG.png"
              />
              <div className="hoverIcon">
                <button>장바구니</button>
              </div>
            </div>
            <div className="prdDesc">
              <div className="prdInfo">
                <p className="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div className="prdPrice">
                  <p className="priceOrigin">39,000원</p>
                  <div className="flexBox">
                    <p className="priceResult">13,000원</p>
                    <p className="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div className="prdTag" />
            </div>
          </div>
          <div className="prdInfo">
            <div className="prdThumb">
              <img
                alt="이미지"
                src="	https://image.osulloc.com/upload/kr/ko/adminImage/YZ/EK/304_20221202173016036XG.png"
              />
              <div className="hoverIcon">
                <button>장바구니</button>
              </div>
            </div>
            <div className="prdDesc">
              <div className="prdInfo">
                <p className="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div className="prdPrice">
                  <p className="priceOrigin">39,000원</p>
                  <div className="flexBox">
                    <p className="priceResult">13,000원</p>
                    <p className="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div className="prdTag" />
            </div>
          </div>
          <div className="prdInfo">
            <div className="prdThumb">
              <img
                alt="이미지"
                src="	https://image.osulloc.com/upload/kr/ko/adminImage/YZ/EK/304_20221202173016036XG.png"
              />
              <div className="hoverIcon">
                <button>장바구니</button>
              </div>
            </div>
            <div className="prdDesc">
              <div className="prdInfo">
                <p className="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div className="prdPrice">
                  <p className="priceOrigin">39,000원</p>
                  <div className="flexBox">
                    <p className="priceResult">13,000원</p>
                    <p className="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div className="prdTag" />
            </div>
          </div>
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
