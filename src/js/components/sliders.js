import Swiper, { Navigation, Pagination, Autoplay } from 'swiper';

Swiper.use([Navigation, Pagination, Autoplay]);


const slider = document.querySelector('.swiper-container');
const bestFares = document.querySelector('.best-fares__items');

// ---------------------------------------------------------------------------

const swiper = new Swiper(slider, {
  slidesPerView: 1,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  speed: 1500,
  // autoplay: {
  // 	delay: 3000,
  // },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // on: {
  // 	init() {
  // 	  this.el.addEventListener('mouseover', () => {
  // 		this.autoplay.stop();
  // 	  });

  // 	  this.el.addEventListener('mouseout', () => {
  // 		this.autoplay.start();
  // 	  });
  // 	}
  //   }
});

document.getElementsByClassName("swiper-container")[0].addEventListener("mouseover", function () {
  document.querySelector('.swiper-button-prev').style.display = 'block';
  document.querySelector('.swiper-button-next').style.display = 'block';
});

document.getElementsByClassName("swiper-container")[0].addEventListener("mouseout", function () {
  document.querySelector('.swiper-button-prev').style.display = 'none';
  document.querySelector('.swiper-button-next').style.display = 'none';
});

// --------------------------------------------------------------------------------

const bestfaresSlider = new Swiper(bestFares, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.best-fares__next ',
    prevEl: '.best-fares__prev',
  },
  breakpoints: {
    576: {
      slidesPerView: 2
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    }
  }
});
