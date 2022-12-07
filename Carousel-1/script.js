let activeSlideIndex = 0;
const sliderImages = document.querySelectorAll(".slider-image");
let sliderLength = sliderImages.length;
const sliderScrollableElement = document.querySelector(".slider-items");
const dotsContainer = document.querySelector(".slider__dots");

function prevSlide() {
  if (activeSlideIndex - 1 >= 0) {
    sliderImages[activeSlideIndex - 1].scrollIntoView({ behavior: "smooth" });
  }
}

function nextSlide() {
  if (activeSlideIndex + 1 <= sliderImages.length - 1) {
    sliderImages[activeSlideIndex + 1].scrollIntoView();
  }
}
function scrollToSlide(slideIndex) {
  if (slideIndex <= sliderImages.length - 1) {
    sliderImages[slideIndex].scrollIntoView();
  }
}

let counter = 0;
sliderImages.forEach((img) => {
  let indexToScroll = counter;
  let button = document.createElement("button");
  button.onclick = () => {
    scrollToSlide(indexToScroll);
  };
  button.classList.add("dotButton");
  dotsContainer.appendChild(button);
  counter++;
});

const sliderDots = document.querySelectorAll(".dotButton");
function selectCurrentSlide(slideIndex) {
  sliderDots.forEach((sliderDot) => {
    sliderDot.classList.remove("active");
  });

  sliderDots[slideIndex].classList.add("active");
}

let oldScrollLeft = sliderScrollableElement.scrollLeft;
let guard = true;
sliderScrollableElement.addEventListener("scroll", () => {
  let sliderImgWidth = sliderImages[activeSlideIndex].clientWidth;

  const sliderIndexToSetActive = Math.round(
    sliderScrollableElement.scrollLeft / sliderImgWidth
  );
  activeSlideIndex = sliderIndexToSetActive;

  selectCurrentSlide(activeSlideIndex);

});

selectCurrentSlide(0);
