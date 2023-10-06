import React from 'react';
import Button from '../../../../Component/Button/Button';
import './Receipt.scss';

const Receipt = props => {
  const { isChecked, disCount, totalItemPrice, totalPrice, deliveryPrice } =
    props;
  return (
    <section className="paymentReceipt">
      <div className="paymentReceiptContainer">
        <ul className="paymentReceiptList">
          <li className="paymentReceiptTotalPrice">
            <h2>총 상품금액</h2>
            <span>{`${totalItemPrice}원`}</span>
          </li>
          <li className="paymentReceiptDisCountWrap">
            <div className="disCountWrap">
              <h2>총 할인 혜택</h2>
              <span className="disCount">{`-${disCount}원`}</span>
            </div>
            <div className="disCountPrice">
              <h3>└ 상품할인</h3>
              <span>{`-${disCount}원`}</span>
            </div>
          </li>
          <li className="paymentReceiptPoint">
            <h2 className="point">포인트 결제</h2>
            <span className="pointPrice">-0원</span>
          </li>
          <li className="paymentReceiptDelivery">
            <h2>배송비</h2>
            <span>{`${deliveryPrice}원`}</span>
          </li>
          <li className="paymentReceiptTotal">
            <h2>총 결제금액</h2>
            <span className="totalPrice">{totalPrice + deliveryPrice}원</span>
          </li>
        </ul>
        <Button
          className="paymentBtn"
          type="submit"
          fullWidth="true"
          shape="fill"
          disabled={!isChecked}
        >
          {`${totalPrice}원 주문하기`}
        </Button>
      </div>
    </section>
  );
};
export default Receipt;
