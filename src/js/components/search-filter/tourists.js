const btnMinus = document.querySelector('[data-action="btn-minus"]');
const btnPlus = document.querySelector('[data-action="btn-plus"]');
const counter = document.querySelector('[data-counter1]');
const counter2 = document.querySelector('[data-counter2]');
const textAdults = document.querySelector('[data-text="2"]');
const textAdults2 = document.querySelector('[data-text="4"]');
const textAdult = document.querySelector('[data-text="1"]');
const textAdult2 = document.querySelector('[data-text="3"]');

// ------------------------ btnMinus ----------------------------
if (document.querySelector('.tourists-elem') !== null) {
  btnMinus.addEventListener('click', function () {
    if (parseInt(counter.innerText) > 1) {
      counter.innerText = --counter.innerText;
      if (parseInt(counter.innerText) == 1) {
        textAdults.classList.add('is-hidden');
        textAdult.classList.remove('is-hidden');
      };
    };
    if (parseInt(counter2.innerText) > 1) {
      counter2.innerText = --counter2.innerText;
      if (parseInt(counter.innerText) == 1) {
        textAdults2.classList.add('is-hidden');
        textAdult2.classList.remove('is-hidden');
      };
    };

    if (counter2.innerText == 1) {
      btnMinus.classList.add('opacity');
    };
    if (counter2.innerText > 1) {
      btnMinus.classList.remove('opacity');
      btnPlus.classList.remove('opacity');
    }
  });
};

// -------------------------- btnPlus ----------------------------
if (document.querySelector('.tourists-elem') !== null) {
  btnPlus.addEventListener('click', function () {
    if (parseInt(counter.innerText) < 4) {
      counter.innerText = ++counter.innerText;
      if (parseInt(counter.innerText) > 1) {
        textAdult.classList.add('is-hidden');
        textAdults.classList.remove('is-hidden');
      };
    };
    if (parseInt(counter2.innerText) < 4) {
      counter2.innerText = ++counter2.innerText;
      if (parseInt(counter.innerText) > 1) {
        textAdult2.classList.add('is-hidden');
        textAdults2.classList.remove('is-hidden');
      };
    };

    if (counter2.innerText == 4) {
      btnPlus.classList.add('opacity');
    }
    if (counter2.innerText < 4) {
      btnPlus.classList.remove('opacity');
      btnMinus.classList.remove('opacity');
    }
  });
};
