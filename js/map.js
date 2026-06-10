function initKakaoMap(event) {
    const mapContainer = document.querySelector("#kakao-map");
    const mapMessage = document.querySelector("#map-message");

    if (!mapContainer || !mapMessage) {
        return;
    }

    if (!event.latitude || !event.longitude) {
        mapMessage.textContent = "행사 좌표가 등록되면 이곳에 지도가 표시됩니다.";
        return;
    }

    if (!window.kakao || !window.kakao.maps || !window.kakao.maps.Map) {
        mapMessage.textContent = "Kakao 지도 API를 불러오지 못했습니다. 카카오 개발자 콘솔의 Web 플랫폼 도메인을 확인해 주세요.";
        return;
    }

    const eventPosition = new kakao.maps.LatLng(event.latitude, event.longitude);
    const map = new kakao.maps.Map(mapContainer, {
        center: eventPosition,
        level: 4
    });
    const marker = new kakao.maps.Marker({
        position: eventPosition
    });
    const infoWindow = new kakao.maps.InfoWindow({
        content: `<div class="map-info-window">${event.title}</div>`
    });

    marker.setMap(map);
    infoWindow.open(map, marker);
    mapMessage.textContent = "지도에서 행사 위치를 확인할 수 있습니다.";
}
