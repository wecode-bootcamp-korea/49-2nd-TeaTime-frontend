import React from 'react';
import './MyPage.scss';

const MyPage = () => {
  return (
    <div className="myPage">
      <div className="myPageHeader">
        <h2>마이페이지</h2>
      </div>
      <div className="myPageContainer">
        <div className="recentOrderDetails">
          <h3>최근 주문내역</h3>
          <ul className="myPageList">
            <li>
              <span>0</span>
              <p>주문접수</p>
            </li>
            <li>
              <span>0</span>
              <p>결제완료</p>
            </li>
            <li>
              <span>0</span>
              <p>상품준비</p>
            </li>
            <li>
              <span>0</span>
              <p>배송중</p>
            </li>
            <li>
              <span>0</span>
              <p>배송완료</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyPage;
