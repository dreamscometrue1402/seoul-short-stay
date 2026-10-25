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
  area: { ko: '', en: '' },        // 동네 예: { ko: '마포구 연남동', en: 'Yeonnam-dong, Mapo' }
  station: { ko: '', en: '' },     // 가까운 역 예: { ko: '홍대입구역 도보 7분', en: '7 min walk to Hongik Univ. Stn' }
  priceWeek: null,                 // 1주 가격(원) 예: 350000
  priceMonth: null,                // 1달 가격(원) 예: 1100000
  availableFrom: '',               // 입주 가능일 예: '2026-11-15'
  guests: '1~2',                   // 머물 수 있는 인원
  facilities: [],                  // 예: [{ ko: '세탁기', en: 'Washer' }, { ko: '와이파이', en: 'Wi-Fi' }]
  photos: [],                      // 예: ['assets/photos/home-1-1.jpg', …] 첫 장이 대표 사진
});

window.LISTINGS = [1, 2, 3, 4, 5, 6].map(emptyHome);
