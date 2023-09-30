import React from 'react';
import Button from '../../../../Component/Button/Button';
import './Receipt.scss';

const Receipt = () => {
  return (
    <section className="paymentReceipt">
      <div className="paymentReceiptContainer">
        <ul className="paymentReceiptList">
          <li className="paymentReceiptTotalPrice">
            <h2>총 상품금액</h2>
            <span>39,000원</span>
          </li>
          <li className="paymentReceiptDisCountWrap">
            <div className="disCountWrap">
              <h2>총 할인 혜택</h2>
              <span className="disCount">-9,750원</span>
            </div>
            <div className="disCountPrice">
              <h3>└ 상품할인</h3>
              <span>-9,750원</span>
            </div>
          </li>
          <li className="paymentReceiptPoint">
            <h2 className="point">포인트 결제</h2>
            <span className="pointPrice">-0원</span>
          </li>
          <li className="paymentReceiptDelivery">
            <h2>배송비</h2>
            <span>0원</span>
          </li>
          <li className="paymentReceiptTotal">
            <h2>총 결제금액</h2>
            <span className="totalPrice">29,250원</span>
          </li>
        </ul>
        <Button
          className="paymentBtn"
          type="submit"
          fullWidth="true"
          shape="fill"
        >
          29,250원 주문하기
        </Button>
      </div>
    </section>
  );
};
export default Receipt;
