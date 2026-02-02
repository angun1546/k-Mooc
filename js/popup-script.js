// 팝업 관련 요소
const popupOverlay = document.getElementById('popupOverlay');
const btnClose = document.getElementById('btnClose');
const btnCancel = document.getElementById('btnCancel');
const btnHideToday = document.getElementById('btnHideToday');

// localStorage 키
const HIDE_MODAL_KEY = 'hideModalUntil';

// 팝업 표시 함수
function showPopup() {
    popupOverlay.classList.add('show');
}

// 팝업 닫기 함수
function closePopup() {
    popupOverlay.classList.remove('show');
}

// 오늘 하루 보지 않기 함수
function hideForToday() {
    // 내일 자정까지 숨김
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    tomorrow.setHours(0, 0, 0, 0);
    
    localStorage.setItem(HIDE_MODAL_KEY, tomorrow.toISOString());
    closePopup();
}

// 팝업 표시 여부 확인 함수
function shouldShowPopup() {
    const hideUntil = localStorage.getItem(HIDE_MODAL_KEY);
    
    if (hideUntil) {
        const hideUntilDate = new Date(hideUntil);
        const now = new Date();
        
        // 저장된 날짜가 현재보다 미래면 팝업을 보여주지 않음
        if (hideUntilDate > now) {
            return false;
        }
    }
    
    return true;
}

// ESC 키 이벤트 리스너
function handleEscapeKey(event) {
    if (event.key === 'Escape' && popupOverlay.classList.contains('show')) {
        closePopup();
    }
}

// 오버레이 클릭 이벤트 (모달 외부 클릭시 닫기)
function handleOverlayClick(event) {
    if (event.target === popupOverlay) {
        closePopup();
    }
}

// 이벤트 리스너 등록
document.addEventListener("DOMContentLoaded", () => {
    if (btnClose) btnClose.addEventListener('click', closePopup);
    if (btnCancel) btnCancel.addEventListener('click', closePopup);
    if (btnHideToday) btnHideToday.addEventListener('click', hideForToday);
    
    document.addEventListener('keydown', handleEscapeKey);
    
    if (popupOverlay) {
        popupOverlay.addEventListener('click', handleOverlayClick);
    }

    // 페이지 로드 시 팝업 표시 여부 확인
    if (shouldShowPopup()) {
        // 약간의 딜레이를 주어 자연스럽게 표시
        setTimeout(showPopup, 500);
    }
});
