## TeaTime 프로젝트 Front-end/Back-end 소개

- 아모레 퍼시픽의 자회사 오설록을 클론 코딩하였습니다.
- 프로젝트 기간이 짧아 기획/디자인/간단한 기능 구현에 초점을 두었습니다.
- 개발은 초기 세팅부터 전부 직접 구현했으며, 아래 데모 영상에서 보이는 부분은 모두 백앤드와 연결하여 실제 사용할 수 있는 서비스 수준으로 개발한 것입니다.

### 개발 인원 및 기간

- 개발기간 : 2023/9/18 ~ 2023/10/06
- 개발인원 :
  > Product Manager: 이재훈(B)
  > Project Manager: 권기완(F)
  > Teammates: 박요진(F) / 류제영(B), 남수한(B), 김정진(B)
- [백엔드 github 링크](https://github.com/wecode-bootcamp-korea/49-2nd-TeaTime-backend)

### 프로젝트 선정이유

- 이 사이트는 '차'에 대한 제품을 파는 사이트로써, 요즘 여러 제품들을 묶어 선택해 파는 곳과는 달리 차와 관련된 제품에만 초점을 둔 사이트 입니다.
  시디즈의 의자와 같이 한번 구매하면 다시 살 때까지의 소비 패턴이 년 단위로 넘어가는 것이 아닌 진정으로 차를 좋아하는 사람들을 위해 '정기 구독' 서비스와 '랜덤 배송' 이라는 획기적인 아이디어로 소비 심리를 자극하는 것이 마음에 들어 이번 프로젝트로 선정하게 되었습니다.

### 데모 영상(이미지 클릭)

_유투브 영상 링크나 캡쳐 이미지 넣어주세요._

<br>

## 적용 기술 및 구현 기능

1.  Nav Bar Hover시 표시되는 기능
2.  React Component 중 하나인 이벤트 스와이퍼 기능
3.  쿼리 스트링을 이용한 제품 정렬하여 보여주기 기능
4.  제품 Hover 시 Main Img <-> Sub Img 보여주기 기능
5.  상세페이지 좋아요 기능, 옵션 추가 선택 기능, 리뷰 기능
6.  장바구니 기능(생성, 추가, 삭제), 선택 구매, 전체 구매
7.  쿼리스트링을 이용한 상세페이지 -> 결제하기 페이지 onClick 시 제품 정보 넘기기 기능
8.  `주문 정보와 동일` 버튼 onClick 시 데이터 불러오기 기능
9.  다음 카카오 우편번호 API 기능
10. 결제페이지에서 구매버튼 누를 시 포인트 결제

### 적용 기술

> - Front-End : React.js, sass, slick, react-modal
> - Back-End : Django web framework, Beautifulsoup, Selenium, Bcrypt, My SQL
> - Common : AWS(EC2,RDS), RESTful API

### 구현 기능

#### 공통

- 일반 회원가입 / 로그인은 유효성 검사하여 글자, 숫자, 특수문자 제한

#### 메인페이지

- React에서 지원하는 이벤트 스와이퍼 라이브러리를 이용하여 Auto Slide Image 기능 구현
- 쿼리스트링을 사용하여 이번 주 베스트 상품 5개 노출
- TR BOX 더보기 버튼 onClick 시 해당 페이지로 페이지 이동

#### BEST 상품페이지

- Chip Component를 사용하여 OnClick Event가 발생할 때마다 쿼리스트링을 이용하여 보여주는 이미지가 달라지도록 기능 구현
- 이미지 Mouse hover 시 Main Image <-> Sub Image 노출되도록 기능 구현, 장바구니 Icon Button 도 함께 hidden / none 되도록 구현
- Link 를 이용하여 Image 또는 Text 클릭 시 해당 제품의 상세페이지로 이동하도록 구현

#### 제품페이지

- Header의 Nav Bar 나 Side Nav 클릭 시 해당 상품의 목록 보여주는 기능 구현
- 페이지네이션 기능 구현
- 해당 상품의 Image 또는 Text 클릭 시 제품의 상세 페이지로 이동하는 기능 구현
- 제품의 좋아요 기능 구현, 클릭 시 해당 제품에 대한 좋아요 수를 +1 시키고 아이콘 색 변경

#### 제품 상세페이지

- 제품 상세 정보 가져오기 기능 구현(제품의 정보, 할인율, Image, 리뷰 평점, 좋아요 유무를 API로 데이터를 받아와서 상세 정보 UI 노출)
- 좋아요 버튼 기능 구현 : 좋아요 유무를 표시하고 제품 아이디에 맞는 제품의 좋아요 수를 +1 시키고 아이콘 색 변경 기능 구현
- 리뷰 리스트 가져오기 기능 구현 : 쿼리스트링을 이용하여 리뷰 리스트 10개씩 가져오도록 기능 구현

#### 마이페이지

- 사용자 토큰에 저장되어 있는 회원 정보를 불러와 UI에 노출 시키는 기능 구현
- 배송지 추가 시 모달창이 뜨며 정보 입력 후 `우편번호 찾기` 버튼을 onClick 하면 우편번호 검색하여 가져올 수 있는 기능 구현
- 이후 데이터가 추가 되면 배송지 정보에 해당 정보들이 UI에 보이도록 기능 구현

#### 장바구니

- 장바구니의 개수를 가져오는 기능 구현
- 해당 회원이 제품의 상세옵션 중 선택한 옵션을 목록에 추가하는 기능 구현
- 회원이 담은 장바구니의 제품 가격의 총액과 할인 될 값, 옵션선택에 대한 추가 비용을 계산한 결제 예상 금액을 계산하는 기능 구현
- 해당 회원이 선택한 특정 제품만 계산하는 기능 구현
- 선택한 제품만 삭제할 수 있도록 기능 구현

#### 결제페이지

- 유저의 아이디에 따라 회원정보를 받아와 표시하는 기능 구현
- 주문 고객 정보를 직접 입력하거나 `주문 고객과 동일` 버튼을 onClick 시 회원이 입력한 정보 끌어오기 기능 구현
- 바로구매 버튼에서 가져온 제품에 대한 데이터를 BackEnd에 데이터를 요청해 UI로 노출되는 기능 구현
- 상품의 총 금액이 5만원 이하인 경우 배송비가 2,500원, 이상인 경우 0원으로 계산되도록 구현
- 제품에 대한 갯수 및 할인 금액, 배송비를 모두 계산한 금액으로 UI 노출 및 결제할 수 있는 기능 구현

<br>

_아래 Reference 부분은 README.md에 꼭 포함되어야 하는 내용입니다_

## Reference

- 이 프로젝트는 [오설록](http://https://www.osulloc.com/kr/ko) 사이트를 참조하여 학습목적으로 만들었습니다.
- 실무수준의 프로젝트이지만 학습용으로 만들었기 때문에 이 코드를 활용하여 이득을 취하거나 무단 배포할 경우 법적으로 문제될 수 있습니다.
- 이 프로젝트에서 사용하고 있는 사진 대부분은 위코드에서 구매한 것이므로 해당 프로젝트 외부인이 사용할 수 없습니다.

> 이 자료는 프로젝트의 원활한 진행을 위해 제작된 것입니다.

# Folder Tree

```
// 폴더 트리 구조는 아래를 참고합니다.

📦 project
├─ node_modules
├─ public
│  ├─ data
│  ├─ images
│  ├─ favicon.ico
│  └─ index.html
├─ src
│  ├─ components
│  │  └─ Button
│  │     ├─ Button.js
│  │     └─ Button.scss
│  ├─ pages
│  │  └─ Login
│  │     ├─ Login.js
│  │     └─ Login.scss
│  ├─ styles
│  ├─ index.js
│  └─ Router.js
├─ .exlintrc
├─ .gitignore
├─ .prettierrc
├─ package-lock.json
└─ package.json
```

# Naming & Rules

## CSS / Scss

```scss
// CSS 또는 Scss 클래스 네이밍은 기본적으로 camelCase를 따릅니다.
.postList {
	...
}

// 선택자와 동일한 결로 네이밍을 정합니다.
ul.postList {}        // good
li.postList {}        // bad
li.postListItem {}   // good
```

## React

```jsx
// import 순서는 아래와 같이 정렬합니다.
import React from 'react';                 // 1. React + hook
import Button from 'url';                  // 2. Components
import './Button.scss'                     // 3. Scss

// 변수와 함수의 이름은 camelCase를 따릅니다.
const userInfo;
const submitComment = () => {
	...
}

// 상수는 SNAKE_CASE를 따릅니다.
const USER_DATA;

// 변수와 조합해 문자열을 생성하는 경우에는 템플릿 리터럴을 사용합니다.
const message = `hello, ${name}!`;         // good
const message = 'hello' + name + "!";      // bad
```

## Files

```
// 파일명은 camelCase를 따릅니다.
postList.js                                // good
postlist.js                                // bad
```

## Branch

```
// 브랜치 이름은 기능 및 컴포넌트별로 명명합니다.
feature/submit
component/button

// 긴급한 오류를 수정하기 위해 아래와 같은 브랜치를 생성할 수도 있습니다.
hotfix
```

# PR & commit

```
// PR은 하나의 기능 개발 완료 시 진행합니다. 여러 commit이 쌓여서 하나의 PR이 완성됩니다. 즉 commit은 PR에 대한 상세 개발 내역입니다.
- PR: 로그인 화면 개발
commit: 인풋 컴포넌트 개발 / 버튼 컴포넌트 개발 / 유효성 검사 기능 추가 등

// commit 메시지는 아래와 같이 나눠 작성합니다.
[feat] 제목          // 기능 추가
[fix] 제목           // 버그 수정
[refact] 제목        // 리팩토링
[style] 제목         // UI 수정
[etc] 제목           // 기타 수정 사항
```
