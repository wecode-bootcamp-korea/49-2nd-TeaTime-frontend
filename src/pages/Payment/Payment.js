import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate, useSearchParams } from 'react-router-dom';
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
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    name: '',
    email: '',
    domain: '',
    phoneFix: '',
    phoneNumber: '',
    senderName: '',
  });

  const [deliveryInfo, setDeliveryInfo] = useState({
    name: '',
    address: '',
    addressDetail: '',
    zipCode: '',
    phoneFix: '',
    phoneNumber: '',
  });

  const [userInfoList, setUserInfoList] = useState({});

  const [itemList, setItemList] = useState([]);

  const id = searchParams.get('id');
  const cnt = searchParams.get('cnt');
  const isBagCheck = searchParams.get('isBagCheck');
  const isWrapCheck = searchParams.get('isWrapCheck');
  const cartId = location.state;

  // var
  const disCount =
    itemList?.discount > 0 || itemList?.discount !== null
      ? itemList?.discount * cnt
      : 0 * cnt;
  const totalItemPrice = itemList?.price * cnt;
  const totalPrice = itemList?.price * cnt - disCount;
  const deliveryPrice = totalPrice >= 50000 ? 0 : 2500;
  const userInfoData = userInfoList?.userRegistrationData;
  const emailParts =
    userInfoData !== undefined && userInfoData?.email.split('@');

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

  useEffect(() => {
    fetch(`http://51.20.57.76:8000/user/userInfo`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => res.json())
      .then(result => {
        setUserInfoList(result.user);
      });
  }, []);

  // event
  const handleUserInfo = e => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handlerChange = e => {
    const { name, value } = e.target;
    setDeliveryInfo({
      ...deliveryInfo,
      [name]: value,
    });
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

  const copyCustomerInfo = () => {
    const orderCustomerInfo = {
      name: userInfoData.name,
      phoneFix: userInfoData.phoneNumber.slice(0, 3),
      phoneNumber: userInfoData.phoneNumber.slice(4, 13),
    };
    setDeliveryInfo(orderCustomerInfo);
  };

  useEffect(() => {
    const userInfoUpdate = {
      name: userInfoData?.name,
      email: emailParts[0],
      domain: emailParts[1],
      phoneFix: userInfoData?.phoneNumber.slice(0, 3),
      phoneNumber: userInfoData?.phoneNumber.slice(4, 13),
    };
    setUserInfo(userInfoUpdate);
  }, [isUserInfoModal, userInfoData]);

  const handleOnSubmit = e => {
    fetch(`http://51.20.57.76:8000/orders`, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
      body: JSON.stringify({
        productId: id,
        count: cnt,
        isBag: isBagCheck,
        isPacking: isWrapCheck,
        totalPrice: totalPrice,
        payments: '',
        name: userInfo.name,
        phoneNumber: userInfo.phoneFix + userInfo.phoneNumber,
        email: userInfo.email + '@' + userInfo.domain,
        isShippingFee: deliveryPrice,
        status: '',
        isAgree: isChecked,
        address: deliveryInfo.address,
        detailAddress: deliveryInfo.deliveryAddressDetail,
        zipCode: deliveryInfo.zipCode,
      }),
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        navigate('/');
      });
  };

  console.log(cartId);

  return (
    <div className="payment">
      <div className="paymentInnerWrap">
        <section className="paymentTitle">
          <div className="paymentHeader">
            <h1 className="title">결제하기</h1>
          </div>
        </section>

        <form
          className="paymentFormOrder"
          onSubmit={() => {
            handleOnSubmit();
          }}
        >
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
                <span>
                  {userInfo?.name}/
                  {`${userInfo?.phoneFix}-` + userInfo?.phoneNumber}
                </span>
              </p>
            </div>

            {isUserInfoModal && (
              <UserInfoModal
                onChange={handleUserInfo}
                userInfoData={userInfoData}
              />
            )}

            <div className="paymentUserInfoDelivery">
              <div className="deliveryInfoWrap">
                <h2 className="paymentDeliveryInfo">배송지 정보</h2>
                <Button
                  className="paymentDeliveryBtn"
                  scale="xSmall"
                  shape="outLine"
                  color="white"
                  onClick={copyCustomerInfo}
                >
                  주문 고객과 동일
                </Button>
              </div>
              <DeliveryInfo
                onChange={handlerChange}
                userInfoData={userInfoData}
                deliveryInfo={deliveryInfo}
                setDeliveryInfo={setDeliveryInfo}
              />
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
                          {isBagCheck === 'true' ? '포장' : '비포장'}
                        </span>
                        <span className="packaging"> / </span>
                        <span className="packaging">
                          {isWrapCheck === 'true'
                            ? '쇼핑백 사용'
                            : '쇼핑백 미사용'}
                        </span>
                      </div>
                    </div>
                    <p className="paymentItemInfoBoxWrapInnerInfoPrice">
                      <p>{`${totalItemPrice}원`}</p>/<span>{`${cnt}개`}</span>
                    </p>
                  </div>
                </div>
              </div>

              {itemList.length > 0 && <ItemList itemList={itemList} />}

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
                {isDisCountModal && <DisCountModal />}
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

          <Receipt
            itemList={itemList}
            isChecked={isChecked}
            disCount={disCount}
            totalItemPrice={totalItemPrice}
            totalPrice={totalPrice}
            deliveryPrice={deliveryPrice}
          />
        </form>
      </div>
    </div>
  );
};

export default Payment;
