// БУРГЕР МЕНЮ
const iconBlock = document.getElementById('iconBlock');
const iconOpen = document.getElementById('iconOpen');
const iconClose = document.getElementById('iconClose');
const navMenu = document.querySelector('.nav-menu');

iconBlock.addEventListener('click', () => {
    navMenu.classList.toggle('menu-open');
    iconOpen.classList.toggle('d-none');
    iconClose.classList.toggle('d-none');
});

// ПРИ СКРОЛІ
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    // Якщо проскролили більше 50px вниз - додає клас
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
});
const hiddenElements = document.querySelectorAll('.animate-on-scroll');
hiddenElements.forEach((el) => observer.observe(el));

// =========================================
// PORTFOLIO SLIDER
// =========================================

const track = document.getElementById('portfolioTrack');
const slides = document.querySelectorAll('.portfolio-slide');
const btnPrev = document.getElementById('btnPrev');
const btnNext = document.getElementById('btnNext');
const dots = document.querySelectorAll('.portfolio-pagination .dot');

let currentIndex = 0;

function goToSlide(index) {
    currentIndex = index;

    const gap = parseInt(window.getComputedStyle(track).gap) || 0;
    track.style.transform = `translateX(-${index * (slides[0].clientWidth + gap)}px)`;
    dots.forEach((dot, i) => dot.classList.toggle('active', i === index));

    btnPrev.style.opacity = index === 0 ? "0.5" : "1";
    btnNext.style.opacity = index === slides.length - 1 ? "0.5" : "1";
}
btnNext.addEventListener('click', () => { if (currentIndex < slides.length - 1) goToSlide(currentIndex + 1) });
btnPrev.addEventListener('click', () => { if (currentIndex > 0) goToSlide(currentIndex - 1) });
dots.forEach((dot, i) => dot.addEventListener('click', () => goToSlide(i)));
window.addEventListener('resize', () => goToSlide(0));

goToSlide(0);