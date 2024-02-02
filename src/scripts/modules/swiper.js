import Swiper, { Navigation, Pagination, Autoplay, EffectFade } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade]);

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

const blogSlider = document.querySelector(".blog-preview-slider");

if (blogSlider) {
  let currentSlideIndex = 0;
  const blogSlider = new Swiper(blogSlider, {
    slidesPerView: 1,
    spaceBetween: 10,
    effect: "fade",

    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
      clickable: true,
    },

    navigation: {
      prevEl: ".swiper-button-prev.blog-preview-slider-btn-prev",
      nextEl: ".swiper-button-next.blog-preview-slider-btn-next",
    },

    on: {
      slideChange: function () {
        console.log(this.el, this.activeIndex, "changed");
        currentSlideIndex = this.activeIndex;
      },
    },
  });

  const navigators = document.querySelectorAll(
    ".blog-preview-card-navigation button"
  );

  if (navigators) {
    console.log(navigators);

    navigators.forEach((navigator) => {
      navigator.addEventListener("click", (evt) => {
        console.log(evt.currentTarget);
        if (
          evt.currentTarget.classList.contains("blog-preview-card-btn-next")
        ) {
          console.log(blogSlider);
          // blogSlider.slideNext(1000, false);
        }
      });
    });
  }
}
