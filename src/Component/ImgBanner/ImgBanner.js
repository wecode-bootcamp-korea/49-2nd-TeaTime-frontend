import React from 'react';
import './ImgBanner.scss';

const ImgBanner = props => {
  const { src, alt, text } = props;
  return (
    <div className="imgHeader">
      <img className="imgBanner" src={src} alt={alt} />
      <span className="imgBannerText">{text}</span>
    </div>
  );
};
export default ImgBanner;
