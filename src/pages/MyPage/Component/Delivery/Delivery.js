import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Chip from '../../../../Component/Chip/Chip';
import Button from '../../../../Component/Button/Button';
import DeliveryAddModal from '../DeliveryAddModal/DeliveryAddModal';
import './Delivery.scss';

const Delivery = props => {
  const { DILIVERY_DATA } = props;
  const [isMyAddress, setIsMyAddress] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="deliveryLocation">
      <h3 className="deliveryInfo">배송지 정보</h3>
      <p className="deliveryLength">
        <span>{`${DILIVERY_DATA.length}개`}</span>의 배송지가 등록되어 있습니다.
      </p>

      {DILIVERY_DATA.map(data => {
        return (
          <>
            <div className="deliveryRegister" key={data.id} />
            <div className="deliveryLocationList">
              <div className="deliveryItem">
                <div className="deliveryListTitle">
                  <h4 className="listName">{data.name}</h4>
                  <p className="customerName">{data.subName}</p>
                </div>
                <div className="deliveryUserAddress">
                  <p className="address">{data.address}</p>
                  <p className="phoneNumber">{`연락처 ${data.phoneNumber}`}</p>
                </div>

                <div className="delEdtWrap">
                  <Link className="delBtn" to="/">
                    삭제
                  </Link>
                  <Link className="edtBtn" to="/">
                    수정
                  </Link>
                </div>
              </div>
              <div>
                {data.isMyAddress ? (
                  <Chip scale="small" checked="true" text="기본 배송지" />
                ) : (
                  <Chip
                    scale="middle"
                    checked="false"
                    text="기본 배송지 설정"
                    onClick={() => {
                      if (isMyAddress) {
                        setIsMyAddress(false);
                      } else {
                        setIsMyAddress(true);
                      }

                      alert('기본 배송지로 설정되었습니다.');
                    }}
                  />
                )}
              </div>
            </div>
          </>
        );
      })}
      <div className="deliveryAdd">
        <Button
          className="addBtn"
          scale="middle"
          shape="fill"
          color="tertiary"
          onClick={openModal}
        >
          <span>배송지 추가</span>
        </Button>
        {isModalOpen && <DeliveryAddModal onClick={closeModal} />}
      </div>
    </div>
  );
};

export default Delivery;
