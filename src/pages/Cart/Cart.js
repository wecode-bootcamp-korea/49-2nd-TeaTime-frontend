import React, { useEffect, useState } from 'react';
import Button from '../../Component/Button/Button';
import './Cart.scss';
import Count from '../../Component/Count/Count';
const Cart = () => {
  const [checkItems, setCheckItems] = useState([]);
  const [data, setData] = useState([]);
  const [total, setTotal] = useState({
    totalPrice: 0,
    totalDiscount: 0,
    totalDelivery: 0,
    totalBag: 0,
    totalPacking: 0,
    totalRealPrice: 0,
  });

  const handleData = () => {
    fetch(`http://51.20.57.76:8000/cart/show`, {
      method: 'Get',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        setData(result.data.productInfo);
      });
  };

  useEffect(() => {
    handleData();
  }, []);

  useEffect(() => {
    let totalPrice = 0;
    let totalDiscount = 0;
    let totalDelivery = 0;
    let totalBag = 0;
    let totalPacking = 0;
    let totalRealPrice = 0;

    if (checkItems.length >= 1) {
      for (let i = 0; i < checkItems.length; i++) {
        const key = checkItems[i];
        const filter = data.filter(x => x.cart_id === key);

        const count = filter[0].count;
        const discountPrice = filter[0].discountPrice;
        const price = filter[0].price;
        const isBag = filter[0].is_bag;
        const isPackage = filter[0].is_packing;

        totalPrice += price * count;
        isBag ? (totalBag += 100 * count) : (totalBag += 0);
        isPackage ? (totalPacking += 2000 * count) : (totalPacking += 0);
        totalDiscount += discountPrice * count;
        totalRealPrice +=
          price * count -
          discountPrice * count +
          (isBag ? 100 * count : 0) +
          (isPackage ? 2000 * count : 0);
      }
      totalRealPrice > 50000 ? (totalDelivery = 0) : (totalDelivery = 2000);
      setTotal({
        totalPrice,
        totalBag,
        totalPacking,
        totalDiscount,
        totalRealPrice,
        totalDelivery,
      });
    } else {
      setTotal({
        totalPrice: 0,
        totalDiscount: 0,
        totalDelivery: 0,
        totalBag: 0,
        totalPacking: 0,
        totalRealPrice: 0,
      });
    }
  }, [checkItems]);

  const handleAllCheck = checked => {
    if (checked) {
      const idArray = [];
      data.forEach(el => idArray.push(el.cart_id));
      setCheckItems(idArray);
    } else {
      setCheckItems([]);
    }
  };

  const handleSingleCheck = (checked, id) => {
    if (checked) {
      setCheckItems(prev => [...prev, id]);
    } else {
      setCheckItems(checkItems.filter(el => el !== id));
    }
  };

  const onClickPlus = (e, key, cnt) => {
    cnt = parseInt(cnt) + 1;
    fetch('http://51.20.57.76:8000/cart/addcount', {
      method: 'Post',
      body: JSON.stringify({
        cartId: key,
        count: cnt,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        e.target.previousSibling.children[0].value = cnt;
        handleData();
        // if (result.message === 'add') {
        //   window.location.reload();
        // } else {
        //   alert('에러입니다. 관리자에게 문의하세요.');
        // }
      });
  };

  const onClickMinus = (e, key, cnt) => {
    if (parseInt(cnt) > 2) {
      cnt = parseInt(cnt) - 1;

      fetch('http://51.20.57.76:8000/cart/addcount', {
        method: 'Post',
        body: JSON.stringify({
          cartId: key,
          count: cnt,
        }),
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          Authorization: localStorage.getItem('accessToken'),
        },
      })
        .then(res => {
          return res.json();
        })
        .then(result => {
          e.target.nextSibling.children[0].value = cnt;
          handleData();
          // if (result.message === 'add') {
          //   window.location.reload();
          // } else {
          //   alert('에러입니다. 관리자에게 문의하세요.');
          // }
        });
    } else {
      return false;
    }
  };

  const handleDelete = () => {
    fetch('http://51.20.57.76:8000/cart/del', {
      method: 'Delete',
      body: JSON.stringify({
        productIds: checkItems,
      }),
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        Authorization: localStorage.getItem('accessToken'),
      },
    })
      .then(res => {
        return res.json();
      })
      .then(result => {
        result.message === 'delete'
          ? window.location.reload()
          : alert('오류입니다. 관리자에게 문의하세요.');
      });
  };

  return (
    <div className="cart">
      <div className="cartTit">
        <div className="titInner">
          <h2>장바구니</h2>
        </div>
      </div>
      <div className="cartContainer">
        <div className="cartLayout">
          <div className="contents">
            <div className="content">
              <div className="cartCheck">
                <div className="allCheckBox">
                  <div className="checkBox">
                    <input
                      type="checkbox"
                      id="checkAll"
                      onChange={e => handleAllCheck(e.target.checked)}
                      checked={checkItems.length === data.length ? true : false}
                    />
                    <label htmlFor="checkAll">
                      <span>전체선택</span>
                    </label>
                  </div>
                </div>
                <div className="deleteBox">
                  <button
                    type="button"
                    className="checkDel"
                    onClick={handleDelete}
                  >
                    선택삭제
                  </button>
                </div>
              </div>
              <ul className="cartList">
                {data.map(item => (
                  <li className="listItem">
                    <div className="chkBox">
                      <div className="inputChk">
                        <input
                          type="checkbox"
                          id={`prdId${item.cart_id}`}
                          name={`select-${item.cart_id}`}
                          onChange={e =>
                            handleSingleCheck(e.target.checked, item.cart_id)
                          }
                          checked={
                            checkItems.includes(item.cart_id) ? true : false
                          }
                        />
                        <label htmlFor={`prdId${item.cart_id}`}></label>
                      </div>
                    </div>
                    <div className="prdInfo">
                      <div className="imgBox">
                        <img src={item.image_url} alt="" class="thumb" />
                      </div>
                      <div className="textBox">
                        <p className="prdName">{item.name}</p>
                        <p className="packingState">
                          {item.is_bag ? '쇼핑백 사용 /' : '쇼핑백 미사용 /'}
                          {item.is_packing ? ' 포장' : ' 비포장'}
                        </p>
                        <p className="presentable">선물 가능한 상품입니다.</p>
                      </div>
                    </div>
                    <div className="cntPrd">
                      <Count
                        onClickPlus={e =>
                          onClickPlus(e, item.cart_id, item.count)
                        }
                        onClickMinus={e =>
                          onClickMinus(e, item.cart_id, item.count)
                        }
                        value={item.count}
                      />
                      <div className="priceBox">
                        <p>
                          {item.price && item.discountPrice
                            ? (item.price - item.discountPrice).toLocaleString()
                            : item.price.toLocaleString()}
                          원
                        </p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="cartBtn">
              <div className="blockBtn">
                <div className="choiceBtn">
                  <Button
                    className="choBuy"
                    scale="middle"
                    shape="fill"
                    color="bording"
                  >
                    선택주문
                  </Button>
                  <Button
                    className="AllBuy"
                    scale="middle"
                    shape="fill"
                    color="green"
                  >
                    전체주문
                  </Button>
                </div>
              </div>
              <div className="infoFix">
                <div className="priceInfo">
                  <ul className="infoList">
                    <li>
                      <p className="itemKey">상품 금액</p>
                      <p className="itemValue">
                        +<span>{total.totalPrice}</span>원
                      </p>
                    </li>
                    <li>
                      <p className="itemKey">상품 할인</p>
                      <p className="itemValue red">
                        -
                        <span>
                          {total.totalDiscount &&
                            total.totalDiscount.toLocaleString()}
                        </span>
                        원
                      </p>
                    </li>
                    <li>
                      <p className="itemKey">포장비</p>
                      <p className="itemKey">
                        +
                        {total.totalPacking &&
                          total.totalPacking.toLocaleString()}
                        원
                      </p>
                    </li>
                    <li>
                      <p className="itemKey">쇼핑백</p>
                      <p className="itemKey">
                        +{total.totalBag && total.totalBag.toLocaleString()}원
                      </p>
                    </li>
                    <li>
                      <p className="itemKey">배송비</p>
                      <p className="itemKey">
                        +
                        {total.totalDelivery &&
                          total.totalDelivery.toLocaleString()}
                        원
                      </p>
                    </li>
                  </ul>
                  <div className="totalPrice">
                    <p className="itemKey">결제 예상 금액</p>
                    <p className="itemValue">
                      <span>
                        {total.totalRealPrice &&
                          total.totalRealPrice.toLocaleString()}
                        원
                      </span>
                    </p>
                  </div>
                  <div className="listBtn">
                    <Button
                      className="buyBtn"
                      scale="middle"
                      shape="fill"
                      color="green"
                    >
                      {total.totalRealPrice &&
                        total.totalRealPrice.toLocaleString()}
                      원 주문하기
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Cart;
