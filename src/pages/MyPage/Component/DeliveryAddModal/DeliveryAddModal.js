import React, { useEffect, useState } from 'react';
import { Postcode } from './Component/DaumPostCode';
import Input from '../../../../Component/Input/Input';
import Button from '../../../../Component/Button/Button';
import IconButton from '../../../../Component/IconButton/IconButton';
import './DeliveryAddModal.scss';

const DeliveryAddModal = props => {
  // props
  const { open, onClick, address } = props;

  // useState
  const [onAddressSelect, setOnAddressSelect] = useState('');
  const [isChecked, setIsChecked] = useState(false); // [TODO] 기본 배송지로 설정 체크박스
  const [deliveryAddUserInfo, setDeliveryAddUserInfo] = useState({
    deliveryName: '',
    deliveryRecipient: '',
    deliveryPrefix: '010',
    deliveryPhone: '',
    deliveryZipCode: '',
    deliveryAddress: '',
    deliveryAddressDetail: '',
  });

  // useEffect
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  console.log(address);

  // handlers
  const handlerChange = e => {
    const { name, value } = e.target;
    setDeliveryAddUserInfo({
      ...deliveryAddUserInfo,
      [name]: value,
    });
  };

  const handleAddressSelect = address => {
    setOnAddressSelect(address);
    setDeliveryAddUserInfo({
      ...deliveryAddUserInfo,
      deliveryZipCode: address.zonecode,
      deliveryAddress: address.address,
    });
  };

  const handleCheckBox = () => {
    setIsChecked(!isChecked);
  };

  const handleAddressInfoBtn = e => {
    fetch('http://51.20.57.76:8000/user/delivery', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        address: deliveryAddUserInfo.deliveryAddress,
        detailAddress: deliveryAddUserInfo.deliveryAddressDetail,
        zipCode: deliveryAddUserInfo.deliveryZipCode,
        name: deliveryAddUserInfo.deliveryName,
        isMain: isChecked,
        phoneNumber:
          deliveryAddUserInfo.deliveryPrefix +
          deliveryAddUserInfo.deliveryPhone,
        subName: deliveryAddUserInfo.deliveryRecipient,
      }),
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'DELIVERY ADDRESS SUCCESS') {
          alert('배송지가 추가되었습니다.');
          window.location.reload();
        } else {
          alert('배송지 추가에 실패했습니다.');
        }
      });
  };

  if (!open) return null;

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
              <Input
                scale="middle"
                name="deliveryName"
                onChange={handlerChange}
              />
              <p className="addModalTitle">받는 분</p>
              <Input
                scale="middle"
                name="deliveryRecipient"
                onChange={handlerChange}
              />
              <p className="addModalTitle">휴대폰 번호</p>
              <div className="addModalPhone">
                <select
                  className="addModalSelect"
                  name="deliveryPrefix"
                  onChange={handlerChange}
                >
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                  <option>018</option>
                  <option>019</option>
                </select>
                <Input
                  scale="middle"
                  name="deliveryPhone"
                  onChange={handlerChange}
                  placeholder={`'-'없이 휴대폰번호 입력`}
                />
              </div>
              <p className="addModalTitle">주소</p>
              <div className="addModalAddress">
                <Input
                  className="addressInput"
                  onChange={handlerChange}
                  scale="middle"
                  name="deliveryZipCode"
                  value={onAddressSelect.zonecode}
                />
                <Postcode onAddressSelect={handleAddressSelect} />
              </div>
              <Input scale="middle" value={onAddressSelect.address} />
              <Input
                scale="middle"
                name="deliveryAddressDetail"
                onChange={handlerChange}
              />
              <div className="deliveryAddModalCheckBox">
                <Input
                  className="checkBox"
                  type="checkbox"
                  text="기본 배송지로 설정"
                  onChange={handleCheckBox}
                />
              </div>
              <div className="deliveryAddModalButton">
                <Button
                  scale="middle"
                  shape="fill"
                  color="tertiary"
                  onClick={() => handleAddressInfoBtn()}
                >
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
