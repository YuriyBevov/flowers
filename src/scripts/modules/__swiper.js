import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

const catalogSectionSwipers = document.querySelectorAll(
  ".swiper-container .catalog-section-swiper"
);

if (catalogSectionSwipers) {
  catalogSectionSwipers.forEach((slider) => {
    /*slide count*/
    const count = slider.dataset.count;
    /*slide count*/

    /*reverse direction*/
    let initialSlide = 0;

    // const offset = slider.dataset.offset;

    const isReversed = slider.dataset.reverse;
    if (isReversed) {
      initialSlide = slider.querySelectorAll(".swiper-slide").length;
    }

    /*reverse direction*/

    const controls = slider.parentNode.querySelector(".swiper-controls");
    let prevBtn = null;
    let nextBtn = null;

    if (controls) {
      prevBtn = controls.querySelector(".swiper-button-prev");
      nextBtn = controls.querySelector(".swiper-button-next");
    }

    const swiper = new Swiper(slider, {
      slidesPerView: 1,
      spaceBetween: 20,
      initialSlide,
      slidesOffsetBefore: 0,

      navigation: {
        prevEl: prevBtn,
        nextEl: nextBtn,
      },

      breakpoints: {
        534: {
          slidesPerView: count ? count : "auto",
          slidesOffsetBefore: isReversed ? 20 : null,
        },
      },
    });
  });
}
