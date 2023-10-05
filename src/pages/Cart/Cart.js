import React, { useEffect, useState } from 'react';
import Button from '../../Component/Button/Button';
import './Cart.scss';
import Count from '../../Component/Count/Count';
const Cart = () => {
  const [checkItems, setCheckItems] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
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
        setData(result.data);
      });
  }, []);

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

  const onClickPlus = (e, key) => {
    e.target.previousSibling.children[0].value = parseInt(key) + 1;
  };

  const onClickMinus = (e, key) => {
    if (key != 1) e.target.nextSibling.children[0].value = parseInt(key) - 1;
  };

  console.log(checkItems);

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
                  <button type="button" className="checkDel">
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
                          id="prdId1"
                          name={`select-${item.cart_id}`}
                          onChange={e =>
                            handleSingleCheck(e.target.checked, item.cart_id)
                          }
                          checked={
                            checkItems.includes(item.cart_id) ? true : false
                          }
                        />
                        <label htmlFor="prdId1"></label>
                      </div>
                    </div>
                    <div className="prdInfo">
                      <div className="imgBox">
                        <img
                          src="https://image.osulloc.com/upload/kr/ko/adminImage/DG/EQ/304_20230727092009887WH.png"
                          alt=""
                          class="thumb"
                        />
                      </div>
                      <div className="textBox">
                        <p className="prdName">{item.name}</p>
                        <p className="packingState">포장가능/쇼핑백가능</p>
                        <p className="presentable">선물 가능한 상품입니다.</p>
                      </div>
                    </div>
                    <div className="cntPrd">
                      <Count
                        onClickPlus={e => onClickPlus(e, `${item.count}`)}
                        onClickMinus={e => onClickMinus(e, `${item.count}`)}
                        value={1}
                      />
                      <div className="priceBox">
                        <p>{item.price && item.price.toLocaleString()}원</p>
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
                        +<span>180,000</span>원
                      </p>
                    </li>
                    <li>
                      <p className="itemKey">상품 할인</p>
                      <p className="itemValue red">
                        -<span>0</span>원
                      </p>
                    </li>
                    <li>
                      <p className="itemKey">포장비</p>
                      <p className="itemKey">+2000원</p>
                    </li>
                    <li>
                      <p className="itemKey">쇼핑백</p>
                      <p className="itemKey">+100원</p>
                    </li>
                    <li>
                      <p className="itemKey">배송비</p>
                      <p className="itemKey">+0원</p>
                    </li>
                  </ul>
                  <div className="totalPrice">
                    <p className="itemKey">결제 예상 금액</p>
                    <p className="itemValue">
                      <span>196,000원</span>
                    </p>
                  </div>
                  <div className="listBtn">
                    <Button
                      className="buyBtn"
                      scale="middle"
                      shape="fill"
                      color="green"
                    >
                      196,000원 주문하기
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
