import React, { useState } from 'react';
import './PaymentModal.scss';

const PaymentModal = props => {
  const { onClick, paymentSelect } = props;
  return (
    <section>
      <div className="paymentSelectWrap">
        <ul className="paymentSelectWrapList">
          <li className={`item ${paymentSelect.payment === 'on' ? 'on' : ''}`}>
            <div className="box">
              <input type="radio" name="payment" id="card" onClick={onClick} />
              <label htmlFor="card">신용카드</label>
            </div>
          </li>
          <li className={`item ${paymentSelect.account === 'on' ? 'on' : ''}`}>
            <div className="box">
              <input
                type="radio"
                name="account"
                id="account"
                onClick={onClick}
              />
              <label htmlFor="account">계좌이체</label>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
export default PaymentModal;
