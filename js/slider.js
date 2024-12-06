document.getElementById("slider").innerHTML = `
<div class="background">
        <div class="slider-container">
            <div class="slider">
                <div class="slide ligth-mode"><img class="img-slide" src="../imgs/slide-moda/bannerModa2.png" alt="Image 2"></div>
                <div class="slide dark-mode"><img class="img-slide" src="../imgs/banners/bannerBlacks.png" alt="Image 1"></div>
            </div>
            <button class="prev">&#10094;</button>
            <button class="next">&#10095;</button>
        </div>
        <div class="dots-container">
            <span class="dot" data-index="0"></span>
            <span class="dot" data-index="1"></span>
        </div>
    </div>
`;


const slider = document.querySelector('.slider');
const slides = document.querySelectorAll('.slide');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const dots = document.querySelectorAll('.dot');
const sliderContainer = document.querySelector('.slider-container');

let currentIndex = 0; 
let autoSlideInterval;

function updateDots() {
    dots.forEach((dot, index) => {
        if (index === currentIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}

function showSlides(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index; 
    }
    slider.style.transform = `translateX(-${currentIndex * 100}%)`; 
    updateDots(); 
}

function nextSlide() {
    showSlides(currentIndex + 1);
}

function prevSlide() {
    showSlides(currentIndex - 1);
}

dots.forEach(dot => {
    dot.addEventListener('click', () => {
        showSlides(parseInt(dot.dataset.index)); 
    });
});

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);

updateDots();
