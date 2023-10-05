import React, { useEffect, useState } from 'react';
import '../Products.scss';
import IconButton from '../../../Component/IconButton/IconButton';
import Paging from '../../../Component/Paging/Paging';
import { PRODUCT_SORT } from '../../../data/ComponentData';
import { useNavigate } from 'react-router-dom';

const Contents = props => {
  const [data, setData] = useState([]);
  const [totalCnt, setTotalCnt] = useState(0);
  const navigate = useNavigate();
  const goDetail = key => {
    navigate(`/product/${key}`);
  };

  const handleFetch = () => {
    fetch(
      `http://51.20.57.76:8000/products?sort=${props.sort}&category=${props.category}&page=${props.page}`,
      {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('accessToken'),
        },
      },
    )
      .then(res => {
        return res.json();
      })
      .then(result => {
        if (result.message === 'READ_SUCCESS') {
          setData(result.data.products);
          setTotalCnt(result.data.total);
        } else {
          alert('오류입니다. 관리자에게 문의하세요.');
        }
      });
  };

  useEffect(() => {
    handleFetch();
  }, [props.category, props.page, props.sort]);

  const clickLike = key => {
    fetch('http://51.20.57.76:8000/likes', {
      method: 'Post',
      body: JSON.stringify({
        productId: key,
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
          handleFetch();
        } else {
          alert('오류입니다. 관리자에게 문의하세요.');
        }
      });
  };

  const putCart = key => {
    fetch('http://51.20.57.76:8000/cart/add', {
      method: 'Post',
      body: JSON.stringify({
        productId: key,
        count: 1,
        isBag: 0,
        isPackage: 0,
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
        result.message === 'add'
          ? window.location.reload()
          : alert('에러입니다. 관리자에게 문의하세요.');
      });
  };

  const imageHover = (e, img) => {
    e.target.src = img;
  };

  return (
    <div>
      <p className="pageLocation">{props.titleText}</p>
      <div className="sortBar">
        <ul>
          {PRODUCT_SORT.map(item => (
            <li key={item.text}>
              <a
                className={props.sort === item.value ? 'on' : null}
                id={item.value}
                onClick={e => {
                  props.handlerSort(e);
                }}
              >
                {item.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="total">
        <p>
          총 <strong className="totalCnt">{totalCnt}</strong>개의 상품이
          있습니다.
        </p>
      </div>
      <div className="productList">
        <div className="listWrapper">
          {data.map(item => (
            <div className="item" key={item.id}>
              <div className="thumb">
                {item.mainImageUrl ? (
                  item.subImageUrl ? (
                    <a>
                      <img
                        onClick={() => goDetail(item.id)}
                        src={item.mainImageUrl}
                        onMouseOver={e => imageHover(e, item.subImageUrl)}
                        onMouseOut={e => imageHover(e, item.mainImageUrl)}
                      />
                    </a>
                  ) : (
                    <a>
                      <img
                        onClick={() => goDetail(item.id)}
                        src={item.mainImageUrl}
                      />
                    </a>
                  )
                ) : (
                  <a>
                    <img
                      onClick={() => goDetail(item.id)}
                      src="/images/no-image.jpg"
                    />
                  </a>
                )}

                <IconButton
                  className="cartBtn"
                  img="cart"
                  onClick={() => {
                    putCart(item.id);
                  }}
                />
              </div>
              <p className="prdName" onClick={() => goDetail(item.id)}>
                <a>{item.name}</a>
              </p>
              <span className="prdPrice">
                <p className="">
                  <strong>{item.price && item.price.toLocaleString()}원</strong>
                  <br />
                  {item.discountPrice && (
                    <>
                      <del>
                        {item.discountPrice &&
                          item.discountPrice.toLocaleString()}
                        원
                      </del>
                      <em>({item.discountRate}%)</em>
                    </>
                  )}
                </p>
              </span>
              <div className="etc">
                <span className="e1">
                  {item.isLiked === 0 ? (
                    <img
                      className="heartBtn"
                      src="/images/heart.png"
                      onClick={() => clickLike(item.id)}
                    />
                  ) : (
                    <img
                      className="heartBtn"
                      src="/images/heartOn.png"
                      onClick={() => clickLike(item.id)}
                    />
                  )}

                  {item.likeCount}
                </span>
                <span className="e2">
                  <img className="commentBtn" src="/images/comment.png" />
                  {item.reviewCount}
                </span>
              </div>
            </div>
          ))}
        </div>
        <Paging
          page={props.page}
          totalCnt={totalCnt}
          handlerPage={props.handlerPage}
          showPage={8}
        />
      </div>
    </div>
  );
};
export default Contents;
