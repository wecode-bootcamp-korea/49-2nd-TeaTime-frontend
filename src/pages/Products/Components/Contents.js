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

  useEffect(() => {
    fetch(
      `http://51.20.57.76:8000/products?sort=${props.sort}&category=${props.category}&page=${props.page}`,
      {
        method: 'Get',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
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
  }, [props.category, props.page, props.sort]);
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
                <a>
                  <img
                    onClick={() => goDetail(item.id)}
                    src={
                      item.mainImageUrl
                        ? item.mainImageUrl
                        : 'https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png'
                    }
                  />
                </a>
                <IconButton className="cartBtn" img="cart" onClick={() => {}} />
              </div>
              <p className="prdName" onClick={() => goDetail(item.id)}>
                <a>{item.name}</a>
              </p>
              <span className="prdPrice">
                <p className="">
                  <strong>{item.price && item.price.toLocaleString()}원</strong>
                  <br />
                  <del>
                    {item.discountPrice && item.discountPrice.toLocaleString()}
                    원
                  </del>
                  <em>({item.discountRate}%)</em>
                </p>
              </span>
              <div className="etc">
                <span className="e1">
                  {item.isLiked === 0 ? (
                    <img className="heartBtn" src="/images/heart.png" />
                  ) : (
                    <img className="heartBtn" src="/images/heartOn.png" />
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
