import React, { useEffect, useState } from 'react';
import Button from '../../../../Component/Button/Button';
import Input from '../../../../Component/Input/Input';
import DeliverySelectModal from '../DeliverySelectModal/DeliverySelectModal';
import { Postcode } from '../../../MyPage/Component/DeliveryAddModal/Component/DaumPostCode';
import './DeliveryInfo.scss';

const DeliveryInfo = () => {
  // state
  const [open, setOpen] = useState(false);
  const [onAddressSelect, setOnAddressSelect] = useState('');
  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    subName: '',
    address: '',
    addressDetail: '',
    zipCode: '',
    phoneNumber: '',
    isMyAddress: true,
  });
  // handlers
  const onClickDeliveryChange = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const onClickDelivery = data => {
    setDeliveryInfo(data);
    onClose();
  };

  const handlerChange = e => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value,
    });
  };

  const handleAddressSelect = address => {
    setOnAddressSelect(address);
    setDeliveryInfo({
      ...deliveryInfo,
      zipCode: address.zonecode,
      address: address.address,
    });
  };

  return (
    <section>
      <div className="deliveryInfoBox">
        <div className="NameBoxWrap">
          <table className="deliveryInfoTable">
            <caption>배송지 정보</caption>
            <colgroup>
              <col style={{ width: '130px' }} />
            </colgroup>
            <tbody>
              <tr>
                <th className="deliveryName" scope="row">
                  <p className="infoText">받는 분</p>
                </th>
                <td>
                  <Input
                    className="deliveryNameInput"
                    scale="middle"
                    type="text"
                    name="name"
                    // onChange={onChange}
                  />
                </td>
              </tr>
              <tr>
                <th className="deliveryPhone" scope="row">
                  <p className="infoText">연락처</p>
                </th>
                <td>
                  <div className="deliveryPhoneWrap">
                    <select className="phoneSelect">
                      <option value="010" selected>
                        010
                      </option>
                      <option value="011">011</option>
                      <option value="016">016</option>
                      <option value="017">017</option>
                    </select>
                    <p />
                    <Input
                      className="deliveryPhoneInput"
                      scale="middle"
                      type="text"
                      name="phone"
                      // onChange={onChange}
                    />
                  </div>
                </td>
              </tr>
              <tr>
                <th className="deliveryAddress" scope="row">
                  <p className="infoText">주소</p>
                </th>
                <td>
                  <div className="addModalAddressWrap">
                    <Input
                      className="addressInput"
                      onChange={handlerChange}
                      scale="middle"
                      name="deliveryZipCode"
                      defaultValue={onAddressSelect.zonecode}
                    />
                    <Postcode onAddressSelect={handleAddressSelect} />
                  </div>
                  <Input
                    scale="middle"
                    defaultValue={onAddressSelect.address}
                  />
                  <Input
                    scale="middle"
                    name="deliveryAddressDetail"
                    placeholder="상세주소 입력"
                    onChange={handlerChange}
                  />
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <Button
          className="deliveryBtn"
          shape="fill"
          fullWidth="true"
          onClick={onClickDeliveryChange}
        >
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
      <DeliverySelectModal
        open={open}
        onClose={onClose}
        onClickDelivery={onClickDelivery}
      />
    </section>
  );
};

export default DeliveryInfo;
