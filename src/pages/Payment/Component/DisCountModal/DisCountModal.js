import React from 'react';
import Input from '../../../../Component/Input/Input';
import Button from '../../../../Component/Button/Button';
import './DisCountModal.scss';

const DisCountModal = props => {
  const { productData } = props;

  return (
    <section>
      <div className="paymentDisCountWrap">
        <div className="itemDisCountWrap">
          <p className="itemDisCountTitle">상품 할인</p>
          <div className="titleWrap">
            <Input
              className="disCountInput"
              scale="medium"
              disabled="true"
              value={
                productData !== null &&
                `${productData.discountPrice
                  .toString()
                  .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`
              }
            />
            <Button scale="xSmall" shape="fill" color="darkGray">
              적용 취소
            </Button>
          </div>
        </div>

        <div className="itemDisCountWrap">
          <div className="couponWrap">
            <p className="itemDisCountTitle">쿠폰</p>
            <span>
              보유쿠폰 <strong>0장</strong>
            </span>
          </div>
          <div className="titleWrap">
            <Input className="disCountInput" scale="medium" />
            <Button scale="xSmall" shape="fill" color="darkGray">
              쿠폰 조회
            </Button>
          </div>
        </div>

        <div className="itemDisCountWrap">
          <div className="couponWrap">
            <p className="itemDisCountTitle">포인트</p>
            <span>
              보유포인트 <strong>0P</strong>
            </span>
          </div>

          <div className="titleWrap">
            <Input className="disCountInput" scale="medium" />
            <Button scale="xSmall" shape="fill" color="darkGray">
              모두 사용
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default DisCountModal;
