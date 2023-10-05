import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import './Nav.scss';
import {
  MAIN_MENU,
  BEST_PRODUCT_MENU,
  PRODUCT_MENU,
} from '../../data/ComponentData';

const Nav = () => {
  const location = useLocation();
  const [style, setStyle] = useState(false);
  const [cartCnt, setCartCnt] = useState(0);
  const isLoginStatus = localStorage.getItem('accessToken');
  const navigate = useNavigate();

  useEffect(() => {
    isLoginStatus &&
      fetch('http://51.20.57.76:8000/cart/cartTotal', {
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
          setCartCnt(result.data);
        });
  }, [location.pathname]);

  const dimBgAppear = (state, key) => {
    if (key) {
      setStyle(state);
    }
  };

  const goCart = () => {
    if (!isLoginStatus) {
      alert('로그인 후 사용가능합니다.');
    } else {
      navigate('/cart');
    }
  };

  const logOut = () => {
    if (window.confirm('로그아웃 하시겠습니까 ?')) {
      localStorage.clear().removeItem('accessToken');
      window.location.reload();
    }
  };
  //장바구니 갯수 가져오는 함수 useEffect

  return (
    <div className="nav">
      <div className="menuBox">
        <div className="wrapper">
          <div className="innerBox">
            <div className="leftBox">
              <h1 className="logo">
                <img
                  src="/images/logo_transparent.png"
                  alt="logo"
                  onClick={() => {
                    navigate('/');
                  }}
                />
              </h1>
              <nav className="navBox">
                <ul className="navListDept1">
                  {MAIN_MENU.map(item => (
                    <li
                      key={item.text}
                      className="itemDept1"
                      onMouseOver={() => dimBgAppear(true, item.child)}
                      onMouseLeave={() => dimBgAppear(false, item.child)}
                    >
                      <Link to={item.url}>{item.text}</Link>
                      {item.child && (
                        <div className="navListDept2Box">
                          <div className="wrapper">
                            <div className="flexBox">
                              <ul className="navListDept2">
                                <li className="itemDept2">
                                  <Link to="/best">베스트</Link>
                                  <ul className="navListDept3">
                                    {BEST_PRODUCT_MENU.map(item => (
                                      <li key={item.text} className="itemDept3">
                                        <Link to={item.url}>{item.text}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                                <li className="itemDept2">
                                  <Link to="/products">티 제품</Link>
                                  <ul className="navListDept3">
                                    {PRODUCT_MENU.map(item => (
                                      <li key={item.text} className="itemDept3">
                                        <Link to={item.url}>{item.text}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      )}
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <div className="rightBox">
              <ul className="navUtil">
                <li className="iconItem">
                  <button to="/" className="itemCart" onClick={goCart}>
                    <span className="cartNum">{cartCnt}</span>
                  </button>
                </li>
                {isLoginStatus ? (
                  <li className="item">
                    <Link to="/mypage">마이페이지</Link>
                  </li>
                ) : (
                  <li className="item">
                    <Link to="/login">로그인</Link>
                  </li>
                )}
                {isLoginStatus ? (
                  <li className="item">
                    <Link onClick={logOut}>로그아웃</Link>
                  </li>
                ) : (
                  <li className="item">
                    <Link to="/signup">회원가입</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div
        className="dimBg"
        style={style ? { display: 'block' } : { display: 'none' }}
      />
    </div>
  );
};

export default Nav;
