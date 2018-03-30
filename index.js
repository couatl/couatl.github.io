/*
 * TODO: 1. Navbar появляется после скролла первой страницы + анимация к его появлению
 *       3. Кнопка scroll-up
 *       4. Кнопка scroll-down с первой страницы (необязательно)
 *       9. Noscroll класс при нажатии на more в projects
 *       11. Загрузка pdf
 * */

new WOW().init();

let apojButton = document.querySelector('#apoj-button');
apojButton.addEventListener('click', () => {
    let apoj = document.querySelector('#apoj');
    apoj.style.display = 'flex';
});

let forumButton = document.querySelector('#forum-button');
forumButton.addEventListener('click', () => {
    let forum = document.querySelector('#forum');
    forum.style.display = 'flex';
});

let apojCloseButton = document.querySelector('#apoj .projects__overlay_nav');
apojCloseButton.addEventListener('click', () => {
    let apoj = document.querySelector('#apoj');
    apoj.style.display = 'none';
});

let forumCloseButton = document.querySelector('#forum .projects__overlay_nav');
forumCloseButton.addEventListener('click', () => {
    let forum = document.querySelector('#forum');
    forum.style.display = 'none';
});

let menuToggle = document.querySelector('.mobile-nav__button');
menuToggle.addEventListener('click', () => {
    let slidebar = document.querySelector('.mobile-nav__slidebar');
    slidebar.style.display = 'block';
});

const animationElement = $('#profile');
const elementTopPosition = animationElement.offset().top;

const checkView = () => {
    const windowBottomPosition = $(window).scrollTop() + $(window).height();

    if (elementTopPosition <= windowBottomPosition) {
        $('.navbar').addClass('show');
    } else {
        $('.navbar').removeClass('show');
    }
};

$(window).on('scroll resize', checkView);
$(window).trigger('scroll');