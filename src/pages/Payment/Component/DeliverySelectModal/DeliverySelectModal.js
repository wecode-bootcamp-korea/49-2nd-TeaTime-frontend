import React, { useEffect } from 'react';
import { DILIVERY_DATA } from '../../../../data/TABS';
import IconButton from '../../../../Component/IconButton/IconButton';
import Chip from '../../../../Component/Chip/Chip';
import './DeliverySelectModal.scss';

const DeliverySelectModal = props => {
  // props
  const { open, onClose, onClickDelivery } = props;

  // useState

  // useEffect
  useEffect(() => {
    const body = document.querySelector('body');
    body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  if (!open) return null;

  return (
    <div className="deliverySelectModal">
      <div className="deliverySelectModalContainer">
        <div className="deliverySelectModalHeader">
          <h3>배송지 선택</h3>
          <IconButton img="close" onClick={onClose} />
        </div>

        <div className="deliverySelectModalBody">
          {DILIVERY_DATA.map(item => (
            <div className="deliverySelectWrap" key="item">
              <div className="selectTitle">
                <div className="titleWrap">
                  <h2>{item.name}</h2>
                  <h3 className="subName">{`(${item.subName})`}</h3>
                </div>
                <Chip
                  scale="small"
                  text="선택"
                  checked="false"
                  onClick={() => onClickDelivery(item)}
                />
              </div>
              <div className="selectAddressWrap">
                <p>{item.address}</p>
                <p className="addressDetail">{item.addressDetail}</p>
              </div>
              <div className="selectPhone">
                <p>{`연락처 : ${item.phoneNumber}`}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeliverySelectModal;
