// 숙소와 사이트 정보. 사장님이 실제 값을 주면 여기만 고치면 된다.
// 값이 비어 있으면(null, '', []) 화면에는 "준비 중"으로 보이거나 그 칸이 숨겨진다.
// 숫자·후기는 지어내지 않는다.

window.SITE = {
  name: { ko: '서울에 잠시 머무는 집', en: 'A Place to Stay in Seoul' },
};
// 평점과 후기는 집마다 넣는다 (아래 ratings, reviews). 후기는 원문 그대로, 손님 이름은 넣지 않는다.

const emptyHome = (n) => ({
  id: `home-${n}`,
  name: { ko: `숙소 ${n}`, en: `Home ${n}` },
  highlight: null,                 // 카드 사진 위에 띄울 자랑거리 예: { ko: '한강공원 도보 3분', en: '3 min walk to Hangang Park' }
  intro: { ko: '', en: '' },       // 한 줄 소개
  area: { ko: '', en: '' },        // 동네 예: { ko: '마포구 연남동', en: 'Yeonnam-dong, Mapo-gu' }
  station: { ko: '', en: '' },     // 가까운 역 예: { ko: '홍대입구역 도보 7분', en: '7 min walk to Hongik Univ. Stn' }
  priceWeek: null,                 // 1주 가격(원) 예: 350000
  longStay: null,                  // 장기 할인 예: { minWeeks: 4, discountPct: 5 } → 4주 가격을 계산해서 보여 준다
  deposit: null,                   // 보증금(원) 예: 300000
  availableFrom: '',               // 입주 가능일 예: '2026-11-15' (이날부터 쭉 가능)
  availability: null,              // 가능 기간이 여러 개일 때. availableFrom 대신 쓴다.
                                   // 예: [{ from: '2026-11-24', to: '2026-12-23' }, { from: '2027-01-05' }]
                                   // to는 머물 수 있는 마지막 밤(그다음 날 아침 퇴실). to가 없으면 그날부터 쭉 가능
                                   // 첫 화면 달력에서 고른 날짜가 이 기간 안에 들어가는 집만 "예약 가능"으로 보인다
  guests: '1~2',                   // 머물 수 있는 인원. 글로 적으려면 { ko: '인원 제한 없음', en: 'No guest limit' }
  facilities: [],                  // 예: [{ ko: '세탁기', en: 'Washer' }, { ko: '와이파이', en: 'Wi-Fi' }]
  photos: [],                      // 예: ['assets/img/home-1/1.jpg', …] 첫 장이 대표 사진
  ratings: [],                     // 플랫폼 평점 예: [{ source: '삼삼엠투', score: '4.9', count: 38, url: 'https://…' }]
  reviews: [],                     // 후기 원문 예: [{ source: '삼삼엠투', date: '2026-09', text: { ko: '원문', en: '번역' } }] (영어 원문이면 orig: 'en')
});

const f = (ko, en) => ({ ko, en });

const HOMES = {
  1: {
    name: f('소파 있는 아늑한 원룸', 'Cozy studio with an armchair'),
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
    // 평점·후기 개수는 플랫폼에 보이는 그대로 (별 3개 후기 1개도 포함된 숫자). 후기 글은 별 3개 하나만 빼고 원문 그대로.
    ratings: [
      { source: '삼삼엠투', score: '4.8', count: 8 },
      { source: '엔코스테이', score: '5.0', count: 1 },
    ],
    reviews: [
      { source: '삼삼엠투', date: '2026-08', text: f('위치도 좋고 호스트님도 친절하십니다. 잘 있다 갑니다.', 'Great location and a kind host. Thanks for a good stay.') },
      { source: '삼삼엠투', date: '2026-05', text: f(
        '호스트가 친절하고 빠르게 응답하십니다. 주변이 조용하면서 편의시설이 잘 되어있습니다. 대중교통 이용도 편리한 편이라서 좋았습니다. 방이 깨끗하고 좋습니다. 침대가 하드한데 잠자기 편안합니다. 공간이 혼자 지내기 괜찮습니다. 주방용품이나 걸레 청소 도구가 하나도 없는 것이 살짝 아쉽지만 괜찮습니다. 다시 이용 하고픈 곳입니다.',
        'The host is kind and replies quickly. The area is quiet with plenty of amenities nearby, and public transport is convenient. The room is clean and nice. The bed is firm but comfortable to sleep on. The space works well for one person. It was a little disappointing that there were no kitchen utensils or mop and cleaning tools, but it was fine. A place I would like to stay again.'
      ) },
      { source: '삼삼엠투', date: '2026-03', text: f('깨끗하고 따듯해요 호스트분이 너무 친절하세요^^', 'Clean and warm, and the host is very kind ^^') },
      { source: '삼삼엠투', date: '2026-03', text: f('친철하세요', 'Kind host.') },
      { source: '엔코스테이', date: '2025-08', text: f(
        '한국으로 이사 오기 이틀 전에 이 숙소를 찾았어요. 제 모든 필요를 충족시켜주는 정말 멋진 곳이었죠. 깨끗했고 필요한 모든 곳과 가까웠어요. 동네도 마음에 들었고 조용한 분위기도 좋았어요.',
        'I found this place two days before moving to Korea. It was a wonderful place that met all my needs. It was clean and close to everything I needed. I liked the neighborhood and the quiet atmosphere too.'
      ) },
      { source: '삼삼엠투', date: '2025-05', text: f(
        '지리적으로 위치가 아주 좋습니다.\n홍대와 망원은 비싸지만 오래된 집이 많고,\n합정은 가격이 훨씬 비쌉니다.\n이곳은 합정과 망원의 중간으로, 가격도 나쁘지않고 집들도 그리 낡지않았습니다. 위험한 곳도 아니고, 아주 조용합니다.\n숙소의 퀄리티는 신축은 아니지만 매우 깔끔합니다.\n난방도 잘 되고, 온수도 잘 나오고, 에어컨도 잘 작동합니다.\n내년에 방문시 여전히 가격이 비슷하다면, 또 머물고 싶습니다.\n\n아쉬운 점\n- 화장실 제외하고 거울이 하나 있었으면 좋겠습니다.',
        'The location is excellent.\nHongdae and Mangwon are pricey and have many old buildings,\nand Hapjeong is much more expensive.\nThis place sits between Hapjeong and Mangwon, the price is reasonable and the building is not old. It is not a risky area, and it is very quiet.\nIt is not a new build, but it is very clean.\nThe heating works well, there is plenty of hot water, and the air conditioner works well.\nIf the price is similar when I visit next year, I would like to stay again.\n\nOne thing to improve\n- It would be nice to have a mirror outside the bathroom.'
      ) },
      { source: '삼삼엠투', date: '2025-05', text: f('깨끗하고 위치도 좋아서 편하게 지내다 가요! 합정동에 자주 오는데 다음에 또 이용할게요!', 'Clean and well located, I had a comfortable stay! I come to Hapjeong often and will stay here again next time!') },
      { source: '삼삼엠투', date: '2025-05', text: f('편히 쉬었습니다', 'I had a restful stay.') },
    ],
  },
  2: {
    name: f('망원한강공원 원룸', 'Mangwon Hangang Park studio'),
    highlight: f('한강공원 도보 3분', '3 min walk to Hangang Park'),
    intro: f(
      '한강공원까지 걸어서 3분, 언제든 강변을 산책할 수 있어요. 필요한 기본 옵션이 모두 있어 몸만 들어와 바로 생활할 수 있는 원룸이에요.',
      'Hangang Park is a 3-minute walk away, so the riverside is always close by. All the basics are already here, so you can move in with just your bags.'
    ),
    area: f('마포구 망원동', 'Mangwon-dong, Mapo-gu'),
    station: f('한강공원 도보 3분, 버스정류장 도보 1분, 망원역 도보 12분', '3 min walk to Hangang Park, 1 min to the bus stop, 12 min to Mangwon Stn'),
    priceWeek: 260000,
    longStay: { minWeeks: 4, discountPct: 5 },
    deposit: 300000,
    availableFrom: '2027-03-01',
    guests: '1~2',
    facilities: [
      f('냉장고', 'Refrigerator'), f('세탁기', 'Washer'), f('인덕션', 'Induction cooktop'), f('와이파이', 'Wi-Fi'),
      f('에어컨', 'Air conditioner'), f('아일랜드 식탁', 'Kitchen island table'), f('슈퍼싱글 수납 침대 (캐리어가 들어가는 깊은 수납)', 'Super single bed with deep storage (fits a suitcase)'),
      f('전자레인지', 'Microwave'), f('전기포트', 'Electric kettle'), f('행거', 'Clothes rack'), f('신발장', 'Shoe cabinet'),
    ],
    photos: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => `assets/img/home-2/${i}.jpg`),
    ratings: [{ source: '삼삼엠투', score: '4.9', count: 18 }],
    reviews: [
      { source: '삼삼엠투', date: '2026-09', text: f('호스트님도 친절하시고, 머무르게 되어서 행복했던 공간입니다', 'The host was kind, and it was a place I was happy to stay in.') },
      { source: '삼삼엠투', date: '2026-08', orig: 'en', text: f('위치가 정말 좋아요. 망원시장과 한강까지 걸어서 금방이에요.', 'Incredible location. Short walking distance to Mangwon Market and to the Hangang River.') },
      { source: '삼삼엠투', date: '2026-07', text: f('지난 계약기간동안 덕분에 잘 머물고 갑니다 항상 번창하세요:)', 'Thanks to you, I had a good stay for the whole contract period. Wishing you continued success :)') },
      { source: '삼삼엠투', date: '2026-05', text: f('편히 쉬었어요', 'I had a restful stay.') },
      { source: '삼삼엠투', date: '2026-04', text: f('한달동안 잘 지내고 갑니다~ 호스트님 너무 친절하시고 빠른 대응 고맙습니다~', 'I had a great month here~ The host was very kind, thank you for the quick responses~') },
      { source: '삼삼엠투', date: '2026-02', text: f('집도 깔끔하고. 궁금한거 물어보면 바로바로 연락주셔서 도움주셨습니다. 잘지냈습니다!', 'The place was neat, and whenever I asked something the host got back to me right away and helped. I had a good stay!') },
      { source: '삼삼엠투', date: '2026-01', text: f('편안히 잘 지내다 갑니다!!!!', 'I had a comfortable stay!!!!') },
      { source: '삼삼엠투', date: '2026-01', text: f('잘 사용하고 갑니다', 'Thanks, everything was fine.') },
      { source: '삼삼엠투', date: '2025-12', text: f('정말 편안하게 잘 사용했습니다!!!\n방도 너무너무 깨끗하고 넘 안락하게 사용했네용!!!\n다음번에 망원동 계획이 있으면 다시 신청하겠습니다!!', 'I stayed really comfortably!!!\nThe room was so, so clean and very cozy!!!\nIf I plan to come to Mangwon-dong again, I will book again!!') },
      { source: '삼삼엠투', date: '2025-12', text: f('잘지내다갑니다 감사합니다', 'I had a good stay, thank you.') },
      { source: '삼삼엠투', date: '2025-11', text: f('잘 먹고 갑니다', 'Thanks for everything.') },
      { source: '삼삼엠투', date: '2025-11', text: f('잘 머물다 갑니다.', 'I had a good stay.') },
      { source: '삼삼엠투', date: '2025-04', text: f('잘지내다가 갑니다 퇴실 완료하였고 비번도 그대로입니다', 'I had a good stay. I have checked out and the door code is unchanged.') },
      { source: '삼삼엠투', date: '2025-03', text: f('잘 썼습니다!', 'Everything was great!') },
      { source: '삼삼엠투', date: '2025-03', text: f('호스트분이 친절하세요. 이웃분들 괜찮으시지만 방에 방음이 안 되서 그 부분은 불편했습니다.', 'The host is kind. The neighbors are fine, but the room is not soundproofed, which was uncomfortable.') },
      { source: '삼삼엠투', date: '2025-01', text: f('숙소가 조용하고 깨끗하고 주위 인프라도 좋고 무엇보다 건물주님 피드백이 빠르고 좋으셨어서 감사히 잘 지냈습니다. 다음에 또 오고싶은 숙소입니다. 혼자 여행하시는분들께 추천해 드리고 싶어요', 'The place was quiet and clean, the area has everything you need, and above all the owner replied quickly and kindly, so I had a great stay. I would love to come back. I would recommend it to solo travelers.') },
      { source: '삼삼엠투', date: '2025-01', text: f('아주 깔끔하고 있을 건 다 있는 집이었습니다. 다만 드라이기가 없어서 머리 말리는 게 조금 어려웠습니다. 그리고 계단 바로 옆이라 사람들 지나가는 소리가 크게 들립니다. 그거 외에는 이 가격에 위치도 그렇고 집 상태도 그렇고 정말 훌륭했습니다!', 'A very clean home with everything you need. There was no hair dryer, so drying my hair was a bit hard. It is right next to the stairs, so you can clearly hear people passing by. Other than that, for this price, the location and the condition of the home were really excellent!') },
      { source: '삼삼엠투', date: '2024-10', text: f('감사합니다! 깨끗하고 잘 썼습니다', 'Thank you! It was clean and I had a good stay.') },
    ],
  },
  3: {
    name: f('망리단길 풀옵션 원룸', 'Furnished studio on Mangridan-gil'),
    intro: f(
      '필요한 기본 옵션을 모두 갖춰 몸만 들어와 바로 지낼 수 있어요. 혼자 머물기 좋은 아늑한 원룸이에요.',
      'Fully equipped with the essentials, so you can settle in with just your bags. A cozy studio for staying on your own.'
    ),
    area: f('마포구 망원동', 'Mangwon-dong, Mapo-gu'),
    station: f('망원역 도보 7분', '7 min walk to Mangwon Stn'),
    priceWeek: 270000,
    longStay: { minWeeks: 4, discountPct: 5 },
    deposit: 300000,
    availableFrom: '2026-11-16',
    guests: '1~2',
    facilities: [
      f('냉장고', 'Refrigerator'), f('세탁기', 'Washer'), f('가스레인지', 'Gas stove'), f('와이파이', 'Wi-Fi'),
      f('에어컨', 'Air conditioner'), f('간이 테이블과 의자', 'Folding table and chair'), f('슈퍼싱글 수납 침대 (캐리어가 들어가는 깊은 수납)', 'Super single bed with deep storage (fits a suitcase)'),
      f('전자레인지', 'Microwave'), f('전기포트', 'Electric kettle'), f('행거', 'Clothes rack'), f('신발장', 'Shoe cabinet'),
    ],
    photos: [1, 2, 3, 4, 5, 6, 7].map((i) => `assets/img/home-3/${i}.jpg`),
  },
  4: {
    name: f('합정역 도보 7분 풀옵션 원룸', 'Furnished studio, 7 min walk to Hapjeong Stn'),
    intro: f(
      '침대와 책상, 주방 가전까지 갖춰져 있어 몸만 들어와 바로 생활할 수 있어요. 혼자 지내기 편안한 원룸이에요.',
      'A bed, a desk and kitchen appliances are all in place, so you can start living here with just your bags. A comfortable studio for one.'
    ),
    area: f('마포구 합정동', 'Hapjeong-dong, Mapo-gu'),
    station: f('합정역 도보 7분', '7 min walk to Hapjeong Stn'),
    priceWeek: 270000,
    longStay: { minWeeks: 4, discountPct: 5 },
    deposit: 300000,
    availability: [{ from: '2026-11-24', to: '2026-12-23' }, { from: '2027-01-05' }],
    guests: '1~2',
    facilities: [
      f('냉장고', 'Refrigerator'), f('세탁기', 'Washer'), f('가스레인지', 'Gas stove'), f('와이파이', 'Wi-Fi'),
      f('에어컨', 'Air conditioner'), f('테이블과 의자', 'Table and chair'), f('슈퍼싱글 서랍 침대', 'Super single bed with drawers'),
      f('전자레인지', 'Microwave'), f('전기포트', 'Electric kettle'), f('행거', 'Clothes rack'), f('신발장', 'Shoe cabinet'),
    ],
    photos: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => `assets/img/home-4/${i}.jpg`),
  },
  5: {
    name: f('염창역 도보 5분 풀옵션 투룸', 'Furnished two-room home, 5 min walk to Yeomchang Stn'),
    highlight: f('가족 단위 환영', 'Families welcome'),
    intro: f(
      '필요한 기본 옵션을 모두 갖춰 몸만 들어와 바로 생활할 수 있어요. 방이 두 개라 3~4인 가족도 넉넉하게 지낼 수 있어, 혼자부터 가족 단위까지 편안하게 머물 수 있는 집이에요.',
      'Everything you need is already in place, so you can move in with just your bags. With two rooms there is plenty of space for a family of three or four, so it suits anyone from solo guests to families.'
    ),
    area: f('양천구 목동', 'Mok-dong, Yangcheon-gu'),
    station: f('염창역 도보 5분', '5 min walk to Yeomchang Stn'),
    priceWeek: 295000,
    longStay: { minWeeks: 4, discountPct: 5 },
    deposit: 300000,
    availableFrom: '2027-04-20',
    guests: f('인원 제한 없음', 'No guest limit'),
    facilities: [
      f('냉장고', 'Refrigerator'), f('세탁기', 'Washer'), f('건조기', 'Dryer'), f('가스레인지', 'Gas stove'),
      f('스탠딩 에어컨', 'Standing air conditioner'), f('4인용 대리석 식탁과 의자', 'Marble dining table and chairs for 4'),
      f('책상과 의자', 'Desk and chair'), f('퀸 침대', 'Queen bed'), f('4인용 소파', '4-seat sofa'),
      f('전자레인지', 'Microwave'), f('전기포트', 'Electric kettle'),
      f('작은 방 전체를 두른 시스템 옷장', 'System closet lining the whole small room'), f('신발장', 'Shoe cabinet'),
    ],
    photos: [1, 2, 3, 4, 5, 6].map((i) => `assets/img/home-5/${i}.jpg`),
  },
  6: {
    name: f('합정역 도보 8분 풀옵션 원룸', 'Furnished studio, 8 min walk to Hapjeong Stn'),
    intro: f(
      '살림에 필요한 기본 옵션이 다 있어 몸만 들어와 바로 생활할 수 있어요. 혼자 살기 딱 좋은 아늑한 원룸이에요.',
      'All the basics for daily life are here, so you can move in with just your bags. A cozy studio just right for living on your own.'
    ),
    area: f('마포구 합정동', 'Hapjeong-dong, Mapo-gu'),
    station: f('합정역 도보 8분', '8 min walk to Hapjeong Stn'),
    priceWeek: 260000,
    longStay: { minWeeks: 4, discountPct: 5 },
    deposit: 300000,
    availableFrom: '2026-11-12',
    guests: '1~2',
    facilities: [
      f('냉장고', 'Refrigerator'), f('세탁기', 'Washer'), f('가스레인지', 'Gas stove'), f('와이파이', 'Wi-Fi'),
      f('에어컨', 'Air conditioner'), f('책상과 의자', 'Desk and chair'), f('슈퍼싱글 침대', 'Super single bed'),
      f('전자레인지', 'Microwave'), f('전기포트', 'Electric kettle'), f('옷장', 'Wardrobe'), f('신발장', 'Shoe cabinet'),
    ],
    photos: [1, 2, 3, 4, 5, 6, 7, 8].map((i) => `assets/img/home-6/${i}.jpg`),
  },
};

window.LISTINGS = [1, 2, 3, 4, 5, 6].map((n) => ({ ...emptyHome(n), ...(HOMES[n] || {}) }));
