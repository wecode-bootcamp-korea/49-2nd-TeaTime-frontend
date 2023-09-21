import React, { useEffect, useState } from 'react';
import './Products.scss';
import { useSearchParams } from 'react-router-dom';
import { PRODUCT_CATEGORY, PRODUCT_SORT } from '../../data/ComponentData';
import SubNav from './Components/SubNav';
import Contents from './Components/Contents';

const Products = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [category, setCategory] = useState(0);
  const [sort, setSort] = useState(1);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchParams.get('category'))
      setCategory(parseInt(searchParams.get('category')));
    if (searchParams.get('sort')) setSort(parseInt(searchParams.get('sort')));
    if (searchParams.get('page')) setPage(parseInt(searchParams.get('page')));
  }, [searchParams]);

  const handlerSubNav = e => {
    const eCategory = e.target.id;
    if (!searchParams.get('category')) {
      searchParams.append('category', eCategory);
      setSearchParams(searchParams);
    } else {
      searchParams.set('category', eCategory);
      setSearchParams(searchParams);
    }
  };
  const handlerSort = e => {
    const eSort = e.target.id;
    if (!searchParams.get('sort')) {
      searchParams.append('sort', eSort);
      setSearchParams(searchParams);
    } else {
      searchParams.set('sort', eSort);
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="products">
      <div
        className="categoryInfo"
        style={{ backgroundImage: `url(${PRODUCT_CATEGORY[category].url})` }}
      >
        <span className="categoryTit">{PRODUCT_CATEGORY[category].text}</span>
      </div>
      <div className="itemList">
        <div className="itemWrapper">
          <div className="subNav">
            <SubNav
              productCategory={PRODUCT_CATEGORY}
              category={category}
              handlerSubNav={handlerSubNav}
            />
          </div>
          <Contents
            productSort={PRODUCT_SORT}
            sort={sort}
            handlerSort={handlerSort}
            titleText={PRODUCT_CATEGORY[category].text}
          />
        </div>
      </div>
    </div>
  );
};

export default Products;
