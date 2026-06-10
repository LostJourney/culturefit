document.addEventListener("DOMContentLoaded", () => {
    const weeklyEvents = document.querySelector("#weekly-events");
    const recommendButton = document.querySelector("#ai-recommend-button");
    const recommendSection = document.querySelector("#ai-recommend-section");
    const pickedEventRoot = document.querySelector("#ai-picked-event");
    const recommendGrid = document.querySelector("#ai-recommend-grid");

    if (!weeklyEvents) {
        return;
    }

    const events = getApprovedEvents()
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        .slice(0, 4);

    weeklyEvents.innerHTML = events.map(createEventCard).join("");

    if (recommendButton && recommendSection && pickedEventRoot && recommendGrid) {
        recommendButton.addEventListener("click", () => {
            renderAiRecommendation(recommendSection, pickedEventRoot, recommendGrid);
        });
    }
});

function renderAiRecommendation(section, pickedEventRoot, recommendGrid) {
    const events = getApprovedEvents();
    const [pickedEvent, ...nextEvents] = events;

    if (!pickedEvent) {
        return;
    }

    pickedEventRoot.innerHTML = createPickedEvent(pickedEvent);
    recommendGrid.innerHTML = nextEvents
        .slice(0, 4)
        .map((event, index) => createEventCard(event, { ad: index === 0 }))
        .join("");

    section.classList.remove("is-hidden");
    section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function createPickedEvent(event) {
    const eventDate = new Date(event.startDate);
    const dateText = `${eventDate.getMonth() + 1}.${eventDate.getDate()}`;

    return `
        <a href="detail.html?id=${event.id}">
            <img src="${event.image}" alt="${event.title}">
            <div class="ai-picked-body">
                <span>가장 추천</span>
                <h2>${event.title}</h2>
                <p>${event.region} · ${event.address}</p>
                <p>${dateText} · ${event.time} · ${event.price}</p>
            </div>
        </a>
    `;
}

function createEventCard(event, options = {}) {
    const eventDate = new Date(event.startDate);
    const dateText = `${eventDate.getMonth() + 1}.${eventDate.getDate()}`;

    return `
        <article class="event-card">
            <a href="detail.html?id=${event.id}">
                ${options.ad ? `<span class="ad-badge">(광고)</span>` : ""}
                <img src="${event.image}" alt="${event.title}">
                <div class="event-card-body">
                    <div class="event-meta">
                        <span>${event.region}</span>
                        <span>${event.price}</span>
                    </div>
                    <h3>${event.title}</h3>
                    <p>${event.category} · ${event.address}</p>
                    <p>${dateText} · ${event.time}</p>
                </div>
            </a>
        </article>
    `;
}
