const swiper = new Swiper('.slider-main-block', {
    // Optional parameters
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.body-main-block__arrow.swiper-button-next',
        prevEl: '.body-main-block__arrow.swiper-button-prev',
    },
});

// Таби
const tabNavItems = document.querySelectorAll(".tans-deals__button");
const tabItems = document.querySelectorAll(".item-tabs");

const navBlock = document.querySelector(".tans-deals__nav");
const bodiesBlock = document.querySelector(".tabs-deals__body");

for (let tabNavItem of tabNavItems) {
    tabNavItem.onclick = function () {
        if (!tabNavItem.classList.contains("active")) {
            navBlock.querySelector(".active").classList.remove("active");
            tabNavItem.classList.add("active");
            let navArray = Array.from(tabNavItems);
            let index = navArray.indexOf(tabNavItem);
            bodiesBlock.querySelector(".active").classList.remove("active");
            tabItems[index].classList.add("active");
        }
    };
}
