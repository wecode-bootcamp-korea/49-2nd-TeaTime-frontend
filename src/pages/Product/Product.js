import React, { useState } from 'react';
import './Product.scss';
import { useParams, Link } from 'react-router-dom';
import IconButton from '../../Component/IconButton/IconButton';
import Button from '../../Component/Button/Button';
const Product = () => {
  const params = useParams();
  const prductId = params.id;

  const [isUserLike, setIsUserLike] = useState(true);
  const [totalPrice, setTotalPrice] = useState(0);

  const copyUrl = () => {
    const url = window.document.location.href;
    navigator.clipboard.writeText(url).then(res => {
      alert('주소가 복사되었습니다!');
    });
  };

  const likeOnOff = () => {
    if (isUserLike) {
      setIsUserLike(false);
    } else {
      setIsUserLike(true);
    }
  };

  return (
    <div className="product">
      <div className="prdDetailTop">
        <div className="prdInfo">
          <div className="prdInfoLeft">
            <div className="prdWrapper">
              <div className="thumb">
                <img
                  src="https://image.osulloc.com/upload/kr/ko/adminImage/NP/YV/20200513135231693GB.png"
                  alt="메모리 인 제주 20입"
                />
              </div>
              <ul>
                <li>o 포인트 10% 적립</li>
                <li>o 5만원 이상 무료 배송</li>
                <li>o 5만원 이상 무료 배송</li>
                <li>o (유료) 포장가능</li>
                <li>o (유료) 쇼핑백가능</li>
              </ul>
            </div>
          </div>
          <div className="prdInfoRight">
            <div className="prdLoc">
              <Link to="/products?category=0"> 티 제품</Link>
              <span> {'>'} </span>
              <Link to="/products?category=1"> 티 세트</Link>
            </div>
            <p className="prdName">상품 명</p>
            <p className="prdOrigin">원산지</p>
            <p className="prdAmount">상품 설명을 길게 더 길게 또 길게 표현D</p>
            <div className="prdPriceBtn">
              <div className="prdBtn">
                <input type="hidden" id="shareUrl"></input>
                <span className="prdUrl" onClick={copyUrl}>
                  URL
                </span>
                <IconButton
                  className={isUserLike && 'on'}
                  type="button"
                  img="heart"
                  onClick={likeOnOff}
                />
              </div>
              <div className="prdPrice">
                <p className="realPrice">28,000원</p>
                <p className="price">
                  <strong>22,400</strong>원<em>20 %</em>
                </p>
              </div>
            </div>
            <div className="buyPanel">
              <div className="buyOption">
                <div className="selectOption">
                  <div className="setCount">
                    <p>구매수량</p>
                    <div className="count">
                      <a>-</a>
                      <input type="number"></input>
                      <a>+</a>
                    </div>
                  </div>
                  <div className="bagOption">
                    <select id="bag">
                      <option>쇼핑백 없음</option>
                      <option>쇼핑백 추가(+100원)</option>
                    </select>
                  </div>
                  <div className="bagOption">
                    <select id="wrap">
                      <option>포장안함</option>
                      <option>포장함(+2000원)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="freeLabel">
              <span
                style={
                  totalPrice > 50000
                    ? { display: 'block' }
                    : { display: 'none' }
                }
              >
                무료배송
              </span>
            </div>
            <div className="valueAmount">
              <p className="totalValue">상품금액 합계</p>
              <p className="totalAmount">
                <strong>22,500</strong>원
              </p>
            </div>
            <div className="btnWapper">
              <div className="payWarpper">
                <Button
                  className="presentBtn"
                  scale="small"
                  shape="fill"
                  fullWidth="true"
                  color="bording"
                >
                  선물하기
                </Button>
                <Button
                  className="cartBtn"
                  scale="small"
                  shape="fill"
                  fullWidth="true"
                  color="secondary"
                >
                  장바구니
                </Button>
                <Button
                  className="payBtn"
                  scale="large"
                  shape="fill"
                  fullWidth="true"
                  color="green"
                >
                  바로구매
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div> 리뷰 </div>
      </div>
    </div>
  );
};

export default Product;
