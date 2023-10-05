import React, { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import UserInfoModal from './Component/UserInfoModal/UserInfoModal';
import Receipt from './Component/Receipt/Receipt';
import DeliveryInfo from './Component/DeliveryInfo/DeliveryInfo';
import ItemList from './Component/ItemList/ItemList';
import DisCountModal from './Component/DisCountModal/DisCountModal';
import PaymentModal from './Component/PaymentModal/PaymentModal';
import Agree from './Component/Agree/Agree';
import Button from '../../Component/Button/Button';
import './Payment.scss';

const Payment = () => {
  // useState
  const [isUserInfoModal, setIsUserInfoModal] = useState(false);
  const [isItemListModal, setIsItemListModal] = useState(false);
  const [isDisCountModal, setIsDisCountModal] = useState(false);
  const [isPaymentModal, setIsPaymentModal] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [paymentSelect, setPaymentSelect] = useState([]);
  const [searchParams, setSeachParams] = useSearchParams();
  const location = useLocation();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    phone: '',
    senderName: '',
  });

  const [itemList, setItemList] = useState([]);
  const productData = location.state;
  const id = searchParams.get('id');
  const cnt = searchParams.get('cnt');
  const isBagCheck = searchParams.get('isBagCheck');
  const isWrapCheck = searchParams.get('isWrapCheck');

  // var
  const disCount = itemList.discount > 0 ? itemList.discount : 0 * cnt;

  useEffect(() => {
    fetch(`http://51.20.57.76:8000/products/order/${id}`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(result => {
        if (result.message === 'READ_SUCCESS') {
          setItemList(result.data);
        } else if (result.message === 'PRODUCT_NOT_FOUND') {
          alert('상품이 존재하지 않습니다.');
        }
      });
  }, [id]);

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

  const handleIsChecked = () => {
    setIsChecked(!isChecked);
  };

  const handleOnClick = e => {
    if (e.target.name === 'payment') {
      setPaymentSelect({ ...paymentSelect, payment: 'on', account: '' });
    } else {
      setPaymentSelect({ ...paymentSelect, payment: '', account: 'on' });
    }
  };

  // const handleOnSubmit = e => {
  //   fetch(`http://51.20.57.76:8000/orders`, {
  //     method: 'post',
  //     headers: {
  //       'Content-Type': 'application/json;charset=utf-8',
  //       Authorization: localStorage.getItem('accessToken'),
  //     },
  //     body: JSON.stringify({
  //       productId : productData.id,
  //       count : productData.cnt,
  //       isBag : productData.isBagCheck,
  //       isPacking : productData.isWrapCheck,
  //       name : userInfo.name,
  //       phoneNumber : userInfo.phone,
  //       totalPrice : productData.totalPrice,
  //       isShippingFee: ,
  //       isAgree : isChecked,
  //       address : ,
  //       detailAddress : ,
  //       zipCode : ,
  //     }),
  //   })
  //     .then(res => res.json())
  //     .then(data => setItemList(data));
  // };
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
              <div className="deliveryInfoWrap">
                <h2 className="paymentDeliveryInfo">배송지 정보</h2>
                <Button
                  className="paymentDeliveryBtn"
                  scale="xSmall"
                  shape="outLine"
                  color="white"

                  // onClick={onClickDeliveryChange}
                >
                  주문 고객과 동일
                </Button>
              </div>
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
                <span>총 {`${1}건`}</span>
              </div>

              <div className="paymentItemInfoBox">
                <div className="paymentItemInfoBoxWrap">
                  <div className="paymentItemInfoBoxWrapInnerImg">
                    <img
                      src={
                        itemList.mainImageUrl !== null
                          ? itemList.mainImageUrl
                          : '../images/no-image.jpg'
                      }
                      alt="상품 이미지"
                    />
                  </div>
                  <div className="paymentItemInfoBoxWrapInnerInfo">
                    <div className="paymentItemInfoBoxWrapInnerInfoName">
                      <span>{itemList.name}</span>
                      <div>
                        <span className="packaging">
                          {isBagCheck ? '포장' : '비포장'}
                        </span>
                        <span className="packaging"> / </span>
                        <span className="packaging">
                          {isWrapCheck ? '쇼핑백 사용' : '쇼핑백 미사용'}
                        </span>
                      </div>
                    </div>
                    <p className="paymentItemInfoBoxWrapInnerInfoPrice">
                      <p>{`${itemList?.price}원`}</p>/<span>{`${cnt}개`}</span>
                    </p>
                  </div>
                </div>
              </div>

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
                          <p>{`${itemList[0]?.price}원`}</p>/
                          <span>{`${itemList[0]?.quantity}개`}</span>
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
                  <span>{`${disCount}원`}</span>
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

              <Agree onClick={handleIsChecked} />
            </div>
          </section>

          <Receipt productData={productData} itemList={itemList} />
        </form>
      </div>
    </div>
  );
};

export default Payment;
