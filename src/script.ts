import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./assets/styles/swiper.scss";

document
  .querySelectorAll<HTMLLIElement>(".menu__item_has-sub")
  .forEach((item) => {
    let isHover = false;
    item.addEventListener("mouseover", () => {
      const subMenu = item.querySelector<HTMLUListElement>(".menu__sub-menu");
      if (!subMenu) return;
      subMenu.style.display = "block";
      setTimeout(() => {
        isHover && subMenu.classList.add("menu__sub-menu_hovered");
      }, 10);
      isHover = true;
    });

    item.addEventListener("mouseleave", () => {
      const subMenu = item.querySelector<HTMLUListElement>(".menu__sub-menu");
      if (!subMenu) return;
      subMenu.classList.remove("menu__sub-menu_hovered");
      isHover = false;
      setTimeout(() => {
        if (!isHover) subMenu.style.display = "";
      }, 500);
    });
  });

new Swiper(".popular-collections-swiper", {
  spaceBetween: 100,
  loop: true,
  modules: [Navigation, Pagination, Autoplay],
  pagination: {
    el: ".popular-collections-swiper-pagination",
    clickable: true,
  },
  navigation: {
    prevEl: ".popular-collections-swiper-prev",
    nextEl: ".popular-collections-swiper-next",
  },
  autoplay: {
    delay: 5000,
  },
});

new Swiper(".best-compilations-swiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  modules: [Navigation],
  navigation: {
    prevEl: ".best-compilations-swiper-prev",
    nextEl: ".best-compilations-swiper-next",
  },
});

new Swiper(".new-compilations-swiper", {
  spaceBetween: 30,
  slidesPerView: 5,
  modules: [Navigation],
  navigation: {
    prevEl: ".new-compilations-swiper-prev",
    nextEl: ".new-compilations-swiper-next",
  },
});
