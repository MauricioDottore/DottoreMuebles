//SLIDER1//
document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.slider ul');
    const slides = document.querySelectorAll('.slider ul li');
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const newPosition = -currentIndex * slideWidth;
        slider.style.transition = 'transform 0.5s ease'; // Apply transition
        slider.style.transform = `translateX(${newPosition}px)`;
    }

    setInterval(nextSlide, 3000); // Change slide every 3.5 seconds
});

//SLIDER2//
document.addEventListener('DOMContentLoaded', function () {
    const slider2 = document.querySelector('.slider2 ul');
    const slides = document.querySelectorAll('.slider2 ul li');
    const slideWidth = slides[0].clientWidth;
    let currentIndex = 0;

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateSlider();
    }

    function updateSlider() {
        const newPosition = -currentIndex * slideWidth;
        slider2.style.transition = 'transform 0.5s ease'; // Apply transition
        slider2.style.transform = `translateX(${newPosition}px)`;
    }

    setInterval(nextSlide, 3000); // Change slide every 3.5 seconds
});

//burger menu
document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.querySelector(".hamburger");
    const navMenu = document.querySelector(".nav-menu");

    hamburger.addEventListener("click", () => {
        navMenu.classList.toggle("show");
    });
});
