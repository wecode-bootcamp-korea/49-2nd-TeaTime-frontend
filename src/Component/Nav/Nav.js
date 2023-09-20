import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Nav.scss';

const Nav = () => {
  const [style, setStyle] = useState({ display: 'none' });
  let isLoginStatus = localStorage.getItem('token');
  const nav = useNavigate();
  const mainMenu = [
    {
      text: '제품',
      url: '/',
      child: true,
    },
    {
      text: '선물추천',
      url: '/',
      child: false,
    },
    {
      text: 'TRBox',
      url: '/',
      child: false,
    },
  ];

  const bestProductMenu = [
    {
      text: '베스트',
      url: '/',
    },
    {
      text: '위클리 베스트',
      url: '/',
    },
  ];

  const productMenu = [
    {
      text: '티세트',
      url: '/',
    },
    {
      text: '명차',
      url: '/',
    },
    {
      text: '녹차/말차',
      url: '/',
    },
    {
      text: '발효차/홍차',
      url: '/',
    },
    {
      text: '블렌디드티',
      url: '/',
    },
    {
      text: '허브티',
      url: '/',
    },
    {
      text: '밀크티/아이스티',
      url: '/',
    },
    {
      text: '콤부차',
      url: '/review',
    },
  ];

  const dimBgAble = (state, key) => {
    if (key === 0) {
      setStyle({ display: state });
    }
  };

  const goCart = () => {
    if (!isLoginStatus) {
      alert('로그인 후 사용가능합니다.');
    } else {
      nav('/');
    }
  };

  const logOut = () => {
    if (window.confirm('로그아웃 하시겠습니까 ?')) {
      localStorage.removeItem('token');
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
                <Link to="/">TTIME</Link>
              </h1>
              <nav className="navBox">
                <ul className="navListDept1">
                  {mainMenu.map((item, index) => (
                    <li
                      key={item.text}
                      className="itemDept1"
                      onMouseOver={() => dimBgAble('block', index)}
                      onMouseLeave={() => dimBgAble('none', index)}
                    >
                      <Link to={item.url}>{item.text}</Link>
                      {item.child && (
                        <div className="navListDept2Box">
                          <div className="wrapper">
                            <div className="flexBox">
                              <ul className="navListDept2">
                                <li className="itemDept2">
                                  <Link to="/">베스트</Link>
                                  <ul className="navListDept3">
                                    {bestProductMenu.map(item => (
                                      <li key={item.text} className="itemDept3">
                                        <Link to={item.url}>{item.text}</Link>
                                      </li>
                                    ))}
                                  </ul>
                                </li>
                                <li className="itemDept2">
                                  <Link to="/">티 제품</Link>
                                  <ul className="navListDept3">
                                    {productMenu.map(item => (
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
                    <span className="cartNum">0</span>
                  </button>
                </li>
                {!isLoginStatus ? (
                  <li className="item">
                    <Link to="/">로그인</Link>
                  </li>
                ) : (
                  <li className="item">
                    <Link to="/">마이페이지</Link>
                  </li>
                )}
                {!isLoginStatus ? (
                  <li className="item">
                    <Link to="/">회원가입</Link>
                  </li>
                ) : (
                  <li className="item">
                    <Link onClick={logOut}>로그아웃</Link>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="dimBg" style={style} />
    </div>
  );
};

export default Nav;
