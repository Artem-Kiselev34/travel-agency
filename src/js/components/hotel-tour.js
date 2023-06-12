if (document.querySelector(".hotel-tour") !== null) {
  document.addEventListener("DOMContentLoaded", () => {
    (async () => {
      const searchPrams = new URLSearchParams(location.search);
      const id = searchPrams.get("id");
      let response = await fetch("./data.json");
      if (response.ok) {
        // получаем ответ в формате JSON и сохраняем его в data
        let data = await response.json();
        const hotel = document.querySelector("#hotel");
        const gallery = document.querySelector("#gallery");
        const thumbsGallery = document.querySelector("#thumbs-gallery");

        const roomsPreview = document.querySelector("#rooms-preview");
        const roomsPreview2 = document.querySelector("#rooms-preview2");
        const roomsPreview3 = document.querySelector("#rooms-preview3");
        const roomSlider = document.querySelector("#room-slider");
        const thumbsRoom = document.querySelector("#thumbs-room");

        // ------------------------------- Hotel cards ------------------------------------
        hotel.innerHTML += `
        <section class="hotel-descr">
          <div class="hotel-descr__rating ${data[id].rating}"></div>
          <h2 class="hotel-descr__title">${data[id].title}</h2>
          <div class="hotel-descr__place">${data[id].place}</div>
        </section>
        <section class="hotel-preview" data-graph-animation="custom" data-graph-path="hotel">
         <div class="preview">
           <div class="preview__item preview__item--grid"><img class="preview__img" src="${data[id].img1}" alt="${data[id].alt}"></div>
           <div class="preview__item"><img class="preview__img" src="${data[id].img2}" alt="${data[id].alt}"></div>
           <div class="preview__item"><img class="preview__img" src="${data[id].img3}" alt="${data[id].alt}"></div>
           <div class="preview__item"><img class="preview__img" src="${data[id].img4}" alt="${data[id].alt}"></div>
           <div class="preview__item"><img class="preview__img" src="${data[id].img5}" alt="${data[id].alt}"></div>
         </div>
        </section>
        `;
        // ---------------------------- Modal swiper image --------------------------------
        gallery.innerHTML += `
       <div class="swiper-slide"><img src="${data[id].img1}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img2}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img3}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img4}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img5}" alt="${data[id].alt}"></div>
       `;
        thumbsGallery.innerHTML += `
       <div class="swiper-slide"><img src="${data[id].img1}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img2}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img3}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img4}" alt="${data[id].alt}"></div>
       <div class="swiper-slide"><img src="${data[id].img5}" alt="${data[id].alt}"></div>
       `;
        // -------------------------------- Room Slider Preview ------------------------------
        roomsPreview.innerHTML += `
        <div class="swiper-slide"><img src="${data[id].img6}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img7}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img8}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img9}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img10}" alt="${data[id].alt}"></div>
      `;
        roomsPreview2.innerHTML += `
        <div class="swiper-slide"><img src="${data[id].img8}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img7}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img6}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img9}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img10}" alt="${data[id].alt}"></div>
      `;
        roomsPreview3.innerHTML += `
        <div class="swiper-slide"><img src="${data[id].img10}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img7}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img8}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img9}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img6}" alt="${data[id].alt}"></div>
      `;
        //------------------------- Room Slider Modal --------------------------
        roomSlider.innerHTML += `
        <div class="swiper-slide"><img src="${data[id].img6}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img7}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img8}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img9}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img10}" alt="${data[id].alt}"></div>
      `;
        //------------------------- Room Slider thumbs Modal --------------------------
        thumbsRoom.innerHTML += `
        <div class="swiper-slide"><img src="${data[id].img6}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img7}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img8}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img9}" alt="${data[id].alt}"></div>
        <div class="swiper-slide"><img src="${data[id].img10}" alt="${data[id].alt}"></div>
      `;
      }
    })();
  });
}
