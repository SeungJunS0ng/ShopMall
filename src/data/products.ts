import type { Product } from '../types';

export const PRODUCTS: Product[] = [
  // 전자기기
  {
    id: 1,
    name: '무선 이어폰 Pro',
    price: 159000,
    category: '전자기기',
    image:
      'https://1801889e95b1f9bf.kinxzone.com/webfile/product/14/14397/2m6sj66s13i6.jpg',
    description: '노이즈 캔슬링 기능의 프리미엄 무선 이어폰입니다.',
    stock: 50,
    rating: 4.5,
    reviewCount: 128,
    isBest: true,
    options: [{ name: '색상', values: ['화이트', '블랙', '실버'] }],
  },
  {
    id: 2,
    name: '스마트워치 Ultra',
    price: 489000,
    category: '전자기기',
    image:
      'https://i.namu.wiki/i/vmlPY8EaArnN7HJARhqgH6-LHkNLpmml_Nm0SsWjL4Rx8rhc6USYymNAR8vH9hbnk5w8pb-qfaezbSFCgOGe6g.webp',
    description: '건강 관리와 운동 추적을 위한 스마트워치입니다.',
    stock: 30,
    rating: 4.8,
    reviewCount: 256,
    isBest: true,
    options: [{ name: '색상', values: ['티타늄', '골드', '실버'] }],
  },
  {
    id: 3,
    name: '노트북 15인치',
    price: 1290000,
    category: '전자기기',
    image:
      'https://i.namu.wiki/i/8X13imijycrt64xW2_eC1TsThrdHEPK6cm0ntLRRosIySVPSZTz9IMP3GJZnrs_KbEhXI668bQdRBGAJR06i0A.webp',
    description: '고성능 프로세서와 긴 배터리 수명을 자랑합니다.',
    stock: 20,
    rating: 4.6,
    reviewCount: 89,
    isNew: true,
  },

  // 패션
  {
    id: 4,
    name: '맨투맨 티셔츠',
    price: 39000,
    category: '패션',
    image:
      'https://i.namu.wiki/i/_G7nFfr6p9pVy0kt-t3TU5xxaUujQjieaRPbV-YAvSIZqH8qA2dX2vQUcqeHnmMtO9ad9JciKG84RJDWNj4dBg.webp',
    description: '편안한 착용감의 기본 맨투맨입니다.',
    stock: 100,
    rating: 4.2,
    reviewCount: 156,
    isBest: true,
    options: [
      { name: '색상', values: ['블랙', '화이트', '그레이', '네이비'] },
      { name: '사이즈', values: ['S', 'M', 'L', 'XL'] },
    ],
  },
  {
    id: 5,
    name: '청바지',
    price: 79000,
    category: '패션',
    image:
      'https://i.namu.wiki/i/pYqgPrChWkS2WTdZO0E8zsNIJCV_RMv2D2nUm_T_8IF2gd9svkwvZbvuud1piJOvIbwNqw5gNmewJW-LStGVYQ.webp',
    description: '슬림핏 데님 팬츠입니다.',
    stock: 80,
    rating: 4.4,
    reviewCount: 203,
    options: [
      { name: '색상', values: ['인디고', '블랙'] },
      { name: '사이즈', values: ['28', '29', '30', '31', '32'] },
    ],
  },
  {
    id: 6,
    name: '후드 집업',
    price: 59000,
    category: '패션',
    image:
      'https://i.namu.wiki/i/WdY4-OiG4E_z3NW9Y71hv-vUAW7esAmgM6WKB2N8NQ-Wvt0ix1oMRs1yt0pL_kMiu6Ai2jhSEa_tAnwxHrypIg.webp',
    description: '따뜻한 기모 안감의 후드 집업입니다.',
    stock: 60,
    rating: 4.7,
    reviewCount: 89,
    isNew: true,
    options: [
      { name: '색상', values: ['블랙', '그레이', '베이지'] },
      { name: '사이즈', values: ['M', 'L', 'XL'] },
    ],
  },

  // 식품
  {
    id: 7,
    name: '프리미엄 원두커피',
    price: 24900,
    category: '식품',
    image:
      'https://i.namu.wiki/i/6K-GeuqvIx8u4jyGQqiCHC85h7-h3q-bzXvaGEfvcedTcceXnezG_K-L9epg1OBplQoNDZIgGE1t8s7ci814Aw.webp',
    description: '신선하게 로스팅한 스페셜티 커피입니다.',
    stock: 150,
    rating: 4.9,
    reviewCount: 432,
    isBest: true,
  },
  {
    id: 8,
    name: '유기농 꿀',
    price: 18000,
    category: '식품',
    image:
      'https://i.namu.wiki/i/nOhtuQHMpMI6dawxKAt3WdbKnMRNfMgyKH8yo71Vd_wt2IIhaiKpXqAr_xLAnm0QWNqSTyZ3Xp47y9GjR3zBnw.webp',
    description: '국내산 100% 천연 벌꿀입니다.',
    stock: 200,
    rating: 4.6,
    reviewCount: 178,
  },

  // 도서
  {
    id: 9,
    name: '클린 코드',
    price: 32000,
    category: '도서',
    image:
      'https://contents.kyobobook.co.kr/sih/fit-in/458x0/pdt/9788964200377.jpg',
    description: '프로그래밍의 바이블, 클린 코드입니다.',
    stock: 100,
    rating: 4.8,
    reviewCount: 567,
    isBest: true,
  },
  {
    id: 10,
    name: '리팩터링',
    price: 36000,
    category: '도서',
    image: 'https://image.yes24.com/goods/89649360/XL',
    description: '코드 개선의 정석을 다루는 책입니다.',
    stock: 80,
    rating: 4.7,
    reviewCount: 234,
  },

  // 생활용품
  {
    id: 11,
    name: '무선 청소기',
    price: 349000,
    category: '생활용품',
    image:
      'https://i.namu.wiki/i/y1_hDxd26nQ4wrjbtVpLwBkJ_vE1zmXaQcacdOYfvRrsRRzVUdyRtvJJ-z8YSYW8fzjxGdfxOmXpzLG3B9AX9g.webp',
    description: '강력한 흡입력의 무선 청소기입니다.',
    stock: 40,
    rating: 4.5,
    reviewCount: 189,
    isNew: true,
  },
  {
    id: 12,
    name: '가습기',
    price: 89000,
    category: '생활용품',
    image:
      'https://i.namu.wiki/i/DJHSPCNUdqNIIjSQa35y-vu4M3hDaJy_jugLHVofgjW34ixF6lci8Z-EE7Pt9B-5UB1i6poQTTV9k71LUsHTTg.webp',
    description: '쾌적한 실내 습도 유지를 위한 가습기입니다.',
    stock: 70,
    rating: 4.3,
    reviewCount: 145,
  },
];