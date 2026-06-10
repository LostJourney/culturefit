document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#event-form");
    const message = document.querySelector("#register-message");

    form.addEventListener("submit", (submitEvent) => {
        submitEvent.preventDefault();

        const formData = new FormData(form);
        const image = formData.get("image").trim() || "resources/lake-festival.png";
        const applyLink = formData.get("applyLink").trim() || "#";

        addPendingEvent({
            title: formData.get("title").trim(),
            category: formData.get("category"),
            region: formData.get("region").trim(),
            address: formData.get("address").trim(),
            startDate: formData.get("startDate"),
            endDate: formData.get("endDate"),
            time: formData.get("time").trim(),
            price: formData.get("price").trim(),
            image,
            description: formData.get("description").trim(),
            transportInfo: formData.get("transportInfo").trim(),
            parkingInfo: formData.get("parkingInfo").trim(),
            nearbyStores: formData.get("nearbyStores").split(",").map((store) => store.trim()).filter(Boolean),
            applyLink,
            contact: formData.get("contact").trim()
        });

        form.reset();
        message.textContent = "행사가 pending 상태로 저장되었습니다. 관리자 승인 후 목록에 노출됩니다.";
    });
});
