import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import IconButton from '../../Component/IconButton/IconButton';
import Button from '../../Component/Button/Button';
import Review from './Components/Review';
import './Product.scss';

const Product = () => {
  const params = useParams();
  const productId = params.id;
  const navigate = useNavigate();

  const [isUserLike, setIsUserLike] = useState(true);
  const [totalAmount, setTotalAmount] = useState({
    totalPrice: 0,
    cnt: 1,
    isBagCheck: false,
    isWrapCheck: false,
  });

  const [productData, setProductData] = useState({});

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    fetch(`http://51.20.57.76:8000/products/${productId}`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result.message === 'READ_DETAIL_SUCCESS') {
          setProductData(result.data);
          setTotalAmount(pre => {
            return { ...pre, totalPrice: result.data.discountPrice };
          });
          setIsUserLike(result.data.isLiked === 1 ? true : false);
        } else {
          alert('에러입니다. 관리자에게 문의하세요.');
        }
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
          (productData.discountPrice
            ? productData.discountPrice + bagPrice + wrapPrice
            : productData.price + bagPrice + wrapPrice) * totalAmount.cnt,
      };
    });
  }, [
    productData,
    totalAmount.isBagCheck,
    totalAmount.isWrapCheck,
    totalAmount.cnt,
  ]);

  const copyUrl = () => {
    const url = window.document.location.href;
    navigator.clipboard.writeText(url).then(res => {
      alert('주소가 복사되었습니다!');
    });
  };

  const likeOnOff = () => {
    fetch('http://51.20.57.76:8000/likes', {
      method: 'Post',
      body: JSON.stringify({
        productId: productId,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result.message === 'LIKE_PUSHED') {
          if (isUserLike) {
            setIsUserLike(false);
          } else {
            setIsUserLike(true);
          }
        } else {
          alert('오류입니다. 관리자에게 문의하세요.');
        }
      });
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

  const putCart = () => {
    fetch('http://51.20.57.76:8000/cart/add', {
      method: 'Post',
      body: JSON.stringify({
        productId: productId,
        count: totalAmount.cnt,
        isBag: totalAmount.isBagCheck ? 1 : 0,
        isPackage: totalAmount.isPackage ? 1 : 0,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result.message === 'add') {
          if (
            window.confirm(
              '장바구니에 추가되었습니다. \n 장바구니로 이동하시겠습니까?',
            )
          ) {
            navigate('/cart');
          } else {
            window.location.reload();
          }
        } else {
          alert('에러입니다. 관리자에게 문의하세요.');
        }
      });
  };

  // useLocation 으로 받아온 데이터 모음 state를 이용해 데이터를 넘겨줌
  const datas = {
    id: productData.id,
    name: productData.name,
    img: productData.mainImageUrl,
    cnt: totalAmount.cnt,
    price: productData.price * totalAmount.cnt,
    discountPrice:
      (productData.price / 100) *
      (productData.discountRate || 0) *
      totalAmount.cnt,

    // 할인된 금액이 있을 경우에는 할인된 금액으로 갯수 곱해서 계산
    // 할인된 금액이 없을 경우에는 전체 금액
    totalPrice: productData.discountPrice
      ? productData.discountPrice * totalAmount.cnt +
        (totalAmount.totalPrice > 50000 ? 0 : 2500)
      : totalAmount.totalPrice + (totalAmount.totalPrice > 50000 ? 0 : 2500),
    isBagCheck: totalAmount.isBagCheck,
    isWrapCheck: totalAmount.isWrapCheck,
    delivery: totalAmount.totalPrice > 50000 ? 0 : 2500,
  };
  const handelInfoMove = () => {
    navigate('/payment', { state: datas });
  };

  if (Object.keys(productData).length === 0) {
    return null;
  }

  return (
    <div className="product">
      <div className="prdDetailTop">
        <div className="prdInfo">
          <div className="prdInfoLeft">
            <div className="prdWrapper">
              <div className="thumb">
                <img
                  src={
                    productData.mainImageUrl
                      ? productData.mainImageUrl
                      : '/images/no-image.jpg'
                  }
                  alt={productData.name}
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
              <Link to={`/products?category=${productData.categoryId}`}>
                {' '}
                {productData.categoryName}
              </Link>
            </div>
            <p className="prdName">{productData.name}</p>
            <p className="prdOrigin">{'(' + productData.region + ')'}</p>
            <p className="prdAmount">{productData.amount}</p>
            <div className="prdPriceBtn">
              <div className="prdBtn">
                <input type="hidden" id="shareUrl" />
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
              {productData.discountRate ? (
                <div className="prdPrice">
                  <p className="realPrice">
                    {productData.price && productData.price.toLocaleString()}원
                  </p>
                  <p className="price">
                    <strong>
                      {productData.discountPrice &&
                        productData.discountPrice.toLocaleString()}
                    </strong>
                    원<em>{productData.discountRate} %</em>
                  </p>
                </div>
              ) : (
                <div className="prdPrice">
                  <p className="realPrice" />
                  <p className="price">
                    <strong>
                      {productData.price && productData.price.toLocaleString()}
                    </strong>
                    원
                  </p>
                </div>
              )}
            </div>
            <div className="buyPanel">
              <div className="buyOption">
                <div className="selectOption">
                  <div className="setCount">
                    <p>구매수량</p>
                    <div className="count">
                      <a onClick={() => handleCnt('-')}>-</a>
                      <input type="number" value={totalAmount.cnt} />
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
                    : productData.discountPrice
                    ? productData.discountPrice &&
                      productData.discountPrice.toLocaleString()
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
                  onClick={putCart}
                >
                  장바구니
                </Button>
                <Button
                  className="payBtn"
                  scale="large"
                  shape="fill"
                  fullWidth="true"
                  color="green"
                  onClick={handelInfoMove}
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
            <div className="starPoint">
              <div
                className={`star p${
                  productData.reviewGradeAvg
                    ? Math.round(productData.reviewGradeAvg)
                    : 0
                }`}
              >
                <div className="bar" />
              </div>
              <span className="pointNum">
                {productData.reviewGradeAvg ? productData.reviewGradeAvg : 0}
              </span>
            </div>
          </div>
          <span className="reviewCnt">
            REVIEW <strong>{productData.reviewCount}</strong>
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
        {productData.contentImageUrls &&
          productData.contentImageUrls.map((item, index) => (
            <div key={productData.contentImageUrls[item]}>
              <img src={productData.contentImageUrls[index]} />
            </div>
          ))}
      </div>
      <div className="hr" />
      <Review
        productId={productId}
        reviewCnt={productData.reviewCount}
        productName={productData.name}
        reviewPoint={productData.reviewGradeAvg}
      />
    </div>
  );
};

export default Product;
