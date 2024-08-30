const slides = document.querySelectorAll(".carousel-slide");
let currentIndex = 0;

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
        slide.style.display = 'block'; // Ensure all slides are visible
    });
}

function nextSlide() {
    currentIndex = (currentIndex + 1) % slides.length;
    showSlide(currentIndex);
}

function prevSlide() {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    showSlide(currentIndex);
}

// Ensure all slides are initially visible
showSlide(currentIndex);

setInterval(nextSlide, 5000); // Auto-advance the carousel every 5 seconds
