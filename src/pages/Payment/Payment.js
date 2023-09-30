import React, { useEffect, useState } from 'react';
import UserInfoModal from './Component/UserInfoModal/UserInfoModal';
import Receipt from './Component/Receipt/Receipt';
import DeliveryInfo from './Component/DeliveryInfo/DeliveryInfo';
import './Payment.scss';
import ItemList from './Component/ItemList/ItemList';

const Payment = () => {
  // useState
  const [isUserInfoModal, setIsUserInfoModal] = useState(false);
  const [isItemListModal, setIsItemListModal] = useState(false);
  const [userInfo, setUserInfo] = useState([
    {
      name: '',
      email: '',
      phone: '',
      senderName: '',
    },
  ]);
  const [itemList, setItemList] = useState([]);

  // useEffect
  useEffect(() => {
    fetch('../data/ItemListData.json')
      .then(res => res.json())
      .then(data => setItemList(data));
  }, []);

  // event
  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  // function
  const openUserInfoModal = () => {
    if (isUserInfoModal) {
      return setIsUserInfoModal(false);
    }
    return setIsUserInfoModal(true);
  };

  const openItemListModal = () => {
    if (isItemListModal) {
      return setIsItemListModal(false);
    }
    return setIsItemListModal(true);
  };

  return (
    <div className="payment">
      <div className="paymentInnerWrap">
        <section className="paymentTitle">
          <div className="paymentHeader">
            <h1 className="title">결제하기</h1>
          </div>
        </section>

        <form className="paymentFormOrder">
          <section className="paymentInfo">
            <div
              className="paymentUserInfoTitle"
              onClick={() => {
                openUserInfoModal();
              }}
            >
              <h2 className="paymentUserInfo">주문고객정보</h2>
              <p
                className={`paymentUserName ${
                  isUserInfoModal ? 'modalOn' : ''
                }`}
              >
                <span>홍길동/010-1215-8452</span>
              </p>
            </div>

            {isUserInfoModal && <UserInfoModal onChange={handleUserInfo} />}

            <div className="paymentUserInfoDelivery">
              <h2 className="paymentDeliveryInfo">배송지 정보</h2>
              <DeliveryInfo />
            </div>

            <div className="paymentUserInfoItem">
              <div
                className={`itemInfoText ${isItemListModal ? 'modalOn' : ''}`}
                onClick={() => {
                  openItemListModal();
                }}
              >
                <h2 className="paymentItemInfo">주문상품</h2>
                <span>총 {itemList.length}건</span>
              </div>

              {isItemListModal ? (
                <ItemList itemList={itemList} />
              ) : (
                <div className="paymentItemInfoBox">
                  <div className="paymentItemInfoBoxWrap">
                    <div className="paymentItemInfoBoxWrapInnerImg">
                      <img src={itemList[0]?.image} alt="상품 이미지" />
                    </div>
                    <div className="paymentItemInfoBoxWrapInnerInfo">
                      <div className="paymentItemInfoBoxWrapInnerInfoName">
                        <span>{itemList[0]?.name}</span>
                        <span className="packaging">
                          {itemList[0]?.packaging}
                        </span>
                      </div>
                      <p className="paymentItemInfoBoxWrapInnerInfoPrice">
                        <p>{`${itemList[0]?.price}원`}</p>/
                        <span>{`${itemList[0]?.quantity}개`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </section>

          <Receipt />
        </form>
      </div>
    </div>
  );
};

export default Payment;
