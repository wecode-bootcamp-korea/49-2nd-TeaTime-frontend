import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';
const Footer = () => {
  const MoveToTop = () => {
    // top:0 >> 맨위로  behavior:smooth >> 부드럽게 이동할수 있게 설정하는 속성
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  return (
    <div className="footer">
      <div className="firstWrap">
        <div className="innerWrap">
          <div className="numberWrap">
            <div className="title">고객상담센터 · 주문/배송문의</div>
            <div className="email">help@ttime.com</div>
            <div className="phone">080-0000-1234</div>
            <div className="time">평일 09:30 - 17:00 (점심 11:30 - 13:00)</div>
          </div>
          <div className="kakaoWrap">
            <div className="title">특판, 대량구매 문의</div>
            <div className="mail">mall@ttime.com</div>
            <div className="kakao">
              <span className="kakaoId">카카오톡ID : teatimemall</span>
              <p>
                <span className="time">
                  평일 09:30 - 17:00 (점심 11:30 - 13:00)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="logo">
          <Link to="/">
            <img
              onClick={MoveToTop}
              src="/images/logo_transparent.png"
              alt="logo"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Footer;
