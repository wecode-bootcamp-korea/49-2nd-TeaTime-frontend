import React from 'react';
import Input from '../../../../Component/Input/Input';
import Button from '../../../../Component/Button/Button';
import IconButton from '../../../../Component/IconButton/IconButton';
import './DeliveryAddModal.scss';

const DeliveryAddModal = props => {
  const { onClick } = props;

  return (
    <div className="deliveryAddModal">
      <div className="deliveryAddModalContainer">
        <div className="deliveryAddModalHeader">
          <h3>배송지 추가</h3>
          <IconButton img="close" onClick={onClick} />
        </div>

        <form className="deliveryAddModalForm">
          <fieldset>
            <legend className="legend">배송지 추가</legend>
            <div className="deliveryAddModalFormContainer">
              <p className="addModalTitle">배송지명</p>
              <Input scale="middle" />
              <p className="addModalTitle">받는 분</p>
              <Input scale="middle" />
              <p className="addModalTitle">휴대폰 번호</p>
              <div className="addModalPhone">
                <select className="addModalSelect">
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                  <option>019</option>
                </select>
                <Input scale="middle" placeholder={`'-'없이 휴대폰번호 입력`} />
              </div>
              <p className="addModalTitle">주소</p>
              <div className="addModalAddress">
                <Input className="addressInput" scale="middle" />
                <Button
                  className="addressSearch"
                  scale="xSmall"
                  shape="fill"
                  color="tertiary"
                >
                  우편번호 찾기
                </Button>
              </div>
              <Input scale="middle" />
              <Input scale="middle" />
              <div className="deliveryAddModalCheckBox">
                <Input className="checkBox" type="checkbox" />
                <p>기본 배송지로 설정</p>
              </div>
              <div className="deliveryAddModalButton">
                <Button scale="middle" shape="fill" color="tertiary">
                  저장
                </Button>
              </div>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default DeliveryAddModal;
