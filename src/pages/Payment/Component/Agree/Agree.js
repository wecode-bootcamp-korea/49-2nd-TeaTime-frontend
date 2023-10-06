import React from 'react';
import Input from '../../../../Component/Input/Input';
import './Agree.scss';

const Agree = props => {
  const { onClick } = props;
  return (
    <div className="infoBottom">
      <div className="infoBottomWrap">
        <Input
          className="allAgree"
          type="checkbox"
          id="allAgree"
          text="위 상품의 판매조건을 명확히 확인하였으며, 구매 진행에 동의 합니다."
          onClick={onClick}
        />
      </div>
      <div className="infoBottomTextList">
        <ul className="list">
          <li className="item">
            할인쿠폰 적용 후 총 결제 금액(배송비, 쇼핑백 환경부담금 제외)가
            3만원 이상인 경우 무료 배송이 적용됩니다. (단, 티웨어는 브랜드별로
            무료배송기준이 상이하오니, 제품고시정보 내의 배송안내
            확인부탁드립니다.)
          </li>
          <li className="item">
            배송 정보(=수취인정보)가 동일할 경우 자동으로 합배송(1개의 송장번호)
            될 수 있습니다. (반드시 제품 수령 후, 송장번호 기입하시어 1:1 상담
            게시판을 통해 배송비 환불 요청해주세요.)
          </li>
          <li className="item">
            다수의 주문건에 쿠폰 할인을 받는 대신 배송료를 결제하는 경우, 합배송
            환불에서 제외 될 수도 있습니다.
          </li>
          <li className="item">
            할인 쿠폰/적립금/포인트 사용 시, 사용 이후의 실결제 금액에 대한
            사은품이 발송됩니다. (포장비, 배송비는 결제 금액에 포함되지 않음)
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Agree;
