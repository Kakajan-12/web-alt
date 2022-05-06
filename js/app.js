const iconMenu = document.querySelector('.menu__button span');
const bodyLock = document.querySelector('body');
const headerOpen = document.querySelector('.header');
const headerClass = document.querySelector('.header__nav');

if (iconMenu) {
    iconMenu.addEventListener("click", ()=> {
        iconMenu.classList.toggle('opened');
        bodyLock.classList.toggle('lock');
        headerOpen.classList.toggle('opened');
        headerClass.classList.toggle('opened');
    });
}

const faqs = document.querySelectorAll('.step__item');
const faqsBtn = document.querySelectorAll('.more__info-btn');

faqs.forEach((faq) => {
    faq.addEventListener("click", () => {
        faq.classList.toggle("opened");
    });
});
