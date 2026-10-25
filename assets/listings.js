// 숙소 6채와 사이트 정보. 사장님이 실제 값을 주면 여기만 고치면 된다.
// 값이 비어 있으면(null, '', []) 화면에는 "준비 중"으로 보이거나 그 칸이 숨겨진다.
// 숫자·후기는 지어내지 않는다.

window.SITE = {
  name: { ko: '서울의 작은 집 여섯 채', en: 'Six small homes in Seoul' },
  yearsOperating: null,   // 예: 3  → "운영 3년째"
  totalGuests: null,      // 예: 420 → "지금까지 420명이 머물렀어요"
  ratings: [],            // 예: [{ source: 'Airbnb', score: '4.9', count: 120, url: 'https://…' }]
  reviews: [],            // 예: [{ source: 'Airbnb', text: { ko: '원문', en: '원문' }, date: '2026-09' }]
};

const emptyHome = (n) => ({
  id: `home-${n}`,
  name: { ko: `숙소 ${n}`, en: `Home ${n}` },
  intro: { ko: '', en: '' },       // 한 줄 소개
  area: { ko: '', en: '' },        // 동네 예: { ko: '마포구 연남동', en: 'Yeonnam-dong, Mapo-gu' }
  station: { ko: '', en: '' },     // 가까운 역 예: { ko: '홍대입구역 도보 7분', en: '7 min walk to Hongik Univ. Stn' }
  priceWeek: null,                 // 1주 가격(원) 예: 350000
  longStay: null,                  // 장기 할인 예: { minWeeks: 4, discountPct: 5 } → 4주 가격을 계산해서 보여 준다
  deposit: null,                   // 보증금(원) 예: 300000
  availableFrom: '',               // 입주 가능일 예: '2026-11-15'
  guests: '1~2',                   // 머물 수 있는 인원
  facilities: [],                  // 예: [{ ko: '세탁기', en: 'Washer' }, { ko: '와이파이', en: 'Wi-Fi' }]
  photos: [],                      // 예: ['assets/img/home-1/1.jpg', …] 첫 장이 대표 사진
});

const f = (ko, en) => ({ ko, en });

const HOMES = {
  1: {
    name: f('합정역 8번 출구 도보 5분 풀옵션 원룸', 'Fully furnished studio, 5 min walk from Hapjeong Station Exit 8'),
    intro: f(
      '몸만 들어와도 바로 생활할 수 있도록 필요한 기본 옵션을 모두 갖췄어요. 혼자 지내기 좋은 아늑한 원룸이에요.',
      'Everything you need is already in place, so you can move in with just your bags. A cozy studio made for living on your own.'
    ),
    area: f('마포구 합정동', 'Hapjeong-dong, Mapo-gu'),
    station: f('합정역 8번 출구 도보 5분', '5 min walk from Hapjeong Stn Exit 8'),
    priceWeek: 290000,
    longStay: { minWeeks: 4, discountPct: 5 },
    deposit: 300000,
    availableFrom: '2027-01-03',
    guests: '1~2',
    facilities: [
      f('냉장고', 'Refrigerator'), f('세탁기', 'Washer'), f('인덕션', 'Induction cooktop'), f('와이파이', 'Wi-Fi'),
      f('에어컨', 'Air conditioner'), f('책상', 'Desk'), f('슈퍼싱글 침대', 'Super single bed'), f('전자레인지', 'Microwave'),
      f('전기포트', 'Electric kettle'), f('1인용 소파', 'Armchair'), f('옷장', 'Wardrobe'), f('신발장', 'Shoe cabinet'),
      f('공기청정기', 'Air purifier'),
    ],
    photos: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `assets/img/home-1/${i}.jpg`),
  },
};

window.LISTINGS = [1, 2, 3, 4, 5, 6].map((n) => ({ ...emptyHome(n), ...(HOMES[n] || {}) }));
