const swiperElements = document.querySelectorAll('.swiper');

swiperElements.forEach((el) => {
  new Swiper(el, {
    slidesPerView: 5,
    spaceBetween: 10,
    loop: false,
    breakpoints: {
      640: {
        slidesPerView: 5,
      },
      1024: {
        slidesPerView: 5,
      },
    },
  });
});
