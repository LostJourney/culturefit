document.addEventListener("DOMContentLoaded", () => {
    const pendingList = document.querySelector("#pending-list");

    function renderPendingEvents() {
        const pendingEvents = getPendingEvents();

        pendingList.innerHTML = pendingEvents.length
            ? pendingEvents.map(createPendingCard).join("")
            : `<p class="empty-message">승인 대기 중인 행사가 없습니다.</p>`;

        document.querySelectorAll("[data-approve-id]").forEach((button) => {
            button.addEventListener("click", () => {
                approveEvent(Number(button.dataset.approveId));
                renderPendingEvents();
            });
        });
    }

    renderPendingEvents();
});

function createPendingCard(event) {
    return `
        <article class="admin-card">
            <img src="${event.image}" alt="${event.title}">
            <div>
                <p class="eyebrow">${event.category} · ${event.region}</p>
                <h2>${event.title}</h2>
                <p>${event.startDate} ~ ${event.endDate} · ${event.address}</p>
                <p>${event.description}</p>
            </div>
            <button class="primary-button" type="button" data-approve-id="${event.id}">승인</button>
        </article>
    `;
}
