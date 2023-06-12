const products = document.querySelector(".products");
const loadMore = document.querySelector(".products__more");
let quantityProducts = 8;
let dataLength = "";

if (products) {
  document.addEventListener('DOMContentLoaded', () => {
    const fetchProducts = (quantity = 8) => {
      fetch("./product-cards.json")
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          dataLength = data.length;
          products.innerHTML = "";
          for (let i = 0; i < data.length; i++) {
            if (i < quantity) {
              products.innerHTML += `
              <li class="product-card">
                <div class="product-card__slider">
                  <div class="product-card__slides">
                    <div>
                      <img class="product-card__img" src="${data[i].image}" alt="${data[i].title}">
                    </div>
                    <div>
                      <img class="product-card__img" src="${data[i].image2}" alt="${data[i].title}">
                    </div>
                    <div>
                      <img class="product-card__img" src="${data[i].image3}" alt="${data[i].title}">
                    </div>
                  </div>
                <div class="slideshow">
                  <div class="slideshow__item" data-position="0"></div>
                  <div class="slideshow__item" data-position="-290"></div>
                  <div class="slideshow__item" data-position="-580"></div>
                </div>
                </div>
                <div class="product-card__footer">
                  <div class="product-card__foofer-inner">
                    <span class="product-card__title">${data[i].title}</span>
                    <a class="btn-product-card btn btn-reset" href="#">Туры</a>
                  </div>
                </div>
              </li>
           `;
            }

            const sliders = document.querySelectorAll(".product-card__slider");
            sliders.forEach((el) => {
              let line = el.querySelector(".product-card__slides");
              markers = el.querySelector(".slideshow");
              marker = markers.querySelectorAll(".slideshow__item");

              marker.forEach(function (mark) {
                mark.onmousemove = function () {
                  let data = this.dataset.position;
                  line.style.left = `${data}px`;
                };
              });
            });
          }
        });
    };

    fetchProducts(quantityProducts);

    loadMore.addEventListener('click', (e) => {
      quantityProducts = quantityProducts + 4;

      fetchProducts(quantityProducts);

      if (quantityProducts == dataLength) {
        loadMore.style.display = 'none';
      } else {
        loadMore.style.display = 'inline-flex';
      }
    });
  });
};
