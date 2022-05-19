const iconMenu = document.querySelector('.menu__button span');
const bodyLock = document.querySelector('body');
const headerOpen = document.querySelector('.header');
const headerClass = document.querySelector('.header__nav');

if (iconMenu) {
    iconMenu.addEventListener("click", () => {
        iconMenu.classList.toggle('opened');
        bodyLock.classList.toggle('lock');
        headerOpen.classList.toggle('opened');
        headerClass.classList.toggle('opened');
    });
}

const faqs = document.querySelectorAll('.step__item');
const faqsBtn = document.querySelectorAll('.more__info-btn');

if (window.innerWidth <= 767) {
    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("opened");
        });
    });
}

const moreBtn = document.querySelectorAll('.step__btn');
const modalClose = document.querySelectorAll('.more__close-btn');


if (window.innerWidth >= 767) {
    moreBtn.forEach((btn, i) => {
        const modal = document.getElementById(i);
        btn.addEventListener("click", () => {
            modal.classList.add("show");
            bodyLock.classList.add('lock');
        });
    });

    modalClose.forEach((btnClose, i) => {
        const modal = document.getElementById(i);
        btnClose.addEventListener("click", () => {
            modal.classList.remove("show");
            bodyLock.classList.remove('lock');
        });
    });
}
