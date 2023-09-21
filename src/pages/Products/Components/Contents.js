import React from 'react';

import '../Products.scss';

const Contents = props => {
  return (
    <div>
      <p className="pageLocation">{props.titleText}</p>
      <div className="sortBar">
        <ul>
          {props.productSort.map(item => (
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
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          {/* 여기까지 반복 */}
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
          <div className="item">
            <div className="thumb">
              <a>
                <img src="https://image.osulloc.com/upload/kr/ko/adminImage/JY/QU/304_20210825170710069ZN.png"></img>
              </a>
              <a className="basket">
                <button>장바구니</button>
              </a>
            </div>
            <p className="prdName">
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
          </div>
        </div>
        <div>페이징</div>
      </div>
    </div>
  );
};
export default Contents;
