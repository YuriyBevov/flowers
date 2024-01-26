import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
Swiper.use([Navigation, Pagination, Autoplay]);

const catalogSectionSwiper = document.querySelector(".catalog-section-swiper");

if (catalogSectionSwiper) {
  new Swiper(catalogSectionSwiper, {
    slidesPerView: 3,
    spaceBetween: 20,
  });
}
