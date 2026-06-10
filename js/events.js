document.addEventListener("DOMContentLoaded", () => {
    const eventList = document.querySelector("#event-list");
    const summary = document.querySelector("#result-summary");
    const searchInput = document.querySelector("#search-input");
    const regionFilter = document.querySelector("#region-filter");
    const dateFilter = document.querySelector("#date-filter");
    const categoryFilter = document.querySelector("#category-filter");
    const priceFilter = document.querySelector("#price-filter");
    const resetButton = document.querySelector("#reset-filters");
    const params = new URLSearchParams(window.location.search);
    const events = getApprovedEvents();

    fillRegionOptions(regionFilter, events);
    applyInitialParams(params, searchInput, regionFilter, categoryFilter, priceFilter);

    function render() {
        const filteredEvents = filterEvents(events, {
            keyword: searchInput.value.trim(),
            region: regionFilter.value,
            date: dateFilter.value,
            category: categoryFilter.value,
            price: priceFilter.value
        });

        summary.textContent = `${filteredEvents.length}개의 승인된 행사가 있습니다.`;
        eventList.innerHTML = filteredEvents.length
            ? filteredEvents.map(createEventCard).join("")
            : `<p class="empty-message">조건에 맞는 행사가 없습니다.</p>`;
    }

    [searchInput, regionFilter, dateFilter, categoryFilter, priceFilter].forEach((control) => {
        control.addEventListener("input", render);
        control.addEventListener("change", render);
    });

    resetButton.addEventListener("click", () => {
        searchInput.value = "";
        regionFilter.value = "";
        dateFilter.value = "";
        categoryFilter.value = "";
        priceFilter.value = "";
        render();
    });

    render();
});

function fillRegionOptions(select, events) {
    const regions = [...new Set(events.map((event) => event.region))].sort();

    select.innerHTML += regions
        .map((region) => `<option value="${region}">${region}</option>`)
        .join("");
}

function applyInitialParams(params, searchInput, regionFilter, categoryFilter, priceFilter) {
    searchInput.value = params.get("q") || "";
    regionFilter.value = params.get("region") || "";
    categoryFilter.value = params.get("category") || "";
    priceFilter.value = params.get("price") || "";
}

function filterEvents(events, filters) {
    return events.filter((event) => {
        const keywordTarget = `${event.title} ${event.region} ${event.address} ${event.category}`;
        const matchesKeyword = !filters.keyword || keywordTarget.includes(filters.keyword);
        const matchesRegion = !filters.region || event.region === filters.region;
        const matchesDate = !filters.date || (event.startDate <= filters.date && event.endDate >= filters.date);
        const matchesCategory = !filters.category || event.category === filters.category;
        const matchesPrice = !filters.price || (filters.price === "무료" ? event.price === "무료" : event.price !== "무료");

        return matchesKeyword && matchesRegion && matchesDate && matchesCategory && matchesPrice;
    });
}

function createEventCard(event) {
    return `
        <article class="event-card">
            <a href="detail.html?id=${event.id}">
                <img src="${event.image}" alt="${event.title}">
                <div class="event-card-body">
                    <div class="event-meta">
                        <span>${event.category}</span>
                        <span>${event.price}</span>
                    </div>
                    <h3>${event.title}</h3>
                    <p>${event.region} · ${event.address}</p>
                    <p>${event.startDate} ~ ${event.endDate}</p>
                </div>
            </a>
        </article>
    `;
}
