import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

const catalogTopSlider = document.querySelector(
  ".swiper-container .catalog-top-swiper"
);

if (catalogTopSlider) {
  new Swiper(catalogTopSlider, {
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true,

    breakpoints: {
      420: {
        spaceBetween: 15,
      },

      534: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
  });
}

const catalogSectionSlider = document.querySelector(
  ".swiper-container .catalog-section-swiper"
);

if (catalogSectionSlider) {
  const initialSlide =
    catalogSectionSlider.querySelectorAll(".swiper-slide").length;

  const controls =
    catalogSectionSlider.parentNode.querySelector(".swiper-controls");

  const prevEl = controls.querySelector(".swiper-button-prev");
  const nextEl = controls.querySelector(".swiper-button-next");

  new Swiper(catalogSectionSlider, {
    slidesPerView: 2,
    spaceBetween: 10,
    initialSlide,
    slidesOffsetBefore: 0,
    grabCursor: true,

    navigation: {
      prevEl,
      nextEl,
    },

    breakpoints: {
      534: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
      },

      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetBefore: 20,
      },
    },
  });
}

const reviewSlider = document.querySelector(".swiper-container .review-swiper");

if (reviewSlider) {
  const initialSlide = reviewSlider.querySelectorAll(".swiper-slide").length;

  const controls = reviewSlider.parentNode.querySelector(".swiper-controls");

  let prevEl = null;
  let nextEl = null;

  if (controls) {
    prevEl = controls.querySelector(".swiper-button-prev");
    nextEl = controls.querySelector(".swiper-button-next");
  }

  new Swiper(reviewSlider, {
    slidesPerView: 1,
    spaceBetween: 10,
    initialSlide,
    slidesOffsetBefore: 0,
    grabCursor: true,

    navigation: {
      prevEl: prevEl ? prevEl : null,
      nextEl: nextEl ? nextEl : null,
    },

    breakpoints: {
      534: {
        slidesPerView: 2,
        spaceBetween: 20,
        slidesOffsetBefore: 0,
      },

      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetBefore: 20,
      },
    },
  });
}
