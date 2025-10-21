document.addEventListener("DOMContentLoaded", () => {
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
});
