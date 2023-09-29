import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Paging from '../../../Component/Paging/Paging';
import './Review.scss';

const Review = props => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (searchParams.get('page')) setPage(parseInt(searchParams.get('page')));
  }, [searchParams]);

  const handlerPage = e => {
    const ePage = e.target.id;
    if (!searchParams.get('page')) {
      searchParams.append('page', ePage);
      setSearchParams(searchParams);
    } else {
      searchParams.set('page', ePage);
      setSearchParams(searchParams);
    }
  };

  return (
    <div className="review">
      <p className="title">고객 리뷰</p>
      <p className="subTitle">
        상품을 직접 구매하여 경험하신 분들의 솔직담백한 후기들을 확인해보세요
      </p>
      <div className="average">
        <div className="averageInner">
          <div className="innerLeft">
            <p className="leftTit">{props.productName}</p>
            <p className="leftSubTit">
              <span>총 {props.reviewCnt}개</span>의 고객 후기가 있습니다.
            </p>
          </div>
          <div className="innerRight">
            <p>리뷰 평점</p>
            <div>
              <span>{props.reviewPoint}</span>
            </div>
          </div>
        </div>
      </div>
      <div className="reviewContents">
        <div className="reviewList">
          {/* 반복 */}
          <div className="reviewBox">
            <div className="reviewPoint">
              <div className="reviewDate">2023.04.23</div>
              <div className="starPoint">
                <div className={`star p${props.reviewPoint}`}>
                  <div className="bar"></div>
                </div>
              </div>
            </div>
            <div className="reviewContent">
              <div className="reviewWriter">
                <em>구매자</em>
                <span>누구누구</span>
              </div>
              <a>여러가지 맛을 볼수 있어서 참 좋네요</a>
            </div>
          </div>
          {/* 여기까지 */}
        </div>
      </div>
      <Paging
        page={page}
        totalCnt={props.reviewCnt}
        handlerPage={handlerPage}
        showPage={10}
      />
    </div>
  );
};
export default Review;
