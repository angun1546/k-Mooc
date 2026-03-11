(function() {
  const overlay = document.getElementById('popupOverlay');
  const btns = {
    close: document.getElementById('btnClose'),
    cancel: document.getElementById('btnCancel'),
    hideToday: document.getElementById('btnHideToday')
  };
  
  const KEY = 'kmooc_hide_popup';

  const close = () => overlay && overlay.classList.remove('show');

  const hideForToday = () => {
    const expiry = new Date();
    expiry.setHours(24, 0, 0, 0);
    localStorage.setItem(KEY, expiry.getTime());
    close();
  };

  const init = () => {
    if (!overlay) return;

    const hideUntil = localStorage.getItem(KEY);
    if (!hideUntil || new Date().getTime() > hideUntil) {
      setTimeout(() => overlay.classList.add('show'), 500);
    }

    btns.close?.addEventListener('click', close);
    btns.cancel?.addEventListener('click', close);
    btns.hideToday?.addEventListener('click', hideForToday);
    
    overlay.addEventListener('click', (e) => {
      if (e.target === overlay) close();
    });
  };

  init();
})();
