import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import UserInfoModal from './Component/UserInfoModal/UserInfoModal';
import Receipt from './Component/Receipt/Receipt';
import DeliveryInfo from './Component/DeliveryInfo/DeliveryInfo';
import ItemList from './Component/ItemList/ItemList';
import DisCountModal from './Component/DisCountModal/DisCountModal';
import PaymentModal from './Component/PaymentModal/PaymentModal';
import Agree from './Component/Agree/Agree';
import './Payment.scss';

const Payment = () => {
  // useState
  const [isUserInfoModal, setIsUserInfoModal] = useState(false);
  const [isItemListModal, setIsItemListModal] = useState(false);
  const [isDisCountModal, setIsDisCountModal] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [paymentSelect, setPaymentSelect] = useState([]);
  const location = useLocation();
  // const [seachParams, setSeachParams] = useSearchParams();

  const [userInfo, setUserInfo] = useState([
    {
      name: '',
      email: '',
      phone: '',
      senderName: '',
    },
  ]);
  const [itemList, setItemList] = useState([]);
  const productData = location.state;

  useEffect(() => {
    fetch('../data/ItemListData.json')
      .then(res => res.json())
      .then(data => setItemList(data));
  }, []);

  console.log(itemList);

  // useEffect(() => {
  //   fetch(`http://51.20.57.76:8000/orders`, {
  //     method: 'Get',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: localStorage.getItem('accessToken'),
  //     },
  //   })
  //     .then(res => res.json())
  //     .then(data => setItemList(data));
  // }, []);

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

  const openDisCountModal = () => {
    if (isDisCountModal) {
      return setIsDisCountModal(false);
    }
    return setIsDisCountModal(true);
  };

  const openPaymentModal = () => {
    if (isPaymentModal) {
      return setIsPaymentModal(false);
    }
    return setIsPaymentModal(true);
  };

  const handleOnClick = e => {
    if (e.target.name === 'payment') {
      setPaymentSelect({ ...paymentSelect, payment: 'on', account: '' });
    } else {
      setPaymentSelect({ ...paymentSelect, payment: '', account: 'on' });
    }
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
                <span>총 {!productData ? itemList.length : '1'}건</span>
              </div>

              {productData !== null && (
                <div className="paymentItemInfoBox">
                  <div className="paymentItemInfoBoxWrap">
                    <div className="paymentItemInfoBoxWrapInnerImg">
                      <img
                        src={
                          productData.img !== null
                            ? productData.img
                            : '../images/no-image.jpg'
                        }
                        alt="상품 이미지"
                      />
                    </div>
                    <div className="paymentItemInfoBoxWrapInnerInfo">
                      <div className="paymentItemInfoBoxWrapInnerInfoName">
                        <span>{productData.name}</span>
                        <div>
                          <span className="packaging">
                            {productData.isBagCheck ? '포장' : '비포장'}
                          </span>
                          <span className="packaging"> / </span>
                          <span className="packaging">
                            {productData.isWrapCheck
                              ? '쇼핑백 사용'
                              : '쇼핑백 미사용'}
                          </span>
                        </div>
                      </div>
                      <p className="paymentItemInfoBoxWrapInnerInfoPrice">
                        <p>{`${productData.price
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</p>
                        /<span>{`${productData.cnt}개`}</span>
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {productData === null &&
                (isItemListModal ? (
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
                          <p>{`${itemList[0]?.price
                            .toString()
                            .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</p>
                          /<span>{`${itemList[0]?.quantity}개`}</span>
                        </p>
                      </div>
                    </div>
                  </div>
                ))}

              <div className="paymentDisCount">
                <div
                  className={`paymentDisCountWrapTitle ${
                    isDisCountModal ? 'modalOn' : ''
                  }`}
                  onClick={() => {
                    openDisCountModal();
                  }}
                >
                  <h2 className="disCountTitle">할인/포인트</h2>
                  <span>
                    {productData !== null &&
                      `${productData.discountPrice
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}
                  </span>
                </div>
                {isDisCountModal && <DisCountModal productData={productData} />}
              </div>

              <div className="paymentSelect">
                <div
                  className={`paymentSelectWrapTitle ${
                    isPaymentModal ? 'modalOn' : ''
                  }`}
                  onClick={() => {
                    openPaymentModal();
                  }}
                >
                  <h2 className="selectTitle">결제수단</h2>
                  <span>
                    {paymentSelect.payment === 'on' ? '신용카드' : '계좌이체'}
                  </span>
                </div>

                {isPaymentModal && (
                  <PaymentModal
                    onClick={handleOnClick}
                    paymentSelect={paymentSelect}
                  />
                )}
              </div>

              <Agree />
            </div>
          </section>

          <Receipt productData={productData} />
        </form>
      </div>
    </div>
  );
};

export default Payment;
