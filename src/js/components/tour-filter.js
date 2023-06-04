import { cardsData } from './cards-data';

const filters = document.querySelector("#filters");

// ----------------- Filter tours ----------------------------
if (document.querySelector("#product") !== null) {
  document.addEventListener('DOMContentLoaded', () => {
    filters.addEventListener("input", filterProducts);
    function filterProducts() {
      const country = filters.querySelector("#country").value,
        stars = [...filters.querySelectorAll("#stars input:checked")].map((n) => n.value),
        meal = [...filters.querySelectorAll("#meal input:checked")].map((n) => n.value),
        holiday = [...filters.querySelectorAll("#holiday input:checked")].map((n) => n.value),
        distance = [...filters.querySelectorAll("#distance input:checked")].map((n) => n.value),
        beach = [...filters.querySelectorAll("#beach input:checked")].map((n) => n.value),
        priceMin = document.querySelector("#input-min").value,
        priceMax = document.querySelector("#input-max").value;

      outputProducts(
        cardsData.filter(
          (n) =>
            (!country || n.country === country) &&
            (!meal.length || meal.includes(n.meal)) &&
            (!stars.length || stars.includes(n.rating)) &&
            (!holiday.length || holiday.includes(n.holiday)) &&
            (!distance.length || distance.includes(n.distance)) &&
            (!beach.length || beach.includes(n.beach)) &&
            (!priceMin || priceMin <= n.price) &&
            (!priceMax || priceMax >= n.price)
        )
      );
    };

    function outputProducts(product) {
      document.getElementById("product").innerHTML = product
        .map(
          (n) => `
        <div class="${n.class}">
          <div class="card__container">
            <div class="card__image">${n.img}</div>
            <div class="card__content">
              <div class="card__rating ${n.rating}"></div>
              <div class="card__descr">
                <div class="card__title">${n.title}</div>
                <div class="card__place">${n.place}</div>
            </div>
              <div class="card__bottom">
                <a href="${n.href}" class="btn-card btn btn--fill">
                  <div class="price">от ${n.price}<span>&nbsp;₽</span></div>
                </a>
                <div class="more-info">
                  <div class="more-info__item">2 взрослых</div>
                  <div class="more-info__item">7 ночей</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      `
        )
        .join("");
    };

    outputProducts(cardsData);
    filterProducts();
  });
  // ------------------ Range slider -------------------
  const rangeInput = document.querySelectorAll(".range-input input");
  const priceInput = document.querySelectorAll(".price-block__input input");
  let priceGap = 2500;
  priceInput.forEach(input => {
    input.addEventListener("input", e => {
      let minPrice = parseInt(priceInput[0].value),
        maxPrice = parseInt(priceInput[1].value);

      if ((maxPrice - minPrice >= priceGap) && maxPrice <= rangeInput[1].max) {
        if (e.target.className === "input-min") {
          rangeInput[0].value = minPrice;
        } else {
          rangeInput[1].value = maxPrice;
        }
      }
    });
  });
  rangeInput.forEach(input => {
    input.addEventListener("input", e => {
      let minVal = parseInt(rangeInput[0].value),
        maxVal = parseInt(rangeInput[1].value);
      if ((maxVal - minVal) < priceGap) {
        if (e.target.className === "range-min") {
          rangeInput[0].value = maxVal - priceGap
        } else {
          rangeInput[1].value = minVal + priceGap;
        }
      }
      else {
        priceInput[0].value = minVal;
        priceInput[1].value = maxVal;
      }
    });
  });

  //--------------------------------------------------
  if (document.querySelector("#mobile-filter") !== null) {
    const mobileFilter = document.querySelector("#mobile-filter");
    const menuFilters = document.querySelector(".tour-filtration__container");

    mobileFilter.addEventListener('click', () => {
      menuFilters.classList.toggle("block");
    });
  };
};
