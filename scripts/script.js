const burgerIcon = document.querySelector('.nav-burger');
const burgerNav = document.querySelector('.main-nav');
const burgerMenu = document.querySelector('.nav-links');
const body = document.querySelector('body');

function toggleMenu() {
    burgerNav.classList.toggle('nav-active');
    body.classList.toggle('fixed-position');
}

burgerIcon.addEventListener('click', () => {
    toggleMenu();
});

document.addEventListener('click', e => {
    if (e.target !== burgerIcon && e.target !== burgerMenu && burgerNav.classList.contains('nav-active')) {
        toggleMenu();
    }
});
