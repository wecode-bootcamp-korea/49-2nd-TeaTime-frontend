import React from 'react';
import '../Products.scss';
import IconButton from '../../../Component/IconButton/IconButton';
import Paging from '../../../Component/Paging/Paging';
import { PRODUCT_SORT } from '../../../data/ComponentData';
import { useNavigate } from 'react-router-dom';

const Contents = props => {
  const navigate = useNavigate();
  const goDetail = key => {
    navigate(`/product/${key}`);
  };

  return (
    <div>
      <p className="pageLocation">{props.titleText}</p>
      <div className="sortBar">
        <ul>
          {PRODUCT_SORT.map(item => (
            <li key={item.text}>
              <a
                className={props.sort === item.value && 'on'}
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
          총 <strong className="totalCnt">12</strong>개의 상품이 있습니다.
        </p>
      </div>
      <div className="productList">
        <div className="listWrapper">
          {/* 여기서부터 반복 */}
          <div className="item">
            <div className="thumb">
              <a>
                <img
                  onClick={() => goDetail(1)}
                  src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"
                />
              </a>
              <IconButton className="cartBtn" img="cart" onClick={() => {}} />
            </div>
            <p className="prdName" onClick={() => goDetail(1)}>
              <a>러블리 티 박스</a>
            </p>
            <span className="prdPrice">
              <p className="">
                <strong>22,400원</strong>
                <br />
                <del>28,000원</del>
                <em>(20%)</em>
              </p>
            </span>
            <div className="etc">
              <span className="e1">
                <img className="heartBtn" src="/images/heart.png" />
                34
              </span>
              <span className="e2">
                <img className="commentBtn" src="/images/comment.png" />
                123
              </span>
            </div>
          </div>
          {/* 여기까지 반복 */}
        </div>
        <Paging
          page={props.page}
          totalCnt={props.totalCnt}
          handlerPage={props.handlerPage}
          showPage={8}
        />
      </div>
    </div>
  );
};
export default Contents;
