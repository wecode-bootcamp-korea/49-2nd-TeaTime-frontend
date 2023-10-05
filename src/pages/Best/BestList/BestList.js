import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import IconButton from '../../../Component/IconButton/IconButton';
import './BestList.scss';

const BestList = props => {
  const { bestData, navigate } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div className="bestList">
      {bestData.length > 0 &&
        bestData.map((item, index) => {
          const {
            id,
            mainImageUrl,
            subImageUrl,
            name,
            price,
            discountRate,
            discountPrice,
          } = item;

          const imageHover = (e, img) => {
            e.target.src = img;
          };

          return (
            <section className="bestListWrap" key={id}>
              <div className="bestItem">
                <img
                  className="bestItemImg"
                  src={mainImageUrl ? mainImageUrl : '/images/no-image.jpg'}
                  {...(isHovering && {
                    src: subImageUrl ? subImageUrl : '/images/no-image.jpg',
                  })}
                  alt="best 상품"
                  onMouseOver={e =>
                    imageHover(
                      e,
                      subImageUrl ? subImageUrl : '/images/no-image.jpg',
                    )
                  }
                  onMouseOut={e =>
                    imageHover(
                      e,
                      mainImageUrl ? mainImageUrl : '/images/no-image.jpg',
                    )
                  }
                  onClick={() => {
                    navigate(`/product/${id}`);
                  }}
                />
                <div className="bestItemText">{index + 1}</div>
                <IconButton
                  className="bestItemImgBtn"
                  img="cart"
                  onClick={() => {
                    navigate('/cart');
                  }}
                />
              </div>
              <div className="bestItemNameInfo">
                <Link className="bestItemName" to={`/product/${id}`}>
                  {name}
                </Link>
                <div className="bestItemPriceBox">
                  {discountRate >= 1 ? (
                    <>
                      <del className="bestItemSalesPrice">{`${price
                        .toString()
                        .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</del>
                      <div className="bestItemListPrice">
                        <p className="bestItemPrice">{`${discountPrice
                          .toString()
                          .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</p>
                        <span className="bestItemDiscount">
                          {`-${discountRate}%`}
                        </span>
                      </div>
                    </>
                  ) : (
                    <p className="bestItemPrice">{`${price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</p>
                  )}
                </div>
              </div>
            </section>
          );
        })}
    </div>
  );
};

export default BestList;
