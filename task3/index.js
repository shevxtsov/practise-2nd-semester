const images = ["image_1.jpg", "image_2.jpg", "image_3.jpg"];
let currentIndex = 0;
const sliderImage = document.getElementById("slider-image");
const imageCounter = document.getElementById("image-counter");

document.getElementById("prev").addEventListener("click", () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateSlider();
});

document.getElementById("next").addEventListener("click", () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateSlider();
});

function updateSlider() {
  sliderImage.classList.remove("show");

  setTimeout(() => {
    sliderImage.src = images[currentIndex];
    sliderImage.classList.add("show");
    imageCounter.textContent = `Изображение ${currentIndex + 1} из ${
      images.length
    }`;
  }, 300);
}
