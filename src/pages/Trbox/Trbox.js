import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../../Component/Button/Button';
import './Trbox.scss';
import { TR_BOX_DATA } from '../../data/ComponentData';

const Trbox = () => {
  const [clickStatus, setClickStatus] = useState(1);
  const navigate = useNavigate();

  const handleStatus = key => {
    setClickStatus(key);
  };

  let dataToPass;

  const handelTrBoxPayment = () => {
    if (clickStatus === 1) {
      dataToPass = TR_BOX_DATA[0];
    } else if (clickStatus === 2) {
      dataToPass = TR_BOX_DATA[1];
    } else if (clickStatus === 3) {
      dataToPass = TR_BOX_DATA[2];
    }

    // navigate('/payment', { state: { trBox: dataToPass } });/
    navigate('/payment', { state: dataToPass });
  };
  return (
    <div className="trbox">
      <div className="trboxImg">
        <img alt="이미지" src="/images/trbox.png" />
      </div>
      <div className="trboxInfo">
        <h1>TRBOX 안내</h1>
        <div className="infoGrid">
          <table>
            <colgroup>
              <col width="auto" />
              <col width="auto" />
            </colgroup>
            <thead>
              <tr>
                <th />
                <th>다다일상</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>매월 구성</th>
                <td>
                  *매월 다른 구성*
                  <br />
                  큐레이션 티 + 이달의 티레터
                  <br />티 테이블 기프트
                </td>
              </tr>
              <tr>
                <th>무료 배송</th>
                <td>O</td>
              </tr>
              <tr>
                <th>챌린지 참여</th>
                <td>O</td>
              </tr>
              <tr>
                <th>
                  정기구독 리워드
                  <br />
                  (6개월 단위)
                </th>
                <td class="red">X</td>
              </tr>
              <tr>
                <th>가격 안내</th>
                <td>
                  1개월 24,900원/월
                  <br />
                  3개월 22,900원/월
                  <br />
                  6개월 19,900원/월
                </td>
              </tr>
              <tr>
                <th>결제 방식</th>
                <td>
                  매월 자동 결제
                  <br />
                  3개월/6개월 구독 시, 묶음 결제
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="trboxNotice">
          <h1>구독 서비스 이용 시 아래 안내사항을 꼭 확인해주세요</h1>
          <div className="noticeContent">
            <ul>
              <li>
                <p class="listTitle">자동 결제일</p>
                <p class="desc">
                  매월 1일 ~ 28일 중 고객님이 첫 구독 결제하신 일로 최초 자동
                  결제일이 지정됩니다.
                </p>
              </li>
              <li>
                <p class="listTitle">결제일 변경</p>
                <p class="desc">
                  기존 결제일 기준 2일 전까지 자유롭게 변경 가능합니다.
                </p>
              </li>
              <li>
                <p class="listTitle">배송지 변경</p>
                <p class="desc">
                  기존 결제일 기준 2일 전까지 자유롭게 변경 가능하며, 구독
                  서비스 배송지 변경은 기본 배송지와 변경 방법이 상이합니다.
                  <br />
                  구독 서비스 배송지 변경은 맨 아래의 ‘각종 변경 및 취소, 해지
                  경로 안내’를 참고해주세요.
                </p>
              </li>
              <li>
                <p class="listTitle">건너뛰기 정기배송일 변경</p>
                <p class="desc">
                  이번 달 건너뛰기 및 결제일을 다음달로 변경하신 경우, 이번 달
                  구성은 배송되지 않고 다음 달 구성으로 배송됩니다.
                </p>
              </li>
              <li>
                <p class="listTitle">주문 취소</p>
                <p class="desc">
                  주문 취소는 [결제 완료] 단계에서만 가능하며 즉시 처리됩니다.
                  <br />
                  주문 취소는 구독 해지가 아닙니다. 결제 완료 - 출고 이전에 한
                  해 당월 주문 건만 취소 됨을 참고 부탁드립니다.
                  <br />
                  매월 결제 상품은 당월 분 주문 취소 후 환불은 결제 대행사를
                  통해 진행되며, 영업일 기준 1~7일까지 소요될 수 있습니다.
                  <br />
                  3개월/6개월 일괄 결제 상품은 주문 취소 시 ‘환불’이 아닌 해당
                  월 구독 이용 횟수가 이월됩니다.
                </p>
              </li>
              <li>
                <p class="listTitle">반품</p>
                <p class="desc">
                  제품이 이미 발송 완료된 경우, 반품은 불가능하며 제품에 하자가
                  있는 경우에만 고객 상담실로 연락 부탁드립니다.
                </p>
              </li>
              <li>
                <p class="listTitle">구독 취소(구독 해지)</p>
                <p class="desc">
                  구독 취소를 원할 경우 ‘해지 하기’로 진행 가능하며 해당월
                  다다일상을 수령하신 경우 구매확정 후 해지 가능합니다.
                  <br />
                  3개월/6개월 묶음 결제 상품의 경우 하기와 같이 환불 금액이
                  책정됩니다.
                  <br />* 3개월 구독 상품 해지 : 총 결제 금액 -
                  (24,900원*지금까지 구독한 개월 수)
                  <br />* 6개월 구독 상품 해지 : 총 결제 금액 -
                  (24,900원*지금까지 구독한 개월 수) - 다이어리 비용 5,000원
                </p>
              </li>
              <li>
                <p class="listTitle">자동 결제 승인 실패로 인한 해지 안내</p>
                <p class="desc">
                  구독 중, 자동 결제 실패 시 2회까지 고객에게 안내되며 이후에도
                  결제 승인이 이루어지지 않으면 구독이 해지됩니다.
                </p>
              </li>
              <li>
                <p class="listTitle">각종 변경 및 취소, 해지 경로 안내</p>
                <p class="desc">
                  * PC 버전 : 마이 페이지 &gt; 다다일상 관리 &gt; 변경할 구독
                  서비스 클릭 &gt; 구독 관리 페이지 내 관련 버튼 클릭
                  <br />* 모바일 버전 : 우측상단 바 메뉴 &gt; 변경할 구독 서비스
                  클릭 &gt; 구독 관리 페이지 내 관련 버튼 클릭
                </p>
              </li>
              <li>
                <p class="listTitle">기타 유의사항</p>
                <p class="desc">
                  매월 구성되는 상품은 1개의 세트입니다. 구성품 일부를 다른
                  상품으로 교체 불가합니다.
                  <br />각 상품별 유통기한이 상이합니다. 상품 뒷면에 표기된
                  유통기한을 확인 해주세요.
                </p>
              </li>
            </ul>
          </div>
          <div className="trboxContent">
            <h1>TRBOX 결제 주기를 선택해 주세요.</h1>
            <div className="trboxBtn">
              <Button
                className={`payBtn ${clickStatus === 1 && 'on'}`}
                fullWidth="true"
                color="bording"
                onClick={() => handleStatus(1)}
              >
                <h2>매월 결제</h2>
                <p>
                  월 <span className="monthPrice">24,900원</span>
                </p>
              </Button>
              <Button
                className={`payBtn ${clickStatus === 2 && 'on'}`}
                fullWidth="true"
                color="bording"
                onClick={() => handleStatus(2)}
              >
                <h2>3개월 일괄 결제</h2>
                <p>
                  월 <span className="monthPrice">22,900원</span>
                  <span className="totalPrice">(총 68,700원)</span>
                </p>
              </Button>
              <Button
                className={`payBtn ${clickStatus === 3 && 'on'}`}
                fullWidth="true"
                color="bording"
                onClick={() => handleStatus(3)}
              >
                <h2>6개월 일괄 결제</h2>
                <p>
                  월 <span className="monthPrice">19,990원</span>
                  <span className="totalPrice">(총 119,400원)</span>
                </p>
              </Button>
            </div>

            <div className="subscribeBtn">
              <Button
                className="scribeBtn"
                scale="middle"
                shape="fill"
                color="green"
                onClick={handelTrBoxPayment}
              >
                바로구매
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Trbox;
