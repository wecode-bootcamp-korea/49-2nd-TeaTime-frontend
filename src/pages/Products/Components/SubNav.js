import React from 'react';
import '../Products.scss';

const BestList = props => {
  return (
    <ul>
      <li className="title">제품</li>
      {props.productCategory.map(item => (
        <li className="subTitle" key={item.text}>
          <a
            className={props.category === item.value && 'on'}
            id={item.value}
            onClick={e => {
              props.handlerSubNav(e);
            }}
          >
            {item.text}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default BestList;
