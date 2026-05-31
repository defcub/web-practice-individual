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