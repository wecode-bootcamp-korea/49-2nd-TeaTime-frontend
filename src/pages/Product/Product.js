import React, { useState } from 'react';
import './Product.scss';
import { useParams, Link } from 'react-router-dom';
import IconButton from '../../Component/IconButton/IconButton';
const Product = () => {
  const params = useParams();
  const prductId = params.id;

  const [isUserLike, setIsUserLike] = useState(true);

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
          </div>
        </div>
        <div> 리뷰 </div>
      </div>
    </div>
  );
};

export default Product;
