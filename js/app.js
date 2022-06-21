const iconMenu = document.querySelector('.header__mobile-btn span');
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

const faqs = document.querySelectorAll('.work__item');
const faqsBtn = document.querySelectorAll('.work__info-btn');

if (window.innerWidth <= 1400) {
    faqs.forEach((faq) => {
        faq.addEventListener("click", () => {
            faq.classList.toggle("opened");
        });
    });
}

const moreBtn = document.querySelectorAll('.work__btn');
const modalClose = document.querySelectorAll('.work__close-btn');


if (window.innerWidth >= 1400) {
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



const subBody = document.querySelectorAll('.features__sub-body');
const linkItem = document.querySelectorAll('.features__link-item');

linkItem.forEach((link, index) => {
    link.addEventListener("click", () => {
        subBody.forEach((sub) => {
            sub.classList.remove("active");
        });
        linkItem.forEach((link) => {
            link.classList.remove("active");
        });
        linkItem[index].classList.add("active");
        subBody[index].classList.add("active");
    });
});

const caseItem = document.querySelectorAll('.cases__item');

caseItem.forEach(item => {
    item.addEventListener("click", () => {
        caseItem.forEach(item => {
            item.classList.remove("active");
        });
        item.classList.add("active");
    });
});
