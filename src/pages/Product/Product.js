import React, { useEffect, useState } from 'react';
import './Product.scss';
import { useParams, Link } from 'react-router-dom';
import IconButton from '../../Component/IconButton/IconButton';
import Button from '../../Component/Button/Button';
const Product = () => {
  const params = useParams();
  const prductId = params.id;

  const [isUserLike, setIsUserLike] = useState(true);
  const [totalAmount, setTotalAmount] = useState({
    totalPrice: 0,
    cnt: 1,
    isBagCheck: false,
    isWrapCheck: false,
  });

  const [productData, setProductData] = useState({});

  useEffect(() => {
    const Data = {
      price: 22400,
      discount: 20,
      realPrice: 28000,
      src: 'https://image.osulloc.com/upload/kr/ko/adminImage/NP/YV/20200513135231693GB.png',
      category: 1,
      categoryName: '티 제품',
      name: '상품 명',
      origin: '원산지',
      amount: '상품 설명을 길게 더 길게 또 길게 표현D',
      reviewCnt: 112,
      reviewPoint: 5,
    };
    setProductData(Data);
    setTotalAmount(pre => {
      return { ...pre, totalPrice: Data.price };
    });
  }, []);

  useEffect(() => {
    let bagPrice = 0;
    let wrapPrice = 0;
    if (totalAmount.isBagCheck === true) bagPrice = 100;
    if (totalAmount.isWrapCheck === true) wrapPrice = 2000;
    setTotalAmount(pre => {
      return {
        ...pre,
        totalPrice:
          (productData.price + bagPrice + wrapPrice) * totalAmount.cnt,
      };
    });
  }, [totalAmount.isBagCheck, totalAmount.isWrapCheck, totalAmount.cnt]);

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

  const handleOption = e => {
    e.target.id === 'bag'
      ? e.target.value === 'true'
        ? setTotalAmount(pre => {
            return { ...pre, isBagCheck: true };
          })
        : setTotalAmount(pre => {
            return { ...pre, isBagCheck: false };
          })
      : e.target.value === 'true'
      ? setTotalAmount(pre => {
          return { ...pre, isWrapCheck: true };
        })
      : setTotalAmount(pre => {
          return { ...pre, isWrapCheck: false };
        });
  };

  const handleCnt = key => {
    if (key === '+') {
      setTotalAmount(pre => {
        return { ...pre, cnt: totalAmount.cnt + 1 };
      });
    } else {
      if (totalAmount.cnt === 1) {
      } else {
        setTotalAmount(pre => {
          return { ...pre, cnt: totalAmount.cnt - 1 };
        });
      }
    }
  };

  return (
    <div className="product">
      <div className="prdDetailTop">
        <div className="prdInfo">
          <div className="prdInfoLeft">
            <div className="prdWrapper">
              <div className="thumb">
                <img src={productData.src} alt={productData.name} />
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
              <Link to={`/products?category=${productData.category}`}>
                {' '}
                {productData.categoryName}
              </Link>
            </div>
            <p className="prdName">{productData.name}</p>
            <p className="prdOrigin">{productData.origin}</p>
            <p className="prdAmount">{productData.amount}</p>
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
                <p className="realPrice">
                  {productData.realPrice &&
                    productData.realPrice.toLocaleString()}
                  원
                </p>
                <p className="price">
                  <strong>
                    {productData.price && productData.price.toLocaleString()}
                  </strong>
                  원<em>{productData.discount} %</em>
                </p>
              </div>
            </div>
            <div className="buyPanel">
              <div className="buyOption">
                <div className="selectOption">
                  <div className="setCount">
                    <p>구매수량</p>
                    <div className="count">
                      <a onClick={() => handleCnt('-')}>-</a>
                      <input type="number" value={totalAmount.cnt}></input>
                      <a onClick={() => handleCnt('+')}>+</a>
                    </div>
                  </div>
                  <div className="bagOption">
                    <select id="bag" onChange={e => handleOption(e)}>
                      <option value={false}>쇼핑백 없음</option>
                      <option value={true}>쇼핑백 추가(+100원)</option>
                    </select>
                  </div>
                  <div className="bagOption">
                    <select id="wrap" onChange={e => handleOption(e)}>
                      <option value={false}>포장안함</option>
                      <option value={true}>포장함(+2000원)</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div className="freeLabel">
              <span
                style={
                  totalAmount.totalPrice > 50000
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
                <strong>
                  {totalAmount.totalPrice
                    ? totalAmount.totalPrice.toLocaleString()
                    : productData.price && productData.price.toLocaleString()}
                </strong>
                원
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
        <div className="reviewTotal">
          <div className="reviewPoint">
            <p>리뷰 평점</p>
            <div className="pointStar">
              <span className="pointNum">{productData.reviewPoint}</span>
              <span
                className="starPoint"
                style={{ width: productData.reviewPoint * 12.75 + `%` }}
              >
                ★★★★★
              </span>
            </div>
          </div>
          <span className="reviewCnt">
            REVIEW <strong>{productData.reviewCnt}</strong>
          </span>
        </div>
      </div>
      <div className="itemDetail">
        <div className="itemNotice">
          <h3>티타임 차 제품 고시 정보 변경 안내</h3>
          <p>
            차 제품의 제조원이 ㈜아모레퍼시픽에서 ㈜오설록농장으로 변경됨에 따라
            상품 고시 정보가 변경됩니다. 고시 정보가 달리 표기된 상품이 교차
            출고될 수 있는 점 참고 부탁드립니다.
          </p>
          <small>
            *우유, 대두, 밀, 복숭아를 사용한 제품과 같은 제조시설에서 제조하고
            있습니다.
          </small>
        </div>
        <img src={productData.src} />
      </div>
      <div className="hr"></div>
      {/* <Review /> */}
    </div>
  );
};

export default Product;
