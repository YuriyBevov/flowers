import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Thumbs,
  Controller,
} from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs, Controller]);

document.addEventListener("DOMContentLoaded", () => {
  const catalogTopSlider = document.querySelector(
    ".swiper-container .catalog-top-swiper"
  );

  if (catalogTopSlider) {
    new Swiper(catalogTopSlider, {
      slidesPerView: 1,
      spaceBetween: 10,
      grabCursor: true,
      speed: 1000,

      breakpoints: {
        375: {
          slidesPerView: 2,
          spaceBetween: 15,
        },

        534: {
          slidesPerView: 3,
          spaceBetween: 20,
        },

        768: {
          slidesPerView: 4,
          spaceBetween: 20,
        },
      },
    });
  }

  const catalogSectionSlider = document.querySelector(
    ".swiper-container .catalog-section-swiper"
  );

  if (catalogSectionSlider) {
    const controls =
      catalogSectionSlider.parentNode.querySelector(".swiper-controls");

    const prevEl = controls.querySelector(".swiper-button-prev");
    const nextEl = controls.querySelector(".swiper-button-next");

    new Swiper(catalogSectionSlider, {
      slidesPerView: 2,
      spaceBetween: 10,
      speed: 1000,
      // slidesOffsetAfter: 0,
      // grabCursor: true,

      navigation: {
        prevEl,
        nextEl,
      },

      breakpoints: {
        534: {
          slidesPerView: 3,
          spaceBetween: 20,
          // slidesOffsetAfter: 0,
        },
        768: {
          slidesPerView: "auto",
          spaceBetween: 20,
          // slidesOffsetAfter: 20,
        },
      },
    });
  }

  const reviewSlider = document.querySelector(
    ".swiper-container .review-swiper"
  );

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
      // initialSlide,
      slidesOffsetAfter: 20,
      grabCursor: true,
      speed: 1000,

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

  const blogSlider = document.querySelector(".blog-preview-slider");

  if (blogSlider) {
    let currentSlideIndex = 0;

    const slider = new Swiper(blogSlider, {
      slidesPerView: 1,
      spaceBetween: 10,
      effect: "fade",
      grabCursor: true,
      speed: 1000,

      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
        clickable: true,
      },

      on: {
        afterInit: function () {
          currentSlideIndex = this.activeIndex;
        },

        slideChange: function () {
          currentSlideIndex = this.activeIndex;
        },
      },
    });

    const navigators = document.querySelectorAll(
      ".blog-preview-card-navigation button"
    );

    if (navigators) {
      const sliderSlideTo = (index) => slider.slideTo(index);
      const onClickChangeSlide = (evt) => {
        if (
          evt.currentTarget.classList.contains("blog-preview-card-btn-next") &&
          currentSlideIndex !== slider.slides.length - 1
        ) {
          currentSlideIndex++;
          sliderSlideTo(currentSlideIndex);
        }

        if (
          evt.currentTarget.classList.contains("blog-preview-card-btn-prev") &&
          currentSlideIndex !== 0
        ) {
          currentSlideIndex--;
          sliderSlideTo(currentSlideIndex);
        }
      };

      navigators.forEach((navigator) => {
        navigator.addEventListener("click", onClickChangeSlide);
      });
    }
  }

  const sortSlider = document.querySelector(".sort-swiper-slider");

  if (sortSlider) {
    new Swiper(sortSlider, {
      slidesPerView: "auto",
      spaceBetween: 30,
      speed: 1000,
    });
  }

  const productItemSlider = document.querySelector(".product-item-slider");

  if (productItemSlider) {
    const thumbslider = new Swiper(".product-item-thumbslider", {
      slidesPerView: 3,
      watchOverflow: true,
      spaceBetween: 10,
      watchSlidesProgress: true,
      direction: "vertical",
    });

    const mainSlider = new Swiper(".product-item-slider", {
      slidesPerView: 1,
      watchOverflow: true,
      watchSlidesProgress: true,

      effect: "fade",
      preventInteractionOnTransition: true,
      navigation: {
        nextEl: ".product-item-slider .swiper-button-next",
        prevEl: ".product-item-slider .swiper-button-prev",
      },

      thumbs: {
        swiper: thumbslider,
      },
    });
  }
});
