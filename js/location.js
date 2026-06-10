const LOCATION_STORAGE_KEY = "culturefit-user-location";

document.addEventListener("DOMContentLoaded", () => {
    const locationStatus = document.querySelector(".location-status");

    if (!locationStatus) {
        return;
    }

    const savedLocation = getSavedLocation();

    if (savedLocation) {
        locationStatus.textContent = "위치 사용 중";
        return;
    }

    requestUserLocation(locationStatus);
});

function getSavedLocation() {
    const rawLocation = localStorage.getItem(LOCATION_STORAGE_KEY);

    if (!rawLocation) {
        return null;
    }

    try {
        return JSON.parse(rawLocation);
    } catch {
        return null;
    }
}

function requestUserLocation(status) {
    if (!navigator.geolocation) {
        status.textContent = "위치 기능을 지원하지 않는 브라우저입니다.";
        return;
    }

    status.textContent = "위치 권한 요청 중";

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const userLocation = {
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                accuracy: position.coords.accuracy,
                savedAt: new Date().toISOString()
            };

            localStorage.setItem(LOCATION_STORAGE_KEY, JSON.stringify(userLocation));
            status.textContent = "위치 사용 중";
        },
        (error) => {
            status.textContent = getLocationErrorMessage(error);
        },
        {
            enableHighAccuracy: false,
            timeout: 8000,
            maximumAge: 1000 * 60 * 10
        }
    );
}

function getLocationErrorMessage(error) {
    if (error.code === error.PERMISSION_DENIED) {
        return "위치 권한이 거부되었습니다.";
    }

    if (error.code === error.POSITION_UNAVAILABLE) {
        return "현재 위치를 확인할 수 없습니다.";
    }

    if (error.code === error.TIMEOUT) {
        return "위치 확인 시간이 초과되었습니다.";
    }

    return "위치 확인에 실패했습니다.";
}
