export const MAIN_MENU = [
  {
    text: '제품',
    url: '/',
    child: true,
  },
  {
    text: 'TRBox',
    url: '/trbox',
    child: false,
  },
];

export const BEST_PRODUCT_MENU = [
  {
    text: '베스트',
    url: '/best/best?sort=1',
  },
  {
    text: '위클리 베스트',
    url: '/best/weeklyBest?sort=2',
  },
  {
    text: '선물하기 베스트',
    url: '/best/giftBest?sort=3',
  },
];

export const PRODUCT_MENU = [
  {
    text: '티세트',
    url: '/products?category=1',
  },
  {
    text: '명차',
    url: '/products?category=2',
  },
  {
    text: '녹차/말차',
    url: '/products?category=3',
  },
  {
    text: '발효차/홍차',
    url: '/products?category=4',
  },
  {
    text: '블렌디드티',
    url: '/products?category=5',
  },
  {
    text: '허브티',
    url: '/products?category=6',
  },
  {
    text: '밀크티/아이스티',
    url: '/products?category=7',
  },
  {
    text: '콤부차',
    url: '/products?category=8',
  },
];

export const PRODUCT_CATEGORY = [
  {
    text: '티 제품',
    value: 0,
    url: '/images/teaAll.jpg',
  },
  {
    text: '티 세트',
    value: 1,
    url: '/images/teaSet.jpg',
  },
  {
    text: '명차',
    value: 2,
    url: '/images/tea1.jpg',
  },
  {
    text: '녹차 / 말차',
    value: 3,
    url: '/images/tea2.jpg',
  },
  {
    text: '발효차 / 홍차',
    value: 4,
    url: '/images/tea3.jpg',
  },
  {
    text: '블렌디드티',
    value: 5,
    url: '/images/tea4.jpg',
  },
  {
    text: '허브티',
    value: 6,
    url: '/images/tea5.jpg',
  },
  {
    text: '밀크티/아이스티',
    value: 7,
    url: '/images/tea6.jpg',
  },
  {
    text: '콤부차',
    value: 8,
    url: '/images/tea7.jpg',
  },
];

export const PRODUCT_SORT = [
  {
    text: '추천순',
    value: 1,
  },
  {
    text: '판매순',
    value: 2,
  },
  {
    text: '신상품순',
    value: 3,
  },
  {
    text: '높은 가격순',
    value: 4,
  },
  {
    text: '낮은 가격순',
    value: 5,
  },
];

export const TR_BOX_DATA = [
  {
    id: 114,
    title: '매월 결제',
    name: '다다일상 기획_ 5종 17입(23.10)',
    img: '../../../images/trbox.png',
    cnt: 1,
    price: 24900,
    discountPrice: 0,
    totalPrice: 24900,
    isBagCheck: false,
    isWrapCheck: false,
    delivery: 0,
  },
  {
    id: 115,
    title: '3개월 일괄 결제',
    name: '다다일상 기획_ 5종 17입(23.10)',
    price: 68700,
    img: '../../../images/trbox.png',
    cnt: 1,
    discountPrice: 0,
    totalPrice: 68700,
    isBagCheck: false,
    isWrapCheck: false,
    delivery: 0,
  },
  {
    id: 116,
    title: '6개월 일월 결제',
    name: '다다일상 기획_ 5종 17입(23.10)',
    price: 119400,
    img: '../../../images/trbox.png',
    cnt: 1,
    discountPrice: 0,
    totalPrice: 119400,
    isBagCheck: false,
    isWrapCheck: false,
    delivery: 0,
  },
];
