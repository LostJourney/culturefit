document.addEventListener("DOMContentLoaded", () => {
    const weeklyEvents = document.querySelector("#weekly-events");

    if (!weeklyEvents) {
        return;
    }

    const events = getApprovedEvents()
        .sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
        .slice(0, 4);

    weeklyEvents.innerHTML = events.map(createEventCard).join("");
});

function createEventCard(event) {
    const eventDate = new Date(event.startDate);
    const dateText = `${eventDate.getMonth() + 1}.${eventDate.getDate()}`;

    return `
        <article class="event-card">
            <a href="detail.html?id=${event.id}">
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
