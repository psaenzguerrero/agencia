const sliderContainer = document.querySelector('.container');
const sliderItems = document.querySelectorAll('.item');
const prev = document.querySelector('.btn.prev');
const next = document.querySelector('.btn.next');

let currentIndex = 0;

function updateSlider() {
    sliderContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
}

prev.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? sliderItems.length - 1 : currentIndex - 1;
    updateSlider();
});

next.addEventListener('click', () => {
    currentIndex = (currentIndex === sliderItems.length - 1) ? 0 : currentIndex + 1;
    updateSlider();
});
