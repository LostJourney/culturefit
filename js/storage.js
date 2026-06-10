const EVENT_STORAGE_KEY = "culturefit-events";
const SAVED_EVENT_KEY = "culturefit-saved-events";

function readStoredEvents() {
    const rawEvents = localStorage.getItem(EVENT_STORAGE_KEY);

    if (!rawEvents) {
        return [];
    }

    try {
        return JSON.parse(rawEvents);
    } catch {
        return [];
    }
}

function writeStoredEvents(events) {
    localStorage.setItem(EVENT_STORAGE_KEY, JSON.stringify(events));
}

function getAllEvents() {
    return [...DEFAULT_EVENTS, ...readStoredEvents()];
}

function getApprovedEvents() {
    return getAllEvents().filter((event) => event.status === "approved");
}

function getPendingEvents() {
    return readStoredEvents().filter((event) => event.status === "pending");
}

function addPendingEvent(eventData) {
    const storedEvents = readStoredEvents();
    const nextId = Date.now();
    const newEvent = {
        id: nextId,
        ...eventData,
        status: "pending"
    };

    writeStoredEvents([...storedEvents, newEvent]);
    return newEvent;
}

function approveEvent(eventId) {
    const updatedEvents = readStoredEvents().map((event) => {
        if (event.id === eventId) {
            return { ...event, status: "approved" };
        }

        return event;
    });

    writeStoredEvents(updatedEvents);
}

function getSavedEventIds() {
    const rawIds = localStorage.getItem(SAVED_EVENT_KEY);

    if (!rawIds) {
        return [];
    }

    try {
        return JSON.parse(rawIds);
    } catch {
        return [];
    }
}

function toggleSavedEvent(eventId) {
    const savedIds = getSavedEventIds();
    const nextIds = savedIds.includes(eventId)
        ? savedIds.filter((id) => id !== eventId)
        : [...savedIds, eventId];

    localStorage.setItem(SAVED_EVENT_KEY, JSON.stringify(nextIds));
    return nextIds.includes(eventId);
}
