const images = ["/imgs/bolochoc.jpg", "/imgs/cup.jpg", "/imgs/bolodeco.jpg", "/imgs/boloroxo.jpg"];
const sliderImage = document.getElementById('slider-image');
let currentIndex = 0;

function nextSlide() {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImage.style.opacity = 0;
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = 0.5;
        sliderImage.style.opacity = 0.7;
        sliderImage.style.opacity = 1;
    },500);
}
setInterval(nextSlide, 4000);
