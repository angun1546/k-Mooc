// 맨 위로 버튼
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    scrollTopBtn.classList.add("show");
  } else {
    scrollTopBtn.classList.remove("show");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// 캐러셀 기능
document.querySelectorAll(".carousel-controls").forEach((container) => {
  const prevBtn = container.querySelector(".carousel-prev");
  const nextBtn = container.querySelector(".carousel-next");
  const grid = container.parentElement.querySelector('[class$="-grid"]');

  if (!grid) return;

  let scrollAmount = 0;

  if (prevBtn) {
    prevBtn.addEventListener("click", () => {
      grid.scrollBy({ left: -300, behavior: "smooth" });
      scrollAmount -= 300;
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener("click", () => {
      grid.scrollBy({ left: 300, behavior: "smooth" });
      scrollAmount += 300;
    });
  }
});

// 네비게이션 메뉴 토글
const navToggle = document.querySelector(".nav-toggle");
const navList = document.querySelector(".nav-list");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navList.classList.toggle("active");
  });
}

// 언어 선택기
const languageBtn = document.querySelector(".language-btn");
if (languageBtn) {
  languageBtn.addEventListener("click", (e) => {
    e.stopPropagation();
    // 언어 선택 로직 추가 가능
  });
}

// 탭 버튼 활성화
document.querySelectorAll(".tab-button").forEach((btn) => {
  btn.addEventListener("click", () => {
    document
      .querySelectorAll(".tab-button")
      .forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
  });
});

// 동영상 재생 표시
document.querySelectorAll(".shorts-video").forEach((video) => {
  video.addEventListener("click", () => {
    video.play();
  });

  video.addEventListener("mouseenter", () => {
    video.style.cursor = "pointer";
  });
});

// 패밀리 사이트 드롭다운
const familySiteBtn = document.querySelector(".family-site-btn");
if (familySiteBtn) {
  familySiteBtn.addEventListener("click", () => {
    // 드롭다운 메뉴 표시 로직
    alert("패밀리 사이트");
  });
}

// 검색 기능
const searchBtn = document.querySelector(".nav-search");
if (searchBtn) {
  searchBtn.addEventListener("click", () => {
    const query = prompt("검색어를 입력하세요:");
    if (query) {
      console.log("검색:", query);
      // 검색 로직 추가 가능
    }
  });
}

// 로그인/회원가입 링크
document.querySelectorAll(".login-link, .signup-link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const text = link.textContent.trim();
    alert(`${text} 페이지로 이동합니다.`);
  });
});

// 모든 링크에 페이지 이동 기능 추가
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    // 실제 URL이 없을 경우 기본 동작 방지
  });
});

// 반응형 메뉴
window.addEventListener("resize", () => {
  if (window.innerWidth > 768) {
    if (navList) {
      navList.classList.remove("active");
    }
  }
});

// 부드러운 스크롤 동작 향상
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    const href = this.getAttribute("href");
    if (href !== "#" && href !== "#main") {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// 로딩 완료 시 애니메이션
document.addEventListener("DOMContentLoaded", () => {
  console.log("페이지 로드 완료");

  // 이미지 로드 완료 시 효과
  document.querySelectorAll("img, video").forEach((media) => {
    media.addEventListener("load", () => {
      media.style.opacity = "1";
    });
  });
});

// 성능 최적화: 이미지 지연 로드
if ("IntersectionObserver" in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute("data-src");
        }
        observer.unobserve(img);
      }
    });
  });

  document.querySelectorAll("img[data-src]").forEach((img) => {
    imageObserver.observe(img);
  });
}

// 폼 유효성 검사 (필요시)
function validateForm(form) {
  const inputs = form.querySelectorAll("input[required]");
  let isValid = true;

  inputs.forEach((input) => {
    if (!input.value.trim()) {
      input.style.borderColor = "red";
      isValid = false;
    } else {
      input.style.borderColor = "";
    }
  });

  return isValid;
}

// 액세시빌리티: 키보드 네비게이션
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    // 모달/팝업 닫기 로직
    if (navList && navList.classList.contains("active")) {
      navList.classList.remove("active");
    }
  }
});

/* -------------팝업---------------------- */
const btn = document.querySelector(".popup button");
btn.onclick = () => {
  document.querySelector(".popup").style.display = "none";
};
