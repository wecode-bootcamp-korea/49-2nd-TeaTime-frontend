import React, { useState } from 'react';
import Header from '../Login/Component/Header/Header';
import Input from '../../Component/Input/Input';
import './SignUp.scss';
import Button from '../../Component/Button/Button';

const SignUp = () => {
  const [isScroll, setIsScroll] = useState(false);

  const isScrollCheck = e => {
    const scroll =
      e.target.scrollTop >= e.target.scrollHeight - e.target.clientHeight;

    setIsScroll(scroll);
  };

  return (
    <div className="signUp">
      <Header text="회원가입" />
      <div className="signUpContainer">
        <form className="signUpForm">
          <fieldset>
            <legend className="legend">회원가입</legend>
            <div className="signUpInputWrap">
              <div className="signUpNcsry">
                <p>기본 정보</p>
                <span>필수 사항</span>
              </div>
              <div className="signUpInput">
                <Input
                  scale="large"
                  fullWidth="true"
                  placeholder="아이디 입력 (영문, 숫자 조합)"
                />
                <Input
                  scale="large"
                  fullWidth="true"
                  placeholder="비밀번호 입력 (영문, 숫자, 특수문자 조합)"
                />
                <Input
                  scale="large"
                  fullWidth="true"
                  placeholder="비밀번호 확인"
                />
              </div>
              <div className="signUpNcsry">
                <p>이름</p>
                <span>필수 사항</span>
              </div>
              <div>
                <Input scale="large" fullWidth="true" placeholder="이름" />
              </div>

              <div className="signUpOption">
                <p>이메일</p>
                <span>선택 사항</span>
              </div>
              <div>
                <Input scale="large" fullWidth="true" placeholder="이메일" />
              </div>
              <div className="signUpNcsry">
                <p>전화번호</p>
                <span>필수 사항</span>
              </div>
              <div className="signUpPhone">
                <select className="signUpSelect">
                  <option>010</option>
                  <option>011</option>
                  <option>016</option>
                  <option>017</option>
                </select>

                <Input
                  className="input signUpInput"
                  scale="large"
                  placeholder="전화번호"
                />
              </div>
              <div className="signUpPrivacy" onScroll={isScrollCheck}>
                <p>
                  <span>회원가입 개인정보 수집 및 이용 동의</span> <br />
                  1. 수집하는 개인정보 (1) 회사는 최초 회원 가입시 원활한
                  고객상담, 서비스 제공을 위해 아래와 같은 최소한의 개인정보를
                  필수항목으로 수집하고 있습니다. 필수항목 : 이메일 주소,
                  이름(닉네임), 비밀번호 선택항목 : 프로필 사진, 회사/단체 이름,
                  회사/단체 규모, 산업군, 부서, 유형(개인/기업/단체), 지역,
                  전화번호 등 (2) 소셜 계정을 통해 회원가입 시 아래와 같은
                  정보들이 추가로 수집될 수 있습니다. 네이버 : 프로필 사진, 나이
                  페이스북 : 프로필 사진 구글 : 프로필 사진 (3) 서비스 이용
                  과정이나 사업처리 과정에서 아래와 같은 정보들이 추가로 수집될
                  수 있습니다. 거래정보 : 개인의 경우 생년월일(정기결제에 한함),
                  신용카드정보(신용카드번호, 유효기간, 비밀번호 앞 두 자리),
                  세금계산서 발행을 위한 회계 담당자 정보(이름, 연락처,
                  이메일주소) 등 서비스 이용 정보 : 서명 요청자 및 참여자 정보
                  (이름, 이메일 주소, 전화번호), 전화번호, IP 주소, 쿠키, 방문
                  일시, 서비스 이용 기록, 불량 이용 기록, 브라우저 정보,
                  운영체제 정보(OS), 사용 기기 정보, MAC 주소, 방문 일시 등 2.
                  개인정보의 수집 및 이용목적 (1) 회원관리 회원제 서비스 제공 및
                  개선, 개인식별, 이용약관 위반 회원에 대한 이용제한 조치,
                  서비스의 원활한 운영에 지장을 미치는 행위 및 서비스 부정이용
                  행위 제재, 가입의사 확인, 가입 및 가입횟수 제한, 만14세 미만
                  아동의 개인정보 수집 시 법정 대리인 동의여부 확인, 추후 법정
                  대리인 본인확인, 분쟁 조정을 위한 기록보존, 불만처리 등
                  민원처리, 고지사항 전달, 회원탈퇴 의사의 확인 등 (2) 신규
                  서비스 개발 및 마케팅·광고에의 활용 신규 서비스 개발 및 맞춤
                  서비스 제공, 통계학적 특성에 따른 서비스 제공 및 광고 게재,
                  서비스의 유효성 확인, 자사 및 제휴 이벤트 정보 및 참여기회
                  제공, 광고성 정보 제공, 접속빈도 파악, 회원의 서비스이용에
                  대한 통계분석 등 (3) 서비스 제공에 관한 계약 이행 및
                  유료서비스 제공에 따른 요금정산 전자서명 서비스 제공, 콘텐츠
                  제공, 특정 맞춤 서비스 제공, 유료서비스 이용에 대한 과금, 구매
                  및 요금 결제, 본인인증, 물품배송 또는 청구서 등 발송, 요금
                  추심 등 (4) 법적 증거로 활용 법적 분쟁시 증거자료 제출 3.
                  개인정보의 보유 및 이용기간 이용자의 개인정보는 원칙적으로
                  개인정보의 수집 및 이용목적이 달성되면 지체 없이 파기합니다.
                  단, 상법, 전자상거래 등에서의 소비자보호에 관한 법률 등
                  관계법령의 규정에 의하여 보존할 필요가 있는 경우 회사는
                  관계법령에서 정한 일정한 기간 동안 회원 정보를 보관합니다. 이
                  경우 회사는 보관하는 정보를 그 보관의 목적으로만 이용하며
                  보존기간은 아래와 같습니다. (1) 계약 또는 청약철회 등에 관한
                  기록 보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률
                  보존 기간 : 5년 (2) 대금결제 및 재화 등의 공급에 관한 기록
                  보존 이유 : 전자상거래 등에서의 소비자보호에 관한 법률 보존
                  기간 : 5년 (3) 소비자의 불만 또는 분쟁처리에 관한 기록 보존
                  이유 : 전자상거래 등에서의 소비자보호에 관한 법률 보존 기간 :
                  3년 (4) 웹사이트 방문기록 보존 이유 : 통신비밀보호법 보존 기간
                  : 3개월
                </p>
              </div>

              <Input
                className="checkbox signUpCheckBox"
                type="checkbox"
                text="개인정보 수집 동의"
                disabled={!isScroll ? true : false}
              />
            </div>

            <div className="signUpBtnWrap">
              <Button
                className="btn signUpBtn"
                scale="large"
                shape="fill"
                fullWidth="true"
                color="primary"
              >
                회원가입
              </Button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
