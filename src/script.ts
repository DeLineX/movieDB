import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "./assets/styles/swiper.scss";

const menuInit = () => {
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
};
const swipersInit = () => {
  enum Breakpoint {
    XS = 0,
    SM = 576,
    MD = 768,
    LG = 1300,
    XL = 1800,
  }

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
    slidesPerView: 2,
    modules: [Navigation],
    navigation: {
      prevEl: ".best-compilations-swiper-prev",
      nextEl: ".best-compilations-swiper-next",
    },
    breakpoints: {
      [Breakpoint.MD]: {
        slidesPerView: 3,
      },
      [Breakpoint.LG]: {
        slidesPerView: 5,
      },
    },
  });

  new Swiper(".new-compilations-swiper", {
    spaceBetween: 30,
    slidesPerView: 2,
    modules: [Navigation],
    navigation: {
      prevEl: ".new-compilations-swiper-prev",
      nextEl: ".new-compilations-swiper-next",
    },
    breakpoints: {
      [Breakpoint.MD]: {
        slidesPerView: 3,
      },
      [Breakpoint.LG]: {
        slidesPerView: 5,
      },
    },
  });
};

const headerControlsInit = () => {
  const burger = document.querySelector(".header__burger") as HTMLDivElement;
  const search = document.querySelector(
    ".header__search-btn"
  ) as HTMLDivElement;
  const searchMenu = document.querySelector(
    ".header__mobile-search"
  ) as HTMLDivElement;
  const navMenu = document.querySelector(
    ".header__mobile-nav"
  ) as HTMLDivElement;

  document.querySelector(".header__burger")?.addEventListener("click", () => {
    if (burger.classList.contains("header__burger_opened")) {
      burger.classList.remove("header__burger_opened");
      navMenu.classList.remove("mobile-menu_opened");
      searchMenu.classList.remove("mobile-menu_opened");
      search.style.display = "";
      return;
    }
    burger.classList.add("header__burger_opened");
    navMenu.classList.add("mobile-menu_opened");
    search.style.display = "none";
  });

  document
    .querySelector(".header__search-btn")
    ?.addEventListener("click", () => {
      burger.classList.add("header__burger_opened");
      searchMenu.classList.add("mobile-menu_opened");
      navMenu.classList.remove("mobile-menu_opened");
      search.style.display = "none";
    });
};

menuInit();
swipersInit();
headerControlsInit();
