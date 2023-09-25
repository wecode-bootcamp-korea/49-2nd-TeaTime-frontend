import React from 'react';
import { Link } from 'react-router-dom';
import './RecentOrderDetails.scss';

const RecentOrderDetails = () => {
  return (
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

      <div className="itemList">
        <div className="dateOrder">
          <p>2023. 09. 24 주문</p>
        </div>

        <div className="thumbContainer">
          <div className="boxList">
            <div className="itemId">1</div>
            <div className="imgBox">
              <img src="../../../../../images/tea1.jpg" alt="tea" />
            </div>
            <div className="textBox">
              <Link to="/">[따뜻한 차] 홍차 선물 세트</Link>
              <p className="packingState">쇼핑백 동봉/포장불가</p>
              <p className="presentable">선물 가능한 상품입니다.</p>
            </div>
            <div className="quantityBox">
              <div>1 개</div>
            </div>
            <div className="priceBox">
              <p className="price">10,000원</p>
            </div>
            <div className="shippingStatus">
              <p>배송중</p>
            </div>
          </div>

          <div className="boxList">
            <div className="itemId">2</div>
            <div className="imgBox">
              <img src="../../../../../images/tea1.jpg" alt="tea" />
            </div>
            <div className="textBox">
              <Link to="/">[차가운 차] 말차 선물 세트</Link>
              <p className="packingState">쇼핑백 불가/포장불가</p>
              <p className="presentable">선물이 불가능한 상품입니다.</p>
            </div>
            <div className="quantityBox">
              <div>3 개</div>
            </div>
            <div className="priceBox">
              <p className="price">45,000원</p>
            </div>
            <div className="shippingStatus">
              <p>배송 준비</p>
            </div>
          </div>
        </div>
      </div>

      <div className="itemList">
        <div className="dateOrder">
          <p>2023. 09. 21 주문</p>
        </div>

        <div className="thumbContainer">
          <div className="boxList">
            <div className="itemId">1</div>
            <div className="imgBox">
              <img src="../../../../../images/tea1.jpg" alt="tea" />
            </div>
            <div className="textBox">
              <Link to="/">[따뜻한 차] 녹차 선물 세트</Link>
              <p className="packingState">쇼핑백 동봉/포장가능</p>
              <p className="presentable">선물 가능한 상품입니다.</p>
            </div>
            <div className="quantityBox">
              <div>1 개</div>
            </div>
            <div className="priceBox">
              <p className="price">15,000원</p>
            </div>
            <div className="shippingStatus">
              <p>배송 완료</p>
            </div>
          </div>
        </div>
      </div>

      <div className="pagination">
        <div className="pageBox">
          <button className="pageBtn">1</button>
          <button className="pageBtn">2</button>
          <button className="pageBtn">3</button>
          <button className="pageBtn">4</button>
          <button className="pageBtn">5</button>
        </div>
      </div>
    </div>
  );
};

export default RecentOrderDetails;
