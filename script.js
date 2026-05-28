// 행사 카드 구조체 배열: 기본 행사와 업체 등록 행사는 모두 같은 속성 구조를 사용합니다.
// { id, title, location, date, scale, transportation, facilities, category, popularity, coordinates, image, source }
const festivals = [
  {
    id: 1,
    title: "연남 골목 재즈 산책",
    location: "서울 마포구 연남동",
    date: "2026.06.07 - 2026.06.09",
    scale: "소규모",
    transportation: "홍대입구역 3번 출구 도보 9분, 공영주차장 24면 운영",
    facilities: "도보 5분 거리 카페 거리, 독립서점 팝업, 소규모 푸드부스",
    category: ["힐링", "연인과 함께", "체험"],
    popularity: 84,
    coordinates: { lat: 37.5627, lng: 126.9255 },
    image: "https://placehold.co/800x500/16725a/ffffff?text=Yeonnam+Jazz",
    source: "mock"
  },
  {
    id: 2,
    title: "광안리 어방 축제",
    location: "부산 수영구 광안리",
    date: "2026.07.18 - 2026.07.21",
    scale: "소규모",
    transportation: "광안역 도보 12분, 행사 기간 임시 셔틀버스 운영",
    facilities: "해변 먹거리 존, 야시장, 수변공원 포토존",
    category: ["활기찬", "먹거리", "연인과 함께"],
    popularity: 96,
    coordinates: { lat: 35.1532, lng: 129.1186 },
    image: "https://placehold.co/800x500/1f6f8b/ffffff?text=Busan+Sea+Light",
    source: "mock"
  },
  {
    id: 3,
    title: "대전 로컬 사이언스 피크닉",
    location: "대전 유성구 엑스포과학공원",
    date: "2026.05.30 - 2026.06.02",
    scale: "소규모",
    transportation: "정부청사역 연계 버스 15분, 근처 유료주차장 이용 가능",
    facilities: "로컬 베이커리 부스, 과학 굿즈 플리마켓, 잔디 피크닉존",
    category: ["체험", "가족과 함께", "힐링"],
    popularity: 89,
    coordinates: { lat: 36.3752, lng: 127.3814 },
    image: "https://placehold.co/800x500/f0b429/17211a?text=Science+Picnic",
    source: "mock"
  },
  {
    id: 4,
    title: "전주 한옥 달빛마켓",
    location: "전주 완산구 한옥마을",
    date: "2026.06.14 - 2026.06.16",
    scale: "소규모",
    transportation: "전주역 버스 25분, 한옥마을 외곽 공영주차장 이용",
    facilities: "도보 3분 거리 한식 맛집 골목, 수공예 플리마켓, 전통차 팝업",
    category: ["먹거리", "힐링", "연인과 함께"],
    popularity: 91,
    coordinates: { lat: 35.8151, lng: 127.1530 },
    image: "https://placehold.co/800x500/7d8f69/ffffff?text=Hanok+Moon+Market",
    source: "mock"
  },
  {
    id: 5,
    title: "제주 오름 바람축제",
    location: "제주 제주시 구좌읍",
    date: "2026.08.02 - 2026.08.05",
    scale: "소규모",
    transportation: "제주시외버스터미널 급행버스 55분, 임시 주차장 운영",
    facilities: "농가 푸드트럭, 로컬 감귤 디저트, 작은 공방 체험존",
    category: ["힐링", "체험", "가족과 함께"],
    popularity: 78,
    coordinates: { lat: 33.5220, lng: 126.8587 },
    image: "https://placehold.co/800x500/89b77f/17211a?text=Jeju+Oreum",
    source: "mock"
  },
  {
    id: 6,
    title: "강릉 커피 항구제",
    location: "강릉 안목해변",
    date: "2026.09.11 - 2026.09.14",
    scale: "대규모",
    transportation: "강릉역 시내버스 20분, 해변 공영주차장 혼잡 예상",
    facilities: "커피 로스터리 거리, 디저트 마켓, 바다 전망 푸드존",
    category: ["먹거리", "활기찬", "연인과 함께"],
    popularity: 94,
    coordinates: { lat: 37.7719, lng: 128.9473 },
    image: "https://placehold.co/800x500/574f3d/ffffff?text=Coffee+Harbor",
    source: "mock"
  },
  {
    id: 7,
    title: "서울숲 가족 아트데이",
    location: "서울 성동구 서울숲",
    date: "2026.06.22 - 2026.06.23",
    scale: "소규모",
    transportation: "서울숲역 도보 6분, 인근 공영주차장 제한적 이용",
    facilities: "수제 간식 부스, 어린이 공예 체험, 주말 플리마켓",
    category: ["가족과 함께", "체험", "힐링"],
    popularity: 82,
    coordinates: { lat: 37.5444, lng: 127.0374 },
    image: "https://placehold.co/800x500/bbd2a4/17211a?text=Family+Art+Day",
    source: "mock"
  },
  {
    id: 8,
    title: "부산 초량 로컬푸드 나잇",
    location: "부산 동구 초량동",
    date: "2026.06.28 - 2026.06.29",
    scale: "소규모",
    transportation: "부산역 도보 8분, 주차 공간 협소해 대중교통 권장",
    facilities: "도보 5분 거리 로컬 맛집 거리, 야간 플리마켓, 맥주 팝업",
    category: ["먹거리", "활기찬", "체험"],
    popularity: 87,
    coordinates: { lat: 35.1151, lng: 129.0422 },
    image: "https://placehold.co/800x500/f05a3c/ffffff?text=Local+Food+Night",
    source: "mock"
  }
];

const preferenceForm = document.querySelector("#preferenceForm");
const surveyPanel = document.querySelector("#surveyPanel");
const resultPanel = document.querySelector("#resultPanel");
const popularList = document.querySelector("#popularList");
const festivalList = document.querySelector("#festivalList");
const resultSummary = document.querySelector("#resultSummary");
const retryButton = document.querySelector("#retryButton");
const popularPanel = document.querySelector("#popularPanel");
const festivalModal = document.querySelector("#festivalModal");
const modalContent = document.querySelector("#modalContent");
const loginButton = document.querySelector("#loginButton");
const myPageNavButton = document.querySelector("#myPageNavButton");
const eventRegisterNavButton = document.querySelector("#eventRegisterNavButton");
const loginPanel = document.querySelector("#loginPanel");
const signupPanel = document.querySelector("#signupPanel");
const myPagePanel = document.querySelector("#myPagePanel");
const loginForm = document.querySelector("#loginForm");
const signupForm = document.querySelector("#signupForm");
const loginMessage = document.querySelector("#loginMessage");
const signupMessage = document.querySelector("#signupMessage");
const goSignupButton = document.querySelector("#goSignupButton");
const myPageCard = document.querySelector("#myPageCard");
const myPageSummary = document.querySelector("#myPageSummary");
const registrationPanel = document.querySelector("#registrationPanel");
const registrationForm = document.querySelector("#registrationForm");
const registrationBackButton = document.querySelector("#registrationBackButton");
const registeredPanel = document.querySelector("#registeredPanel");
const registeredList = document.querySelector("#registeredList");

const accounts = [
  { id: "aaa", password: "111", role: "user", phone: "", email: "" },
  { id: "bbb", password: "222", role: "business", phone: "", email: "" }
];

let currentUser = null;
let pendingProtectedAction = null;

// 네이버 지도 연결: 모바일에서는 네이버지도 앱 길찾기, 데스크톱/앱 미설치 환경에서는 웹 검색으로 이동합니다.
function openNaverDirections({ title, location, lat, lng }) {
  const destinationName = `${title}`;
  const encodedName = encodeURIComponent(destinationName);
  const appName = encodeURIComponent(window.location.href);
  const naverWebUrl = `https://map.naver.com/p/search/${encodedName}`;
  const isMobile = /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
  const hasCoordinates = lat !== "" && lng !== "" && Number.isFinite(Number(lat)) && Number.isFinite(Number(lng));

  if (!hasCoordinates || !isMobile) {
    window.open(naverWebUrl, "_blank", "noopener");
    return;
  }

  const naverAppUrl = `nmap://route/public?dlat=${lat}&dlng=${lng}&dname=${encodedName}&appname=${appName}`;

  let fallbackTimer = window.setTimeout(() => {
    window.location.href = naverWebUrl;
  }, 900);

  const stopFallback = () => {
    window.clearTimeout(fallbackTimer);
    fallbackTimer = null;
    document.removeEventListener("visibilitychange", stopFallback);
  };

  document.addEventListener("visibilitychange", stopFallback);
  window.location.href = naverAppUrl;
}

function findFestivalById(id) {
  return festivals.find((festival) => festival.id === Number(id));
}

// 상세 모달: 축제 카드를 누르면 화면 중앙에 행사 상세 정보를 띄웁니다.
function openFestivalModal(festival) {
  if (!festival) {
    return;
  }

  const categoryPills = festival.category
    .map((category) => `<span class="pill">${category}</span>`)
    .join("");

  modalContent.innerHTML = `
    <div class="modal-image-wrap">
      <img src="${festival.image}" alt="${festival.title} 이미지">
      <button class="modal-close" type="button" aria-label="상세 정보 닫기">×</button>
    </div>
    <div class="modal-body">
      <div class="modal-kicker">
        <span class="pill">${festival.location}</span>
        <span class="pill">${festival.scale}</span>
        <span class="pill">인기 ${festival.popularity}%</span>
        ${festival.source === "registered" ? '<span class="pill">업체 등록</span>' : ""}
        ${categoryPills}
      </div>
      <h2 class="modal-title" id="modalTitle">${festival.title}</h2>
      <p class="modal-date">${festival.date}</p>

      <div class="modal-detail-grid">
        <div class="modal-detail">
          <strong>행사 위치</strong>
          <p>${festival.location}</p>
        </div>
        ${festival.businessName ? `
          <div class="modal-detail">
            <strong>등록 업체</strong>
            <p>${festival.businessName}</p>
          </div>
        ` : ""}
        ${festival.representativeName ? `
          <div class="modal-detail">
            <strong>대표자 정보</strong>
            <p>${festival.representativeName} · ${festival.representativePhone}</p>
          </div>
        ` : ""}
        <div class="modal-detail">
          <strong>행사 규모</strong>
          <p>${festival.scale === "소규모" ? "가볍게 방문하기 좋은 동네 기반 소규모 행사입니다." : "방문객이 많은 대표 지역 축제입니다."}</p>
        </div>
        <div class="modal-detail">
          <strong>교통편 정보</strong>
          <p>${festival.transportation}</p>
        </div>
        <div class="modal-detail">
          <strong>주변 상권</strong>
          <p>${festival.facilities}</p>
        </div>
      </div>

      <div class="modal-actions">
        <button class="action-button save-button" type="button" data-id="${festival.id}">관심 저장</button>
        <button
          class="action-button map"
          type="button"
          data-title="${festival.title}"
          data-location="${festival.location}"
          data-lat="${festival.coordinates.lat ?? ""}"
          data-lng="${festival.coordinates.lng ?? ""}"
        >네이버 길찾기</button>
      </div>
    </div>
  `;

  festivalModal.classList.remove("is-hidden");
  document.body.classList.add("modal-open");
}

function closeFestivalModal() {
  festivalModal.classList.add("is-hidden");
  document.body.classList.remove("modal-open");
}

function getRoleLabel(role) {
  return role === "business" ? "사업자" : "일반 이용자";
}

function hidePrimaryPanels() {
  surveyPanel.classList.add("is-hidden");
  popularPanel.classList.add("is-hidden");
  resultPanel.classList.add("is-hidden");
  registrationPanel.classList.add("is-hidden");
  registeredPanel.classList.add("is-hidden");
  loginPanel.classList.add("is-hidden");
  signupPanel.classList.add("is-hidden");
  myPagePanel.classList.add("is-hidden");
}

function updateAuthButton() {
  loginButton.textContent = currentUser ? "로그아웃" : "로그인";
}

function requireLogin(actionName, callback) {
  if (currentUser) {
    callback();
    return;
  }

  pendingProtectedAction = actionName;
  showLoginPanel();
}

function showLoginPanel() {
  hidePrimaryPanels();
  loginMessage.textContent = pendingProtectedAction
    ? "로그인이 필요한 메뉴입니다."
    : "";
  loginMessage.classList.remove("success");
  loginPanel.classList.remove("is-hidden");
  loginPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showSignupPanel() {
  hidePrimaryPanels();
  signupMessage.textContent = "";
  signupMessage.classList.remove("success");
  signupPanel.classList.remove("is-hidden");
  signupPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function showMyPagePanel() {
  hidePrimaryPanels();
  myPageSummary.textContent = `${getRoleLabel(currentUser.role)} 계정으로 로그인되어 있습니다.`;
  myPageCard.innerHTML = `
    <div class="mypage-row"><strong>아이디</strong><span>${currentUser.id}</span></div>
    <div class="mypage-row"><strong>회원 유형</strong><span>${getRoleLabel(currentUser.role)}</span></div>
    <div class="mypage-row"><strong>전화번호</strong><span>${currentUser.phone || "미입력"}</span></div>
    <div class="mypage-row"><strong>이메일</strong><span>${currentUser.email || "미입력"}</span></div>
  `;
  myPagePanel.classList.remove("is-hidden");
  myPagePanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createRegisteredFestival(formData) {
  const title = formData.get("eventTitle").trim();
  const location = formData.get("eventLocation").trim();
  const representativeCategory = formData.get("eventCategory");

  return {
    id: Date.now(),
    title,
    location,
    date: formData.get("eventDate").trim(),
    scale: formData.get("eventScale"),
    transportation: formData.get("eventTransportation").trim(),
    facilities: formData.get("eventFacilities").trim(),
    category: [representativeCategory],
    popularity: 70,
    coordinates: {
      lat: null,
      lng: null
    },
    image: formData.get("eventImage").trim() || `https://placehold.co/800x500/7644e8/ffffff?text=${encodeURIComponent(title)}`,
    businessName: formData.get("businessName").trim(),
    representativeName: formData.get("representativeName").trim(),
    representativePhone: formData.get("representativePhone").trim(),
    source: "registered"
  };
}

function showMainPanels() {
  loginPanel.classList.add("is-hidden");
  signupPanel.classList.add("is-hidden");
  myPagePanel.classList.add("is-hidden");
  registrationPanel.classList.add("is-hidden");
  resultPanel.classList.add("is-hidden");
  surveyPanel.classList.remove("is-hidden");
  popularPanel.classList.remove("is-hidden");
  registeredPanel.classList.toggle("is-hidden", !festivals.some((festival) => festival.source === "registered"));
}

function showRegistrationPanel() {
  hidePrimaryPanels();
  registrationPanel.classList.remove("is-hidden");
  registrationPanel.scrollIntoView({ behavior: "smooth", block: "start" });
}

// 최근 인기 축제: 저장 수와 조회 수를 단순화한 popularity 값을 기준으로 인기 행사 4개를 노출합니다.
function renderPopularFestivals() {
  const popularFestivals = [...festivals]
    .sort((a, b) => b.popularity - a.popularity)
    .slice(0, 4);

  popularList.innerHTML = popularFestivals.map((festival, index) => `
    <article class="popular-card" tabindex="0" data-id="${festival.id}">
      <span class="rank-badge">TOP ${index + 1}</span>
      <img src="${festival.image}" alt="${festival.title} 이미지">
      <div class="popular-content">
        <div class="popular-meta">
          <span class="popular-chip">${festival.location}</span>
          <span class="popular-chip">${festival.scale}</span>
        </div>
        <h3 class="popular-title">${festival.title}</h3>
        <div class="popular-meta">
          <span class="popular-chip">${festival.date}</span>
          <span class="popular-chip">인기 ${festival.popularity}%</span>
        </div>
        <button
          class="popular-link map"
          type="button"
          data-title="${festival.title}"
          data-location="${festival.location}"
          data-lat="${festival.coordinates.lat ?? ""}"
          data-lng="${festival.coordinates.lng ?? ""}"
        >길찾기</button>
      </div>
    </article>
  `).join("");
}

// 필터링: 지역, 분위기, 소규모 행사 가중치를 활용해 점수를 계산하고 Top 3만 반환합니다.
function getRecommendedFestivals(preferences) {
  const scoredFestivals = festivals.map((festival) => {
    let score = 0;

    if (preferences.region === "전체" || festival.location.includes(preferences.region)) {
      score += 4;
    }

    if (festival.category.includes(preferences.mood)) {
      score += 5;
    }

    if (festival.scale === "소규모") {
      score += 2;
    }

    if (preferences.ageGroup === "10대" || preferences.ageGroup === "20대") {
      score += festival.category.includes("활기찬") || festival.category.includes("체험") ? 1 : 0;
    }

    if (preferences.ageGroup === "30대" || preferences.ageGroup === "40대") {
      score += festival.category.includes("가족과 함께") || festival.category.includes("먹거리") ? 1 : 0;
    }

    if (preferences.ageGroup === "50대 이상") {
      score += festival.category.includes("힐링") ? 1 : 0;
    }

    return { ...festival, score };
  });

  return scoredFestivals
    .sort((a, b) => b.score - a.score || (a.scale === "소규모" ? -1 : 1))
    .slice(0, 3);
}

// UI 렌더링: 추천 결과 카드 3개를 만들고 교통/상권 정보는 details 아코디언으로 접어둡니다.
function renderFestivalCards(recommendations) {
  festivalList.innerHTML = recommendations.map((festival) => {
    const scaleBadge = festival.scale === "소규모"
      ? '<span class="scale-badge">소규모 행사</span>'
      : "";

    const categoryPills = festival.category
      .map((category) => `<span class="pill">${category}</span>`)
      .join("");

    return `
      <article class="festival-card" tabindex="0" data-id="${festival.id}">
        <div class="festival-image-wrap">
          <img class="festival-image" src="${festival.image}" alt="${festival.title} 이미지">
          ${scaleBadge}
        </div>
        <div class="festival-content">
          <div class="festival-meta">
            <span class="pill">${festival.location}</span>
            <span class="pill">${festival.scale}</span>
            ${categoryPills}
          </div>
          <h3 class="festival-title">${festival.title}</h3>
          <p class="festival-date">${festival.date}</p>

          <div class="info-stack">
            <details class="info-toggle">
              <summary>교통편 정보</summary>
              <p>${festival.transportation}</p>
            </details>
            <details class="info-toggle">
              <summary>주변 상권 정보</summary>
              <p>${festival.facilities}</p>
            </details>
          </div>

          <div class="card-actions">
            <button class="action-button save-button" type="button" data-id="${festival.id}">관심 저장</button>
            <button
              class="action-button map"
              type="button"
              data-title="${festival.title}"
              data-location="${festival.location}"
              data-lat="${festival.coordinates.lat ?? ""}"
              data-lng="${festival.coordinates.lng ?? ""}"
            >길찾기</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

function renderRegisteredFestivals() {
  const registeredFestivals = festivals.filter((festival) => festival.source === "registered");
  registeredPanel.classList.toggle("is-hidden", registeredFestivals.length === 0);

  registeredList.innerHTML = registeredFestivals.map((festival) => {
    const categoryPills = festival.category
      .map((category) => `<span class="pill">${category}</span>`)
      .join("");

    return `
      <article class="festival-card" tabindex="0" data-id="${festival.id}">
        <div class="festival-image-wrap">
          <img class="festival-image" src="${festival.image}" alt="${festival.title} 이미지">
          ${festival.scale === "소규모" ? '<span class="scale-badge">소규모 행사</span>' : ""}
        </div>
        <div class="festival-content">
          <div class="festival-meta">
            <span class="pill">${festival.location}</span>
            <span class="pill">업체 등록</span>
            ${categoryPills}
          </div>
          <h3 class="festival-title">${festival.title}</h3>
          <p class="festival-date">${festival.date}</p>

          <div class="info-stack">
            <details class="info-toggle">
              <summary>교통편 정보</summary>
              <p>${festival.transportation}</p>
            </details>
            <details class="info-toggle">
              <summary>주변 상권 정보</summary>
              <p>${festival.facilities}</p>
            </details>
          </div>

          <div class="card-actions">
            <button class="action-button save-button" type="button" data-id="${festival.id}">관심 저장</button>
            <button
              class="action-button map"
              type="button"
              data-title="${festival.title}"
              data-location="${festival.location}"
              data-lat="${festival.coordinates.lat ?? ""}"
              data-lng="${festival.coordinates.lng ?? ""}"
            >길찾기</button>
          </div>
        </div>
      </article>
    `;
  }).join("");
}

// 취향 조사: 폼 제출 시 입력값을 읽고 조사 영역을 숨긴 뒤 추천 결과 영역을 노출합니다.
preferenceForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(preferenceForm);
  const preferences = {
    ageGroup: formData.get("ageGroup"),
    region: formData.get("region"),
    mood: formData.get("mood")
  };

  const recommendations = getRecommendedFestivals(preferences);
  renderFestivalCards(recommendations);

  resultSummary.textContent = `${preferences.region} · ${preferences.mood} 취향에 맞춰 최적의 3개만 골랐습니다.`;
  surveyPanel.classList.add("is-hidden");
  popularPanel.classList.add("is-hidden");
  resultPanel.classList.remove("is-hidden");
  resultPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

// 버튼 및 카드 상호작용: 버튼은 개별 기능을 실행하고, 카드 클릭은 상세 모달을 엽니다.
festivalList.addEventListener("click", (event) => {
  const saveButton = event.target.closest(".save-button");
  const mapButton = event.target.closest(".map");
  const card = event.target.closest(".festival-card");

  if (saveButton) {
    saveButton.classList.toggle("is-saved");
    saveButton.textContent = saveButton.classList.contains("is-saved") ? "저장 완료" : "관심 저장";
    return;
  }

  if (mapButton) {
    openNaverDirections(mapButton.dataset);
    return;
  }

  if (event.target.closest("details")) {
    return;
  }

  if (card) {
    openFestivalModal(findFestivalById(card.dataset.id));
  }
});

popularList.addEventListener("click", (event) => {
  const mapButton = event.target.closest(".map");
  const card = event.target.closest(".popular-card");

  if (mapButton) {
    openNaverDirections(mapButton.dataset);
    return;
  }

  if (card) {
    openFestivalModal(findFestivalById(card.dataset.id));
  }
});

registeredList.addEventListener("click", (event) => {
  const saveButton = event.target.closest(".save-button");
  const mapButton = event.target.closest(".map");
  const card = event.target.closest(".festival-card");

  if (saveButton) {
    saveButton.classList.toggle("is-saved");
    saveButton.textContent = saveButton.classList.contains("is-saved") ? "저장 완료" : "관심 저장";
    return;
  }

  if (mapButton) {
    openNaverDirections(mapButton.dataset);
    return;
  }

  if (event.target.closest("details")) {
    return;
  }

  if (card) {
    openFestivalModal(findFestivalById(card.dataset.id));
  }
});

festivalList.addEventListener("keydown", (event) => {
  const card = event.target.closest(".festival-card");

  if ((event.key === "Enter" || event.key === " ") && card) {
    event.preventDefault();
    openFestivalModal(findFestivalById(card.dataset.id));
  }
});

popularList.addEventListener("keydown", (event) => {
  const card = event.target.closest(".popular-card");

  if ((event.key === "Enter" || event.key === " ") && card) {
    event.preventDefault();
    openFestivalModal(findFestivalById(card.dataset.id));
  }
});

registeredList.addEventListener("keydown", (event) => {
  const card = event.target.closest(".festival-card");

  if ((event.key === "Enter" || event.key === " ") && card) {
    event.preventDefault();
    openFestivalModal(findFestivalById(card.dataset.id));
  }
});

festivalModal.addEventListener("click", (event) => {
  const closeButton = event.target.closest(".modal-close");
  const saveButton = event.target.closest(".save-button");
  const mapButton = event.target.closest(".map");

  if (event.target === festivalModal || closeButton) {
    closeFestivalModal();
    return;
  }

  if (saveButton) {
    saveButton.classList.toggle("is-saved");
    saveButton.textContent = saveButton.classList.contains("is-saved") ? "저장 완료" : "관심 저장";
    return;
  }

  if (mapButton) {
    openNaverDirections(mapButton.dataset);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && !festivalModal.classList.contains("is-hidden")) {
    closeFestivalModal();
  }
});

loginButton.addEventListener("click", () => {
  if (currentUser) {
    currentUser = null;
    pendingProtectedAction = null;
    updateAuthButton();
    showMainPanels();
    surveyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
    return;
  }

  pendingProtectedAction = null;
  showLoginPanel();
});

myPageNavButton.addEventListener("click", () => {
  requireLogin("mypage", showMyPagePanel);
});

eventRegisterNavButton.addEventListener("click", () => {
  requireLogin("registration", showRegistrationPanel);
});

goSignupButton.addEventListener("click", showSignupPanel);

document.querySelectorAll(".auth-back-button").forEach((button) => {
  button.addEventListener("click", () => {
    pendingProtectedAction = null;
    showMainPanels();
    surveyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(loginForm);
  const id = formData.get("loginId").trim();
  const password = formData.get("loginPassword").trim();
  const account = accounts.find((item) => item.id === id && item.password === password);

  if (!account) {
    loginMessage.textContent = "아이디 또는 비밀번호를 확인해 주세요.";
    loginMessage.classList.remove("success");
    return;
  }

  currentUser = account;
  loginForm.reset();
  updateAuthButton();

  if (pendingProtectedAction === "registration") {
    pendingProtectedAction = null;
    showRegistrationPanel();
    return;
  }

  pendingProtectedAction = null;
  showMyPagePanel();
});

signupForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(signupForm);
  const id = formData.get("signupId").trim();
  const password = formData.get("signupPassword").trim();

  if (accounts.some((account) => account.id === id)) {
    signupMessage.textContent = "이미 사용 중인 아이디입니다.";
    signupMessage.classList.remove("success");
    return;
  }

  accounts.push({
    id,
    password,
    role: formData.get("signupRole"),
    phone: formData.get("signupPhone").trim(),
    email: formData.get("signupEmail").trim()
  });

  signupForm.reset();
  signupMessage.textContent = "가입이 완료되었습니다. 로그인해 주세요.";
  signupMessage.classList.add("success");
  window.setTimeout(showLoginPanel, 500);
});

registrationBackButton.addEventListener("click", () => {
  showMainPanels();
  surveyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

registrationForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(registrationForm);
  const newFestival = createRegisteredFestival(formData);
  festivals.push(newFestival);

  registrationForm.reset();
  renderRegisteredFestivals();
  renderPopularFestivals();
  showMainPanels();
  registeredPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

// 다시 찾기: 결과 화면을 숨기고 취향 조사 폼으로 돌아가 새 추천을 받을 수 있게 합니다.
retryButton.addEventListener("click", () => {
  resultPanel.classList.add("is-hidden");
  surveyPanel.classList.remove("is-hidden");
  popularPanel.classList.remove("is-hidden");
  registeredPanel.classList.toggle("is-hidden", !festivals.some((festival) => festival.source === "registered"));
  preferenceForm.reset();
  surveyPanel.scrollIntoView({ behavior: "smooth", block: "start" });
});

renderPopularFestivals();
renderRegisteredFestivals();
updateAuthButton();
