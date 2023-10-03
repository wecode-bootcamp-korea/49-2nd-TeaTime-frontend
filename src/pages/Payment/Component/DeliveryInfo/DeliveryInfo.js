import React from 'react';
import Chip from '../../../../Component/Chip/Chip';
import Button from '../../../../Component/Button/Button';
import './DeliveryInfo.scss';

const DeliveryInfo = () => {
  return (
    <section>
      <div className="deliveryInfoBox">
        <div className="NameBoxWrap">
          <div className="NameBox">
            <h2 className="deliveryName">홍길동</h2>
            <h3 className="deliverySubName">(나)</h3>
          </div>
          <Chip scale="small" checked="true" text="기본 배송지" />
        </div>
        <p className="deliveryAddress">
          <span>서울특별시 강남구 삼성동</span>
          <span>123-45</span>
        </p>
        <p className="deliveryPhone">연락처 : 010-1234-5678</p>
        <Button className="deliveryBtn" shape="fill" fullWidth="true">
          배송지 변경
        </Button>
      </div>

      <div className="requestedTerm">
        <p className="requestedTermTitle">배송 요청사항</p>
        <select className="deliverySelect">
          <option value="배송 요청사항 선택" selected>
            배송 요청사항 선택
          </option>
          <option value="배송 전에 미리 연락주세요.">
            배송 전에 미리 연락주세요.
          </option>
          <option value="부재 시 경비실에 맡겨주세요.">
            부재 시 경비실에 맡겨주세요.
          </option>
          <option value="직접 입력">직접 입력</option>
        </select>
      </div>
    </section>
  );
};

export default DeliveryInfo;
