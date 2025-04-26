import Swiper from 'swiper';
import 'swiper/css/bundle';

const testimonialsLeftArrow = document.getElementById('testimonialsLeftArrow');
const testimonialsRightArrow = document.getElementById(
  'testimonialsRightArrow'
);

let testimonialsSwiper;

testimonialsSwiper = new Swiper('.testimonials-swiper-container', {
  direction: 'horizontal',
  loop: false,
  grabCursor: true,
  slidesPerView: 1,
  initialSlide: 0,
  spaceBetween: 32,
  grabCursor: true,
  allowTouchMove: true,
  speed: 500,
  breakpoints: {
    1440: {
      slidesPerView: 2,
    },
  },
  on: {
    init: () => {
      document
        .querySelector('.testimonials-swiper-container')
        .classList.add('show');
    },
    slideChange: () => {
      updateTestimonialsArrows();
    },
  },
});

updateTestimonialsArrows();

function updateTestimonialsArrows() {
  if (testimonialsSwiper) {
    testimonialsLeftArrow.disabled = testimonialsSwiper.isBeginning;
    testimonialsRightArrow.disabled = testimonialsSwiper.isEnd;
  }
}

testimonialsLeftArrow.addEventListener('click', () => {
  testimonialsSwiper.slidePrev();
});

testimonialsRightArrow.addEventListener('click', () => {
  testimonialsSwiper.slideNext();
});
