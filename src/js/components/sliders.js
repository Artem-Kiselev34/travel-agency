import { auto } from "@popperjs/core";
import Swiper, { Navigation, Thumbs, Pagination, Autoplay } from "swiper";

Swiper.use([Navigation, Thumbs, Pagination, Autoplay]);

const slider = document.querySelector(".swiper-container");
const bestFares = document.querySelector(".best-fares__items");

// ----------------------- Swiper main page ------------------------
if (document.querySelector(".swiper-container") !== null) {
  const swiper = new Swiper(slider, {
    slidesPerView: 1,
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    speed: 1500,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    on: {
      init() {
        this.el.addEventListener("mouseover", () => {
          this.autoplay.stop();
        });

        this.el.addEventListener("mouseout", () => {
          this.autoplay.start();
        });
      },
    },
  });

  document
    .getElementsByClassName("swiper-container")[0]
    .addEventListener("mouseover", function () {
      document.querySelector(".swiper-button-prev").style.display = "block";
      document.querySelector(".swiper-button-next").style.display = "block";
    });

  document
    .getElementsByClassName("swiper-container")[0]
    .addEventListener("mouseout", function () {
      document.querySelector(".swiper-button-prev").style.display = "none";
      document.querySelector(".swiper-button-next").style.display = "none";
    });
}

// ----------------------- Section Best Fares ----------------------
const bestfaresSlider = new Swiper(bestFares, {
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: ".best-fares__next ",
    prevEl: ".best-fares__prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 3,
    },
    1024: {
      slidesPerView: 4,
    },
  },
});

//--------------------- Hotel Gallery --------------------------
const thumbsGallery = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
const hotelGallery = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  zoom: true,
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  thumbs: {
    swiper: thumbsGallery,
  },
});

//-------------------------- Room Preview ---------------------------
window.addEventListener("load", () => {
  const roomPreview = new Swiper(".rooms-preview", {
    spaceBetween: 10,
    zoom: true,
    pagination: {
      el: ".rooms-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-btn-next",
      prevEl: ".swiper-btn-prev",
    },
  });
});

//------------------------- Room thumbs Modal --------------------------
const thumbsRoom = new Swiper(".thumbs-room", {
  spaceBetween: 10,
  slidesPerView: 5,
  freeMode: true,
  watchSlidesProgress: true,
});
//------------------------- Room Modal --------------------------
const roomSlider = new Swiper(".room-slider", {
  spaceBetween: 10,
  zoom: true,
  pagination: {
    el: ".room-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-btn-next",
    prevEl: ".swiper-btn-prev",
  },
  thumbs: {
    swiper: thumbsRoom,
  },
});
// --------------------------------------------------
