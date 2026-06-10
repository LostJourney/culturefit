document.addEventListener("DOMContentLoaded", () => {
    const detailRoot = document.querySelector("#event-detail");
    const params = new URLSearchParams(window.location.search);
    const eventId = Number(params.get("id"));
    const event = getApprovedEvents().find((item) => item.id === eventId);

    if (!event) {
        detailRoot.innerHTML = `
            <div class="empty-message">
                <h1>행사를 찾을 수 없습니다.</h1>
                <a class="secondary-button" href="events.html">목록으로 돌아가기</a>
            </div>
        `;
        return;
    }

    const savedIds = getSavedEventIds();
    const isSaved = savedIds.includes(event.id);

    detailRoot.innerHTML = `
        <section class="detail-top">
            <div class="detail-hero">
                <img src="${event.image}" alt="${event.title}">
            </div>
            <aside class="ai-summary-card">
                <h1>${event.title}</h1>
                <div class="ai-chat">
                    <img class="ai-avatar" src="resources/culturefit-only-logo.png" alt="CultureFit AI">
                    <div class="ai-bubble">
                        <span>CultureFit AI</span>
                        <p>${createAiSummary(event)}</p>
                    </div>
                </div>
                <div class="summary-pills">
                    <strong>${event.region}</strong>
                    <strong>${event.category}</strong>
                    <strong>${event.price}</strong>
                </div>
                <div class="detail-actions">
                    <button class="primary-button" id="save-event" type="button">${isSaved ? "관심 행사 저장됨" : "관심 행사 저장"}</button>
                    <a class="secondary-button" href="events.html">목록으로 돌아가기</a>
                </div>
            </aside>
        </section>

        <section class="detail-tabs" aria-label="행사 상세 정보">
            <div class="detail-tab-list" role="tablist">
                <button class="detail-tab is-active" type="button" data-detail-tab="info">행사정보</button>
                <button class="detail-tab" type="button" data-detail-tab="location">행사 위치</button>
                <button class="detail-tab" type="button" data-detail-tab="stores">주변 상권</button>
                <button class="detail-tab" type="button" data-detail-tab="notice">행사 공지 사항</button>
            </div>
            <div class="detail-tab-panel" id="detail-tab-panel"></div>
        </section>
    `;

    document.querySelector("#save-event").addEventListener("click", (eventTarget) => {
        const nextSaved = toggleSavedEvent(event.id);
        eventTarget.currentTarget.textContent = nextSaved ? "관심 행사 저장됨" : "관심 행사 저장";
    });

    setupDetailTabs(event);
});

function setupDetailTabs(event) {
    const tabButtons = document.querySelectorAll("[data-detail-tab]");
    const tabPanel = document.querySelector("#detail-tab-panel");

    function renderTab(tabName) {
        tabButtons.forEach((button) => {
            button.classList.toggle("is-active", button.dataset.detailTab === tabName);
        });

        tabPanel.innerHTML = createTabContent(tabName, event);

        if (tabName === "location") {
            initKakaoMap(event);
        }
    }

    tabButtons.forEach((button) => {
        button.addEventListener("click", () => {
            renderTab(button.dataset.detailTab);
        });
    });

    renderTab("info");
}

function createTabContent(tabName, event) {
    if (tabName === "location") {
        return `
            <div class="detail-info-list">
                ${createDetailRow("장소", `${event.region} ${event.address}`)}
                ${createDetailRow("교통", event.transportInfo)}
                ${createDetailRow("주차", event.parkingInfo)}
            </div>
            <div class="map-placeholder">
                <div id="kakao-map" class="map-container" aria-label="${event.title} 지도"></div>
                <p class="map-message" id="map-message">Kakao 지도 API를 불러오는 중입니다.</p>
            </div>
        `;
    }

    if (tabName === "stores") {
        return `
            <div class="store-grid">
                ${event.nearbyStores.map((store) => `<div class="store-card">${store}</div>`).join("")}
            </div>
        `;
    }

    if (tabName === "notice") {
        return `
            <div class="notice-list">
                <p>행사 일정과 운영 시간은 현장 상황에 따라 변경될 수 있습니다.</p>
                <p>우천 또는 현장 혼잡 시 일부 프로그램이 조정될 수 있습니다.</p>
                <p>방문 전 신청 링크 또는 문의처를 통해 최신 안내를 확인해 주세요.</p>
            </div>
        `;
    }

    return `
        <div class="detail-info-list">
            ${createDetailRow("행사 소개", event.description)}
            ${createDetailRow("일정", `${event.startDate} ~ ${event.endDate}`)}
            ${createDetailRow("시간", event.time)}
            ${createDetailRow("참가비", event.price)}
            ${createDetailRow("신청 방법", `<a href="${event.applyLink}" target="_blank" rel="noreferrer">신청 링크 확인</a>`)}
            ${createDetailRow("문의처", event.contact)}
        </div>
    `;
}

function createAiSummary(event) {
    if (event.id === 1) {
        return "횡성호수길을 따라 산책과 지역 체험을 함께 즐길 수 있는 무료 행사입니다. 자연 경관을 보며 가볍게 걷기 좋고, 주변 한우 식당가와 로컬 카페까지 함께 둘러보기 좋은 주말형 지역 축제입니다.";
    }

    return "AI 요약 기능은 준비 중입니다. 현재는 행사 소개, 일정, 장소, 교통, 주차, 주변 상권 정보를 기준으로 상세 내용을 확인할 수 있습니다.";
}

function createDetailRow(label, value) {
    return `
        <div class="detail-row">
            <strong>${label}</strong>
            <p>${value}</p>
        </div>
    `;
}
