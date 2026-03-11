// GSAP Draggable 활성화
gsap.registerPlugin(Draggable);

document.addEventListener("DOMContentLoaded", () => {
  initToTop();
  initSliders();
  initCategoryDrag();
  initMobileMenu();
});

// 상단 이동 버튼
function initToTop() {
  const btn = document.querySelector("#toTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) btn.classList.add("show");
    else btn.classList.remove("show");
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

// 슬라이더 (마이크로러닝, 숏폼)
function initSliders() {
  const sliders = ["#microSlider", "#shortsSlider"];

  sliders.forEach((id) => {
    const wrapper = document.querySelector(id);
    if (!wrapper) return;

    const track = wrapper.querySelector(".slider-track");
    const container = wrapper.querySelector(".slider-container");
    const prevBtn = wrapper.querySelector(".prev");
    const nextBtn = wrapper.querySelector(".next");

    let currentX = 0;

    const move = (direction) => {
      const cards = track.querySelectorAll("article");
      if (cards.length === 0) return;

      const cardW = cards[0].offsetWidth;
      const gap = 30;
      const step = cardW + gap;

      // 스크롤 가능 최대치 계산
      const maxScroll = track.scrollWidth - container.offsetWidth;

      currentX += direction * step;

      // 경계 처리
      if (currentX > 0) currentX = 0;
      if (Math.abs(currentX) > maxScroll) currentX = -maxScroll;

      gsap.to(track, {
        x: currentX,
        duration: 0.5,
        ease: "power2.out",
        overwrite: true,
      });
    };

    nextBtn.addEventListener("click", () => move(-1));
    prevBtn.addEventListener("click", () => move(1));
  });
}

// 카테고리 드래그
function initCategoryDrag() {
  const container = document.querySelector("#categoryDrag");
  const track = document.querySelector(".drag-track");
  if (!container || !track) return;

  const drag = Draggable.create(track, {
    type: "x",
    bounds: container,
    edgeResistance: 0.6,
    inertia: true,
  })[0];

  const cards = track.querySelectorAll(".cat-card");
  cards.forEach((card) => {
    card.addEventListener("click", () => {
      if (drag.isDragging) return;
      cards.forEach((c) => c.classList.remove("active"));
      card.classList.add("active");
    });
  });
}

// 모바일 메뉴
function initMobileMenu() {
  const btn = document.querySelector(".m-menu-btn");
  if (btn) {
    btn.addEventListener("click", () => alert("메뉴 기능을 준비 중입니다."));
  }
}
