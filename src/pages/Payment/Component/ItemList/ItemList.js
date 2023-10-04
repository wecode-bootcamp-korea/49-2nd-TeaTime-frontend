import React from 'react';
import './ItemList.scss';

const ItemList = props => {
  const { itemList } = props;

  return itemList.map(item => {
    return (
      <div className="paymentItemInfoBox" key={item}>
        <div className="paymentItemInfoBoxWrap">
          <div className="paymentItemInfoBoxWrapInnerImg">
            <img src={item.image} alt="상품 이미지" />
          </div>
          <div className="paymentItemInfoBoxWrapInnerInfo">
            <div className="paymentItemInfoBoxWrapInnerInfoName">
              <span>{item.name}</span>
              <span className="packaging">{item.packaging}</span>
            </div>
            <p className="paymentItemInfoBoxWrapInnerInfoPrice">
              <p>{`${item.price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}원`}</p>
              /<span>{`${item.quantity}개`}</span>
            </p>
          </div>
        </div>
      </div>
    );
  });
};

export default ItemList;
