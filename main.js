document.querySelector('.menu__btn').addEventListener('click', () => {
    document.querySelector('.nav__menu').classList.toggle('show');
});

ScrollReveal().reveal('.showcase');
ScrollReveal().reveal('.news__cards', { delay: 500});
ScrollReveal().reveal('.cards__banner__one', { delay: 500});
ScrollReveal().reveal('cards__banner__two', { delay: 500});