// -------------------------------- btn tourists ------------------------------------

const btnMinus = document.querySelector('[data-action="minus2"]');
const btnPlus = document.querySelector('[data-action="plus2"]');
const counters = document.querySelector('[data-counter="1"]');
const counters2 = document.querySelector('[data-counter="2"]');
const touristsHidden = document.querySelector('[data-text="2"]');
const touristsHidden2 = document.querySelector('[data-text="4"]');
const text = document.querySelector('[data-text="1"]');
const text2 = document.querySelector('[data-text="3"]');

// Отслеживаем клик на кнопку btnMinus
if (document.querySelector('[data-action="minus2"]') !== null) {
  btnMinus.addEventListener('click', function () {
    if (parseInt(counters.innerText) > 1) {
      counters.innerText = --counters.innerText;
      if (parseInt(counters.innerText) == 1) {
        touristsHidden.style.display = 'none';
        text.style.display = 'block';
      }
    }

    if (parseInt(counters2.innerText) > 1) {
      counters2.innerText = --counters2.innerText;
      if (parseInt(counters.innerText) == 1) {
        touristsHidden2.style.display = 'none';
        text2.style.display = 'block';
      }
    }
  });
};
// Отслеживаем клик на кнопку btnPlus
if (document.querySelector('[data-action="plus2"]') !== null) {
  btnPlus.addEventListener('click', function () {
    if (parseInt(counters.innerText) < 4) {
      counters.innerText = ++counters.innerText;
      if (parseInt(counters.innerText) > 1) {
        text.style.display = 'none';
        touristsHidden.style.display = 'block';
      }
    }

    if (parseInt(counters2.innerText) < 4) {
      counters2.innerText = ++counters2.innerText;
      if (parseInt(counters.innerText) > 1) {
        text2.style.display = 'none';
        touristsHidden2.style.display = 'block';
      }
    }
  });
};
