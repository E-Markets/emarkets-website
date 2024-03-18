let slideIndex = 1;
showSlide(slideIndex);

function moveSlide(n) {
  showSlide((slideIndex += n));
}

function showSlide(n) {
  let slides = document.querySelectorAll(".slides img");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  // First, remove the active class from all slides
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  // Then, add the active class to the current slide
  slides[slideIndex - 1].classList.add("active");
}

setInterval(function () {
  moveSlide(1);
}, 3000); // Change slide every 3 seconds
