// Swiper 7.4.1
import './vendor/swiper';
import './vendor/focus-visible-polyfill';

/* eslint-disable*/

const slider = new Swiper('.comments__swiper', {
  spaceBetween: 405,
  navigation: {
    nextEl: '.comments__button-next',
    prevEl: '.comments__button-prev',
  },
});

const slide = new Swiper('.coaches__swiper', {
  direction: 'horizontal',
    spaceBetween: 300,
    grabCursor: true,
    loop: true,
    breakpoints: {
      320: {
        slidesPerView: 1,
        initialSlide: 2,
      },
      580: {
        slidesPerView: 2,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1090: {
        slidesPerView: 3,
        spaceBetween: 30,
        initialSlide: 2,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  navigation: {
    nextEl: '.coaches__button-next',
    prevEl: '.coaches__button-prev',
  },
});

const slideDouble = document.querySelectorAll('.swiper-slide-duplicate');

slideDouble.forEach((el) => {
  el.removeAttribute('tabindex');
});
