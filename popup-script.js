// 팝업 표시
document.addEventListener('DOMContentLoaded', () => {
    const popupOverlay = document.getElementById('popupOverlay');
    const btnClose = document.getElementById('btnClose');
    const btnCancel = document.getElementById('btnCancel');
    const btnHideToday = document.getElementById('btnHideToday');

    // 오늘 하루 보지 않기 여부 확인
    const today = new Date().toDateString();
    const lastHiddenDate = localStorage.getItem('popupHiddenDate');

    if (lastHiddenDate !== today) {
        // 팝업 표시
        if (popupOverlay) {
            popupOverlay.classList.add('show');
        }
    }

    // 닫기 버튼 클릭
    if (btnClose) {
        btnClose.addEventListener('click', () => {
            if (popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });
    }

    // Cancel 버튼 클릭
    if (btnCancel) {
        btnCancel.addEventListener('click', () => {
            if (popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });
    }

    // 오늘 하루 보지 않기 버튼 클릭
    if (btnHideToday) {
        btnHideToday.addEventListener('click', () => {
            const today = new Date().toDateString();
            localStorage.setItem('popupHiddenDate', today);
            if (popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });
    }

    // 오버레이 배경 클릭 시 팝업 닫기
    if (popupOverlay) {
        popupOverlay.addEventListener('click', (e) => {
            if (e.target === popupOverlay) {
                popupOverlay.classList.remove('show');
            }
        });
    }
});
