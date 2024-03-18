import Swiper, {
  Navigation,
  Pagination,
  Autoplay,
  EffectFade,
  Thumbs,
  Controller,
} from "swiper";
Swiper.use([Navigation, Pagination, Autoplay, EffectFade, Thumbs, Controller]);

const catalogTopSlider = document.querySelector(
  ".swiper-container .catalog-top-swiper"
);

if (catalogTopSlider) {
  new Swiper(catalogTopSlider, {
    slidesPerView: 2,
    spaceBetween: 10,
    grabCursor: true,
    speed: 1000,

    breakpoints: {
      420: {
        slidesPerView: 2,
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
    speed: 1000,
    // initialSlide,
    slidesOffsetAfter: 0,
    grabCursor: true,

    navigation: {
      prevEl,
      nextEl,
    },

    breakpoints: {
      534: {
        slidesPerView: 3,
        spaceBetween: 20,
        slidesOffsetAfter: 0,
      },
      768: {
        slidesPerView: "auto",
        spaceBetween: 20,
        slidesOffsetAfter: 20,
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
    centeredSlides: true,
    centeredSlidesBounds: true,
    slidesPerView: "auto",
    watchOverflow: true,
    // freeMode: true,
    // watchSlidesVisibility: true,
    watchSlidesProgress: true,
    direction: "vertical",
  });

  const mainSlider = new Swiper(".product-item-slider", {
    slidesPerView: 1,
    watchOverflow: true,
    // watchSlidesVisibility: true,
    watchSlidesProgress: true,
    // preventInteractionOnTransition: true,
    navigation: {
      nextEl: ".product-item-slider .swiper-button-next",
      prevEl: ".product-item-slider .swiper-button-prev",
    },

    thumbs: {
      swiper: thumbslider,
    },
  });

  // mainSlider.on("slideChangeTransitionStart", function () {
  //   thumbslider.slideTo(mainSlider.activeIndex);
  // });

  // thumbslider.on("transitionStart", function () {
  //   mainSlider.slideTo(thumbslider.activeIndex);
  // });

  // two way control
  // mainSlider.controller.control = thumbslider;
  // thumbslider.controller.control = mainSlider;
}

// var swiper = new Swiper(".mySwiper", {
//   spaceBetween: 10,
//   slidesPerView: 4,
//   freeMode: true,
//   watchSlidesProgress: true,
// });
// var swiper2 = new Swiper(".mySwiper2", {
//   spaceBetween: 10,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   thumbs: {
//     swiper: swiper,
//   },
// });
