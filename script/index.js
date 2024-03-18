let slideIndex = 0; // Initialize slideIndex
let slideInterval; // Declare slideInterval at the top

function showSlide() {
  let slides = document.querySelectorAll(".slides img");
  // Adjust the index if it's out of the slides' range
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  // Hide all slides and then show the active one
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[slideIndex].classList.add("active");
}

// Initialize the slideshow automatically
showSlide();

// Function to move to the next or previous slide
function moveSlide(n) {
  slideIndex += n;
  clearInterval(slideInterval); // Clear the existing interval
  showSlide();
  startSlideShow(); // Restart the slideshow
}

// Function to start the slideshow
function startSlideShow() {
  slideInterval = setInterval(() => {
    slideIndex++;
    showSlide();
  }, 5000); // Adjust time as needed
}

startSlideShow(); // Start the slideshow
