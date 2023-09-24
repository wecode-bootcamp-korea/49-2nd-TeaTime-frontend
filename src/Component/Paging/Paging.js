import React from 'react';
import './Paging.scss';
import { useSearchParams } from 'react-router-dom';

const Paging = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  let maxPage = 0;

  const pageGroup = Math.ceil(props.page / 5);
  const startPage = (pageGroup - 1) * 5 + 1;
  const endPage = Math.min(startPage + 5 - 1, props.totalCnt);

  if (props.totalCnt % 8 == 0) {
    maxPage = props.totalCnt / 8;
  } else {
    maxPage = parseInt(props.totalCnt / 8) + 1;
  }

  const isPrevBtnDisaled = props.page == 1;
  const isNextBtnDisaled = props.page == maxPage;
  const clickPaging = key => {
    if (key === 'prev') {
      searchParams.set('page', props.page - 1);
      setSearchParams(searchParams);
    } else {
      searchParams.set('page', props.page + 1);
      setSearchParams(searchParams);
    }
  };
  return (
    <div className="paging">
      <button
        className={isPrevBtnDisaled ? 'disaled btn prev' : 'btn prev'}
        disabled={isPrevBtnDisaled}
        onClick={() => clickPaging('prev')}
      ></button>
      {Array.from({ length: endPage - startPage + 1 }, (_, index) => {
        let page = 0;
        if (startPage + index > maxPage) {
          return;
        } else {
          page = startPage + index;
        }
        return (
          <a
            key={page}
            id={page}
            className={page === props.page && 'on'}
            onClick={e => {
              props.handlerPage(e);
            }}
          >
            {page}
          </a>
        );
      })}
      <button
        className={isNextBtnDisaled ? 'disaled btn next' : 'btn next'}
        disabled={isNextBtnDisaled}
        onClick={() => clickPaging('next')}
      ></button>
    </div>
  );
};
export default Paging;
