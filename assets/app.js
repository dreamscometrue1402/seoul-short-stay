(() => {
  const T = {
    ko: {
      skip: '숙소 목록으로 건너뛰기',
      heroTitle: '서울에서, 혼자만의 조용한 집 한 채.',
      heroSub: '1주부터 몇 달까지, 혼자 지내기 좋은 원룸부터 가족이 함께 머물 투룸까지. 사진·위치·가격·입주일을 비교하고 날짜만 남겨 주세요.',
      ctaInquiry: '예약 문의하기',
      ctaBrowse: '숙소 둘러보기',
      quickTitle: '머물 날짜부터 정해 보세요',
      checkIn: '입주',
      checkOut: '퇴실',
      quickGo: '이 날짜로 집 고르기',
      nights: (n) => `${n}박 · 약 ${Math.max(1, Math.round(n / 7))}주`,
      nightsMonth: (n) => `${n}박 · 약 ${Math.round(n / 30 * 10) / 10}달`,
      listingsTitle: '집들을 나란히 비교해 보세요',
      priceBasis: '가격 기준',
      perWeek: '1주 기준',
      perMonth: '4주 이상',
      unitWeek: '/ 1주',
      unitMonth: '/ 4주',
      longNote: (w, p) => `${w}주 이상 머물면 ${p}% 할인`,
      deposit: '보증금',
      guestsLabel: '인원',
      more: (n) => `외 ${n}개`,
      fromDate: (d) => `${d}부터 계속 가능`,
      fitYes: '이 날짜에 예약 가능',
      fitNo: '이 날짜엔 어려워요',
      fitUnknown: '날짜 확인 필요',
      stayResult: (a, b, n) => (n ? `${a} ~ ${b}에 머물 수 있는 집 ${n}채` : `${a} ~ ${b}에 바로 머물 수 있는 집이 없어요. 날짜를 바꾸거나 문의해 주세요.`),
      clearDates: '날짜 지우기',
      prevPhoto: '이전 사진',
      nextPhoto: '다음 사진',
      photosReal: '사진은 모두 직접 찍은 실제 사진이에요.',
      photoPending: '사진 준비 중',
      pricePending: '가격 준비 중',
      pending: '준비 중',
      guests: (g) => `${g}인`,
      where: '위치',
      available: '입주 가능',
      facilities: '시설',
      details: '자세히',
      askThis: '이 집으로 문의하기',
      whereTitle: '어디에 있나요',
      wherePending: '위치 준비 중',
      trustTitle: '머물렀던 분들의 후기',
      reviewsTitle: '후기',
      rating: (r) => `${r.source} 평점 ${r.score}${r.count ? `, 후기 ${r.count}개` : ''}`,
      ratingShort: (r) => `${r.source} 후기 ${r.count}개`,
      translated: '영어 후기를 번역했어요',
      inquiryTitle: '마음에 드는 집과 날짜를 남겨 주세요',
      inquirySub: '확인한 뒤 남겨 주신 연락처로 가능 여부와 안내를 드릴게요. 아직 결제나 확정 단계가 아니에요.',
      fName: '이름',
      fContact: '연락처',
      fContactHint: '전화번호, 이메일, 카카오톡 ID, WhatsApp 중 편한 것',
      fHome: '원하는 숙소',
      fHomePick: '숙소를 골라 주세요',
      fHomeAny: '아직 못 정했어요 (추천해 주세요)',
      fConsent: '(필수) 예약 문의에 답하기 위해 이름·연락처·희망 숙소·날짜를 받고, 문의 처리 후 1년 뒤 지워요. 이에 동의해요.',
      fSubmit: '예약 문의 보내기',
      sending: '보내는 중…',
      ok: '문의가 접수됐어요. 확인 후 연락드릴게요.',
      errName: '이름을 적어 주세요.',
      errContact: '연락받을 방법을 적어 주세요.',
      errHome: '원하는 숙소를 골라 주세요.',
      errDates: '입주일과 퇴실일을 골라 주세요.',
      errOrder: '퇴실일은 입주일보다 뒤여야 해요.',
      errConsent: '개인정보 수집·이용에 동의해 주세요.',
      errNet: '보내지 못했어요. 잠시 뒤 다시 시도해 주세요.',
      footNote: '서울 단기·중기 임대 숙소 소개와 예약 문의',
      close: '닫기',
      title: '서울 단기임대 숙소 — 혼자부터 가족까지 머물기 좋은 집',
    },
    en: {
      skip: 'Skip to the homes',
      heroTitle: 'A quiet place of your own in Seoul.',
      heroSub: 'From a week to a few months, from studios for one to a two-room home for families. Compare photos, location, price and move-in dates, then leave us yours.',
      ctaInquiry: 'Request to book',
      ctaBrowse: 'See the homes',
      quickTitle: 'Start with your dates',
      checkIn: 'Move in',
      checkOut: 'Move out',
      quickGo: 'Choose a home for these dates',
      nights: (n) => `${n} nights, about ${Math.max(1, Math.round(n / 7))} wk`,
      nightsMonth: (n) => `${n} nights, about ${Math.round(n / 30 * 10) / 10} mo`,
      listingsTitle: 'Compare the homes side by side',
      priceBasis: 'Price basis',
      perWeek: 'Per week',
      perMonth: '4+ weeks',
      unitWeek: '/ week',
      unitMonth: '/ 4 weeks',
      longNote: (w, p) => `${p}% off for stays of ${w}+ weeks`,
      deposit: 'Deposit',
      guestsLabel: 'Guests',
      more: (n) => `+${n} more`,
      fromDate: (d) => `From ${d} onward`,
      fitYes: 'Available for your dates',
      fitNo: 'Not available for these dates',
      fitUnknown: 'Dates to be confirmed',
      stayResult: (a, b, n) => (n ? `${n} ${n === 1 ? 'home' : 'homes'} available ${a} – ${b}` : `No home is free for ${a} – ${b}. Try other dates or send us a request.`),
      clearDates: 'Clear dates',
      prevPhoto: 'Previous photo',
      nextPhoto: 'Next photo',
      photosReal: 'Every photo is a real photo we took ourselves.',
      photoPending: 'Photos coming soon',
      pricePending: 'Price coming soon',
      pending: 'Coming soon',
      guests: (g) => `${g} guests`,
      where: 'Where',
      available: 'Available from',
      facilities: 'Amenities',
      details: 'Details',
      askThis: 'Ask about this home',
      whereTitle: 'Where they are',
      wherePending: 'Location coming soon',
      trustTitle: 'What past guests said',
      reviewsTitle: 'Reviews',
      rating: (r) => `${r.score} on ${r.source}${r.count ? `, ${r.count} ${r.count === 1 ? 'review' : 'reviews'}` : ''}`,
      ratingShort: (r) => `${r.count} ${r.count === 1 ? 'review' : 'reviews'} on ${r.source}`,
      translated: 'Translated from Korean',
      inquiryTitle: 'Tell us the home and dates you want',
      inquirySub: "We'll check and get back to you with availability and details. Nothing is charged or confirmed yet.",
      fName: 'Name',
      fContact: 'How to reach you',
      fContactHint: 'Phone, email, KakaoTalk ID or WhatsApp, whichever you prefer',
      fHome: 'Home',
      fHomePick: 'Choose a home',
      fHomeAny: 'Not sure yet (please suggest one)',
      fConsent: '(Required) We collect your name, contact, preferred home and dates to answer your request, and delete them one year after it is handled. I agree.',
      fSubmit: 'Send booking request',
      sending: 'Sending…',
      ok: "Your request is in. We'll check and get back to you.",
      errName: 'Please enter your name.',
      errContact: 'Please tell us how to reach you.',
      errHome: 'Please choose a home.',
      errDates: 'Please choose move-in and move-out dates.',
      errOrder: 'Move-out must be after move-in.',
      errConsent: 'Please agree to the collection and use of your information.',
      errNet: "Couldn't send. Please try again in a moment.",
      footNote: 'Short and mid-term rentals in Seoul',
      close: 'Close',
      title: 'Short-term rental homes in Seoul — for solo stays and families',
    },
  };

  const homes = window.LISTINGS || [];
  const site = window.SITE || {};
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => [...el.querySelectorAll(s)];
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

  const store = {
    get(k) { try { return localStorage.getItem(k); } catch { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch {} },
  };

  let lang = store.get('lang') || ((navigator.language || 'ko').toLowerCase().startsWith('ko') ? 'ko' : 'en');
  let basis = 'week';
  const t = (k) => T[lang][k];
  const pick = (o) => (o && typeof o === 'object' ? o[lang] || o.ko || '' : o || '');
  const won = (n) => (lang === 'ko' ? `${n.toLocaleString('ko-KR')}원` : `KRW ${n.toLocaleString('en-US')}`);
  const date = (s) => {
    if (!s) return '';
    const d = new Date(`${s}T00:00:00`);
    return d.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  };

  // 4주 가격: 1주 가격 × 4에서 장기 할인율만큼 뺀다 (사장님이 준 규칙 그대로)
  const longPrice = (h) => (h.priceWeek && h.longStay
    ? Math.round(h.priceWeek * h.longStay.minWeeks * (1 - h.longStay.discountPct / 100))
    : null);
  // 인원: '1~2' 같은 숫자면 "1~2인", 글로 적었으면 그 글 그대로
  const guestsText = (h) => (typeof h.guests === 'object' ? pick(h.guests) : t('guests')(h.guests));
  // 입주 가능 기간: availability가 있으면 그것, 없으면 availableFrom부터 쭉
  const windows = (h) => h.availability || (h.availableFrom ? [{ from: h.availableFrom }] : []);
  const shortDate = (s, withYear) => {
    const d = new Date(`${s}T00:00:00`);
    return d.toLocaleDateString(lang === 'ko' ? 'ko-KR' : 'en-US', withYear ? { month: 'long', day: 'numeric', year: 'numeric' } : { month: 'long', day: 'numeric' });
  };
  const windowText = (w) => {
    if (!w.to) return t('fromDate')(date(w.from));
    return `${date(w.from)} ~ ${shortDate(w.to, w.to.slice(0, 4) !== w.from.slice(0, 4))}`;
  };
  const availHtml = (h) => {
    const ws = windows(h);
    if (!ws.length) return `<span class="pending-text">${esc(t('pending'))}</span>`;
    return esc(ws.map(windowText).join(lang === 'ko' ? ', ' : '; '));
  };
  // 고른 날짜에 머물 수 있나: true / false / null(입주일 정보 없음)
  const fits = (h, a, b) => {
    const ws = windows(h);
    if (!ws.length) return null;
    // to는 마지막 밤이라 퇴실은 그다음 날까지 된다
    const nextDay = (s) => { const d = new Date(`${s}T00:00:00Z`); d.setUTCDate(d.getUTCDate() + 1); return d.toISOString().slice(0, 10); };
    return ws.some((w) => a >= w.from && (!w.to || b <= nextDay(w.to)));
  };
  const stay = () => {
    const f = $('#quick-dates');
    const a = f.elements.checkIn.value; const b = f.elements.checkOut.value;
    return a && b && b > a ? { a, b } : null;
  };
  const longNote = (h) => (h.longStay ? t('longNote')(h.longStay.minWeeks, h.longStay.discountPct) : '');

  /* 숙소 카드 */
  function renderCards() {
    const s = stay();
    // 날짜를 고르면 예약 가능한 집을 앞으로, 안 되는 집과 정보 없는 집을 뒤로
    const rank = (h) => (!s ? 0 : fits(h, s.a, s.b) === true ? 0 : fits(h, s.a, s.b) === null ? 1 : 2);
    const list = homes.map((h, i) => ({ h, i })).sort((x, y) => rank(x.h) - rank(y.h) || x.i - y.i).map((x) => x.h);
    renderStay(s, homes.filter((h) => s && fits(h, s.a, s.b) === true).length);
    $('#cards').innerHTML = list.map((h) => {
      const ok = s ? fits(h, s.a, s.b) : undefined;
      const fitBadge = ok === true ? `<span class="fit fit-yes">${esc(t('fitYes'))}</span>`
        : ok === false ? `<span class="fit fit-no">${esc(t('fitNo'))}</span>`
        : ok === null ? `<span class="fit fit-unknown">${esc(t('fitUnknown'))}</span>` : '';
      const photo = h.photos && h.photos[0]
        ? `<img src="${esc(h.photos[0])}" alt="${esc(pick(h.name))}" loading="lazy">`
        : `<span class="photo-empty"><span>${esc(t('photoPending'))}</span></span>`;
      const price = basis === 'week' ? h.priceWeek : longPrice(h);
      const note = basis === 'week' ? '' : longNote(h);
      const priceHtml = price
        ? `<p class="card-price">${esc(won(price))}<small>${esc(t(basis === 'week' ? 'unitWeek' : 'unitMonth'))}</small></p>${note ? `<p class="card-note">${esc(note)}</p>` : ''}`
        : `<p class="card-price pending">${esc(t('pricePending'))}</p>`;
      const where = [pick(h.area), pick(h.station)].filter(Boolean).join(', ');
      const fac = h.facilities || [];
      const chips = fac.slice(0, 5).map((x) => `<li>${esc(pick(x))}</li>`).join('')
        + (fac.length > 5 ? `<li class="more">${esc(t('more')(fac.length - 5))}</li>` : '');
      return `<li class="card${ok === false ? ' is-off' : ''}">
        ${fitBadge}
        <button class="card-photo" type="button" data-open="${esc(h.id)}" aria-label="${esc(pick(h.name))} ${esc(t('details'))}">
          ${photo}<span class="guests">${esc(guestsText(h))}</span>${pick(h.highlight) ? `<span class="highlight">${esc(pick(h.highlight))}</span>` : ''}
        </button>
        <div class="card-body">
          <h3>${esc(pick(h.name))}</h3>
          <p class="card-where">${where ? esc(where) : `<span class="pending-text">${esc(t('wherePending'))}</span>`}</p>
          ${(h.ratings || [])[0] ? `<p class="card-rating"><span aria-hidden="true">★</span> ${esc(h.ratings[0].score)}${h.ratings[0].count ? ` <small>${esc(t('ratingShort')(h.ratings[0]))}</small>` : ''}</p>` : ''}
          ${priceHtml}
          <dl class="card-meta">
            <dt>${esc(t('available'))}</dt>
            <dd>${availHtml(h)}</dd>
            ${h.deposit ? `<dt>${esc(t('deposit'))}</dt><dd>${esc(won(h.deposit))}</dd>` : ''}
          </dl>
          ${chips ? `<ul class="chips">${chips}</ul>` : ''}
          <div class="card-actions">
            <button class="pill pill-ghost" type="button" data-open="${esc(h.id)}">${esc(t('details'))}</button>
            <button class="pill pill-lamp" type="button" data-ask="${esc(h.id)}">${esc(t('askThis'))}</button>
          </div>
        </div>
      </li>`;
    }).join('');
  }

  function renderStay(s, n) {
    const bar = $('#stay-bar');
    bar.hidden = !s;
    if (!s) return;
    $('#stay-text').textContent = t('stayResult')(shortDate(s.a, false), shortDate(s.b, false), n);
  }

  function renderWhere() {
    $('#where-list').innerHTML = homes.map((h) => {
      const where = [pick(h.area), pick(h.station)].filter(Boolean).join(', ');
      return `<li><strong>${esc(pick(h.name))}</strong>${where ? `<span class="has">${esc(where)}</span>` : `<span>${esc(t('wherePending'))}</span>`}</li>`;
    }).join('');
  }

  // 후기 날짜 '2026-09' → "2026년 9월" / "Sep 2026"
  const month = (s) => {
    if (!s) return '';
    const [y, m] = s.split('-').map(Number);
    return lang === 'ko' ? `${y}년 ${m}월` : new Date(Date.UTC(y, m - 1, 1)).toLocaleDateString('en-US', { month: 'short', year: 'numeric', timeZone: 'UTC' });
  };
  const ratingLink = (r) => {
    const label = esc(t('rating')(r));
    return r.url ? `<a href="${esc(r.url)}" target="_blank" rel="noopener">${label}</a>` : label;
  };
  const reviewItem = (r, home) => {
    const meta = [home ? pick(home.name) : '', r.source, month(r.date)].filter(Boolean).join(', ');
    // 원문과 다른 언어로 보여 줄 때만 "번역" 표시 (후기 원문은 한국어가 기본, orig: 'en'이면 영어)
    const shown = lang === 'ko' ? 'ko' : 'en'; const orig = r.orig || 'ko';
    const note = shown !== orig ? ` <em>${esc(t('translated'))}</em>` : '';
    return `<li><blockquote>${esc(pick(r.text))}</blockquote><p>${esc(meta)}${note}</p></li>`;
  };

  // 첫 화면 아래 후기 모음: 모든 집의 후기를 최근 것부터 6개까지
  function renderTrust() {
    const all = homes.flatMap((h) => (h.reviews || []).map((r) => ({ r, h })))
      .sort((x, y) => String(y.r.date || '').localeCompare(String(x.r.date || '')))
      .slice(0, 6);
    $('#trust-pills').innerHTML = '';
    $('#reviews').innerHTML = all.map(({ r, h }) => reviewItem(r, h)).join('');
    $('#trust').hidden = !all.length;
  }

  function renderSelect() {
    const sel = $('#listing-select');
    const cur = sel.value;
    sel.innerHTML = `<option value="">${esc(t('fHomePick'))}</option>`
      + homes.map((h) => `<option value="${esc(h.id)}">${esc(pick(h.name))}</option>`).join('')
      + `<option value="any">${esc(t('fHomeAny'))}</option>`;
    sel.value = cur;
  }

  function applyLang() {
    document.documentElement.lang = lang;
    document.title = t('title');
    $$('[data-i18n]').forEach((el) => { const v = t(el.dataset.i18n); if (typeof v === 'string') el.textContent = v; });
    $$('[data-i18n-aria]').forEach((el) => el.setAttribute('aria-label', t(el.dataset.i18nAria)));
    $$('[data-site-name]').forEach((el) => { el.textContent = pick(site.name); });
    $$('[data-lang]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.lang === lang)));
    renderCards(); renderWhere(); renderTrust(); renderSelect(); updateNights();
    const open = $('#detail').dataset.home;
    if ($('#detail').open && open) fillDetail(open);
  }

  /* 날짜 */
  const today = new Date(); today.setMinutes(today.getMinutes() - today.getTimezoneOffset());
  const todayStr = today.toISOString().slice(0, 10);
  const pairs = [$('#quick-dates'), $('#inquiry-form')].map((f) => [f.elements.checkIn, f.elements.checkOut]);
  pairs.forEach(([a, b]) => {
    a.min = todayStr; b.min = todayStr;
    a.addEventListener('change', () => { b.min = a.value || todayStr; if (b.value && b.value <= a.value) b.value = ''; syncDates(a, b); });
    b.addEventListener('change', () => syncDates(a, b));
  });
  function syncDates(a, b) {
    pairs.forEach(([x, y]) => { if (x !== a) { x.value = a.value; y.min = a.value || todayStr; y.value = b.value; } });
    updateNights();
    renderCards();
  }
  $('#stay-clear').addEventListener('click', () => {
    const [a, b] = pairs[0]; a.value = ''; b.value = ''; b.min = todayStr; syncDates(a, b);
  });
  function updateNights() {
    const f = $('#quick-dates');
    const a = f.elements.checkIn.value; const b = f.elements.checkOut.value;
    const n = a && b ? Math.round((new Date(b) - new Date(a)) / 86400000) : 0;
    $('.quick-nights').textContent = n > 0 ? (n >= 28 ? t('nightsMonth')(n) : t('nights')(n)) : '';
  }
  $('#quick-dates').addEventListener('submit', (e) => {
    e.preventDefault();
    $('#listings').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  });

  /* 가격 기준 */
  $$('[data-basis]').forEach((b) => b.addEventListener('click', () => {
    basis = b.dataset.basis;
    $$('[data-basis]').forEach((x) => x.setAttribute('aria-pressed', String(x === b)));
    renderCards();
  }));

  /* 언어 */
  $$('[data-lang]').forEach((b) => b.addEventListener('click', () => { lang = b.dataset.lang; store.set('lang', lang); applyLang(); }));

  /* 자세히 보기 */
  const dlg = $('#detail');
  function fillDetail(id) {
    const h = homes.find((x) => x.id === id); if (!h) return;
    dlg.dataset.home = id;
    $('#detail-title').textContent = pick(h.name);
    const photos = h.photos || [];
    $('#detail-gallery').innerHTML = photos.length
      ? `<div class="slides">${photos.map((p, i) => `<img src="${esc(p)}" alt="${esc(pick(h.name))} ${i + 1}" loading="lazy">`).join('')}</div>`
        + (photos.length > 1 ? `<span class="slide-count">1 / ${photos.length}</span>
          <button class="slide-nav prev" type="button" data-slide="-1" aria-label="${esc(t('prevPhoto'))}">‹</button>
          <button class="slide-nav next" type="button" data-slide="1" aria-label="${esc(t('nextPhoto'))}">›</button>` : '')
      : `<span class="photo-empty"><span>${esc(t('photoPending'))}</span></span>`;
    const slides = $('.slides', dlg);
    if (slides) {
      slides.addEventListener('scroll', () => {
        const i = Math.round(slides.scrollLeft / slides.clientWidth) + 1;
        const c = $('.slide-count', dlg); if (c) c.textContent = `${i} / ${photos.length}`;
      }, { passive: true });
    }
    $('#detail-intro').textContent = pick(h.intro);
    $('#detail-intro').hidden = !pick(h.intro);
    const pend = `<span class="pending-text">${esc(t('pending'))}</span>`;
    const where = [pick(h.area), pick(h.station)].filter(Boolean).join(', ');
    const lp = longPrice(h);
    const rows = [
      [t('where'), where ? esc(where) : pend],
      [t('perWeek'), h.priceWeek ? esc(won(h.priceWeek)) : pend],
      [t('perMonth'), lp ? `${esc(won(lp))} <small>${esc(t('unitMonth'))}, ${esc(longNote(h))}</small>` : pend],
      [t('deposit'), h.deposit ? esc(won(h.deposit)) : pend],
      [t('available'), availHtml(h)],
      [t('guestsLabel'), esc(guestsText(h))],
      [t('facilities'), h.facilities && h.facilities.length ? esc(h.facilities.map(pick).join(', ')) : pend],
    ];
    $('#detail-facts').innerHTML = rows.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${v}</dd></div>`).join('');
    const rs = h.ratings || []; const rv = h.reviews || [];
    $('#detail-reviews').hidden = !rs.length && !rv.length;
    $('#detail-reviews').innerHTML = `<h4>${esc(t('reviewsTitle'))}</h4>`
      + (rs.length ? `<ul class="rating-list">${rs.map((r) => `<li>${ratingLink(r)}</li>`).join('')}</ul>` : '')
      + (rv.length ? `<ul class="reviews">${rv.map((r) => reviewItem(r)).join('')}</ul>` : '');
  }
  function ask(id) {
    if (dlg.open) dlg.close();
    $('#listing-select').value = id;
    $('#inquiry').scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    setTimeout(() => $('#inquiry-form').elements.name.focus({ preventScroll: true }), 500);
  }
  document.addEventListener('click', (e) => {
    const o = e.target.closest('[data-open]'); if (o) { fillDetail(o.dataset.open); dlg.showModal(); return; }
    const a = e.target.closest('[data-ask]'); if (a) { ask(a.dataset.ask); return; }
    const s = e.target.closest('[data-slide]');
    if (s) { const sl = $('.slides', dlg); sl.scrollBy({ left: sl.clientWidth * Number(s.dataset.slide), behavior: 'smooth' }); return; }
    if (e.target.closest('[data-close]') || e.target === dlg) dlg.close();
  });
  $('#detail-ask').addEventListener('click', () => ask(dlg.dataset.home));

  /* 예약 문의 보내기 */
  const form = $('#inquiry-form');
  const msg = $('.form-msg');
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const el = form.elements;
    $$('[aria-invalid]', form).forEach((x) => x.removeAttribute('aria-invalid'));
    const fail = (field, key) => { msg.className = 'form-msg err'; msg.textContent = t(key); if (field) { field.setAttribute('aria-invalid', 'true'); field.focus(); } };
    if (!el.name.value.trim()) return fail(el.name, 'errName');
    if (!el.contact.value.trim()) return fail(el.contact, 'errContact');
    if (!el.listing.value) return fail(el.listing, 'errHome');
    if (!el.checkIn.value) return fail(el.checkIn, 'errDates');
    if (!el.checkOut.value) return fail(el.checkOut, 'errDates');
    if (el.checkOut.value <= el.checkIn.value) return fail(el.checkOut, 'errOrder');
    if (!el.consent.checked) return fail(el.consent, 'errConsent');

    const home = homes.find((h) => h.id === el.listing.value);
    const body = {
      name: el.name.value.trim(),
      contact: el.contact.value.trim(),
      listing: home ? `${home.name.ko} (${home.id})` : '추천 요청',
      check_in: el.checkIn.value,
      check_out: el.checkOut.value,
      lang,
      consent: el.consent.checked,
      website: el.website.value,
    };
    const btn = $('.submit', form);
    btn.disabled = true; btn.textContent = t('sending'); msg.className = 'form-msg'; msg.textContent = '';
    try {
      const r = await fetch('/api/inquiry', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(body) });
      const data = await r.json().catch(() => ({}));
      if (!r.ok) throw new Error(lang === 'ko' && data.error ? data.error : t('errNet'));
      form.reset(); renderSelect(); syncDates(el.checkIn, el.checkOut);
      msg.className = 'form-msg ok'; msg.textContent = t('ok');
    } catch (err) {
      msg.className = 'form-msg err'; msg.textContent = err.message || t('errNet');
    } finally {
      btn.disabled = false; btn.textContent = t('fSubmit');
    }
  });

  applyLang();
})();
