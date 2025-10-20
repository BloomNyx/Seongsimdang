const slides = document.querySelectorAll("#slider .slider");
const dots = document.querySelectorAll(".dot");

let current = 0;

// 슬라이드 표시
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  current = index;
}

// 다음 슬라이드
function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

// 자동 전환 (4초 간격)
setInterval(nextSlide, 4000);

// dot 클릭 시 해당 슬라이드로 이동
dots.forEach((dot, index) => {
  dot.addEventListener("click", () => showSlide(index));
});
