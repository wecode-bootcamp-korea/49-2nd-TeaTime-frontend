import React from 'react';
import '../Main.scss';
import Button from '../../../Component/Button/Button';

const BestList = () => {
  return (
    <div className="bestList">
      <div className="titBox">
        <div>
          <span className="bestTit">오늘은 어떤 차를 마셔볼까요</span>
        </div>
        <ul className="bestTab">
          <li className="tabItem">베스트</li>
          <li className="tabItem on">이번 주 인기 제품</li>
        </ul>
      </div>
      <div className="itemList">
        <div className="prdListBox">
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
            <div class="prdDesc">
              <div class="prdInfo">
                <p class="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div class="prdPrice">
                  <p class="priceOrigin">39,000원</p>
                  <div class="flexBox">
                    <p class="priceResult">13,000원</p>
                    <p class="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div class="prdTag" />
            </div>
          </div>
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
            <div class="prdDesc">
              <div class="prdInfo">
                <p class="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div class="prdPrice">
                  <p class="priceOrigin">39,000원</p>
                  <div class="flexBox">
                    <p class="priceResult">13,000원</p>
                    <p class="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div class="prdTag" />
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
            <div class="prdDesc">
              <div class="prdInfo">
                <p class="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div class="prdPrice">
                  <p class="priceOrigin">39,000원</p>
                  <div class="flexBox">
                    <p class="priceResult">13,000원</p>
                    <p class="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div class="prdTag" />
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
            <div class="prdDesc">
              <div class="prdInfo">
                <p class="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div class="prdPrice">
                  <p class="priceOrigin">39,000원</p>
                  <div class="flexBox">
                    <p class="priceResult">13,000원</p>
                    <p class="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div class="prdTag" />
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
            <div class="prdDesc">
              <div class="prdInfo">
                <p class="prdName">
                  <a href="/kr/ko/shop/item/bakery/14943">그린티 랑드샤</a>
                </p>
                <div class="prdPrice">
                  <p class="priceOrigin">39,000원</p>
                  <div class="flexBox">
                    <p class="priceResult">13,000원</p>
                    <p class="salePercent">25%</p>
                  </div>
                </div>
              </div>
              <div class="prdTag" />
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
