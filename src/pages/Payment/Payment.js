import React from 'react';
import './Payment.scss';

const Payment = () => {
  return (
    <div className="payment">
      <div className="paymentHeader">
        <h1>결제하기</h1>
      </div>
      <div className="paymentContainer">
        <div className="paymentUserInfoTitle">
          <h2 className="paymentUserInfo">주문고객정보</h2>
          <p className="paymentUserName">홍길동/010-1215-8452</p>
        </div>
      </div>
    </div>
  );
};

export default Payment;
