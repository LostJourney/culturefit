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
        <div class="detail-hero">
            <img src="${event.image}" alt="${event.title}">
        </div>
        <div class="detail-content">
            <p class="eyebrow">${event.category} · ${event.region}</p>
            <h1>${event.title}</h1>
            <p class="detail-description">${event.description}</p>
            <div class="detail-actions">
                <button class="primary-button" id="save-event" type="button">${isSaved ? "관심 행사 저장됨" : "관심 행사 저장"}</button>
                <a class="secondary-button" href="events.html">목록으로 돌아가기</a>
            </div>

            <div class="info-grid">
                ${createInfoItem("일정", `${event.startDate} ~ ${event.endDate}`)}
                ${createInfoItem("시간", event.time)}
                ${createInfoItem("장소", `${event.region} ${event.address}`)}
                ${createInfoItem("참가비", event.price)}
                ${createInfoItem("신청 방법", `<a href="${event.applyLink}" target="_blank" rel="noreferrer">신청 링크 확인</a>`)}
                ${createInfoItem("문의처", event.contact)}
                ${createInfoItem("교통 정보", event.transportInfo)}
                ${createInfoItem("주차 정보", event.parkingInfo)}
                ${createInfoItem("주변 상권 정보", event.nearbyStores.join(", "))}
            </div>

            <div class="map-placeholder">
                <div class="map-heading">
                    <strong>행사 위치</strong>
                    <p>${event.address}</p>
                </div>
                <div id="kakao-map" class="map-container" aria-label="${event.title} 지도"></div>
                <p class="map-message" id="map-message">Kakao 지도 API를 불러오는 중입니다.</p>
            </div>
        </div>
    `;

    document.querySelector("#save-event").addEventListener("click", (eventTarget) => {
        const nextSaved = toggleSavedEvent(event.id);
        eventTarget.currentTarget.textContent = nextSaved ? "관심 행사 저장됨" : "관심 행사 저장";
    });

    initKakaoMap(event);
});

function createInfoItem(label, value) {
    return `
        <div class="info-item">
            <strong>${label}</strong>
            <p>${value}</p>
        </div>
    `;
}
