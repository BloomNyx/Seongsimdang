// ==== main임 ====

document.addEventListener("DOMContentLoaded", () => {
  // === 메인 비주얼 슬라이드 ===
  const slides = document.querySelectorAll("#slider .slider");
  const dots = document.querySelectorAll(".dot");
  let current = 0;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    current = index;
  }

  function nextSlide() {
    current = (current + 1) % slides.length;
    showSlide(current);
  }

  setInterval(nextSlide, 4000);

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => showSlide(index));
  });

  // === 패밀리 브랜드 슬라이드 ===
  const familyList = document.querySelector(".family-list");
  const leftArrow = document.querySelector(".family-slider .arrow.left");
  const rightArrow = document.querySelector(".family-slider .arrow.right");

  if (familyList && leftArrow && rightArrow) {
    const itemWidth = 240; // li 하나의 실제 너비 (gap 포함)
    const visibleCount = 4; // 한 번에 보이는 카드 개수
    let scrollPosition = 0;

    const updateTransform = () => {
      familyList.style.transform = `translateX(-${scrollPosition}px)`;
    };

    rightArrow.addEventListener("click", () => {
      const maxScroll =
        (familyList.children.length - visibleCount) * itemWidth;
      scrollPosition = Math.min(scrollPosition + itemWidth, maxScroll);
      updateTransform();
    });

    leftArrow.addEventListener("click", () => {
      scrollPosition = Math.max(scrollPosition - itemWidth, 0);
      updateTransform();
    });
  }
    // 로고 클릭 시 메인 페이지로 이동
document.addEventListener("DOMContentLoaded", () => {
  const logo = document.querySelector(".logo a");

  if (logo) {
    logo.addEventListener("click", (e) => {
      e.preventDefault(); // 기본 링크 동작 막기
      window.location.href = "index.html"; // 메인 페이지로 이동
    });
  }
});
});


  // 부드러운 스크롤 기능
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault(); // 기본 이동 막기
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth', // 부드럽게 이동
          block: 'start'
        });
      }
    });
  });
