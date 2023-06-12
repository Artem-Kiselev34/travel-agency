if (document.querySelector(".nights-body") !== null) {
  const nightsBody = document.querySelector('.nights-body');
  nightsBody.addEventListener("click", function (event) {

    const counterWrapper = event.target.closest(".counter-wrapper");
    const spanCounter = document.querySelector("[data-digit]");

    // const counter1 = counterWrapper.querySelector("[data-counter1]");
    const counter1 = counterWrapper.querySelector('[data-counter="1"]');
    const counter2 = counterWrapper.querySelector('[data-counter="2"]');
    const counter3 = counterWrapper.querySelector('[data-counter="3"]');
    const counter4 = counterWrapper.querySelector('[data-counter="4"]');

    const plus = document.querySelector('[data-action="plus"]');
    const plus2 = document.querySelector('[data-action="plus2"]');
    const minus = document.querySelector('[data-action="minus"]');
    const minus2 = document.querySelector('[data-action="minus2"]');

    //--- span с текстом 'ночей' ---
    const textNights = document.querySelector("[data-nights]");   // data counter2  data counter4
    const textNights3 = document.querySelector("[data-nights3]"); // data counter
    const textNights5 = document.querySelector("[data-nights5]"); // data counter3

    //--- span с текстом 'ночь' ---
    const textNight = document.querySelector("[data-night]");     // data counter2  data counter4

    //--- span с текстом 'ночи' ---
    const textNights2 = document.querySelector("[data-nights2]"); // data counter2 data counter4
    const textNights4 = document.querySelector("[data-nights4]"); // data counter
    const textNights6 = document.querySelector("[data-nights6]"); // data counter3

  // ------------------------ btn plus1------------------------------
    if (event.target.dataset.action === "plus") {
      if (parseInt(counter1.innerText) < counter3.innerText) {
        counter1.innerText = ++counter1.innerText;           // Изменяем текст в счётчике увеличивая его на 1
        counter2.innerText = counter1.innerText;
      }
      if (counter1.innerText == counter3.innerText) {
        spanCounter.classList.add('is-hidden');
      }
      if (counter1.innerText == 1) {
        textNights.classList.add('is-hidden');     // ночей data-counter2 data-counter4
      }
      if (counter1.innerText > 1) {
        textNights3.classList.remove('is-hidden'); // ночей data-counter
        textNights4.classList.add('is-hidden');    // ночи  data-counter2  data-counter4
      }
      if (counter3.innerText == counter1.innerText && counter3.innerText < 5 && counter4.innerText > 1) {
        spanCounter.classList.add('is-hidden');
        textNights.classList.add('is-hidden');     // ночей data-counter2  data-counter4
        textNights2.classList.remove('is-hidden'); // ночи data-counter
      }
      // ------------ btn plus1 opacity -------------
      if (counter1.innerText < counter3.innerText) {
        minus.classList.remove('opacity');
      }
      if (counter1.innerText == counter3.innerText) {
        plus.classList.add('opacity');
        minus2.classList.add('opacity');
        minus.classList.remove('opacity');
      }
      if (counter1.innerText == 1) {
        minus.classList.add('opacity');
      } else {
        minus.classList.remove('opacity');
      }
    }
  // ------------------------ btn minus1 -----------------------------
    if (event.target.dataset.action === "minus") {
      if (parseInt(counter1.innerText) > 1) {        // Проверяем чтобы счётчик был больше 1
        counter1.innerText = --counter1.innerText;   // Изменяем текст в счётчике уменьшая его на 1
        counter2.innerText = counter1.innerText;
        spanCounter.classList.remove('is-hidden');
      }
      if (counter1.innerText == 1) {
        textNights3.classList.add('is-hidden');      // ночей data-counter
        textNights4.classList.remove('is-hidden');   // ночи  data-counter2  data-counter4
      }
      if (counter1.innerText < 5 && counter3.innerText < 5 && counter1.innerText > 1) {
        textNights2.classList.add('is-hidden');      // ночи  data-counter2 data-counter4
        textNights.classList.remove('is-hidden');    // ночей data-counter2  data-counter4
      }
      // ------------ btn minus1 opacity -------------
      if (counter1.innerText == 1) {
        minus.classList.add('opacity');
      }
      if (counter3.innerText > counter1.innerText) {
        minus2.classList.remove('opacity');
        plus.classList.remove('opacity');
      }
        if (counter3.innerText == 10 && counter1.innerText < 10) {
        minus2.classList.remove('opacity');
        plus.classList.remove('opacity');
      }
      if (counter3.innerText == 1) {
        minus2.classList.add('opacity');
      }
    }
  // ------------------------- btn plus2 -----------------------------
    if (event.target.dataset.action === "plus2") {
      spanCounter.classList.remove('is-hidden');
      if (parseInt(counter3.innerText) >= counter1.innerText && parseInt(counter3.innerText) < 14) {
        counter3.innerText = ++counter3.innerText;
        counter4.innerText = counter3.innerText;
        textNights5.classList.remove('is-hidden');    // data-counter3
        textNights6.classList.add('is-hidden');       // data-counter3
        textNight.classList.add('is-hidden');         // ночь data-counter2  data-counter4
        textNights.classList.remove('is-hidden');     // ночей data-counter2  data-counter4
        textNights6.classList.add('is-hidden');       // ночи  data-counter3
      }
      if (counter3.innerText < 5) {
        textNights2.classList.add('is-hidden');       // ночи  data-counter2 data-counter4
      }
      if (counter3.innerText > 1 && counter3.innerText < 5) {
        textNight.classList.add('is-hidden');
      } else {
        textNights.classList.remove('is-hidden');
        textNights2.classList.add('is-hidden');
        textNight.classList.add('is-hidden');
      }
      // ------------ btn plus2 opacity --------------
      if (counter1.innerText < counter3.innerText) {
        plus.classList.remove('opacity');
        minus2.classList.remove('opacity');
      }
        if (counter1.innerText == 9 || counter3.innerText == 10) {
        plus.classList.remove('opacity');
        minus2.classList.remove('opacity');
      }
      if (counter3.innerText == 14) {
        plus2.classList.add('opacity');
        plus2.style.pointerEvents = "none";
      }
    }
  // ------------------------- btn minus2 -----------------------------
    if (event.target.dataset.action === "minus2") {
      spanCounter.classList.remove('is-hidden');
      if (parseInt(counter3.innerText) > counter1.innerText) {
        counter3.innerText = --counter3.innerText;
        counter4.innerText = counter3.innerText;
      } else {
        spanCounter.classList.add('is-hidden');
      }
      if (counter3.innerText == 1) {
        textNights.classList.add('is-hidden');        // ночей data-counter2  data-counter4
        textNights2.classList.add('is-hidden');
        spanCounter.classList.add('is-hidden');
        textNight.classList.remove('is-hidden');      // ночь data-counter2  data-counter4
        textNights5.classList.add('is-hidden');       // ночей data-counter3
        textNights6.classList.remove('is-hidden');    // ночи data-counter3
        textNights2.classList.add('is-hidden');       // ночи data-counter2 data-counter4
      }
      if (counter3.innerText == counter1.innerText) {
        spanCounter.classList.add('is-hidden');
      }
      if (counter3.innerText == counter1.innerText && counter3.innerText < 5 && counter3.innerText > 1) {
        spanCounter.classList.add('is-hidden');
        textNights.classList.add('is-hidden');      // ночей data-counter2  data-counter4
        textNights2.classList.remove('is-hidden');  // ночи data-counter
      }
      // ------------ btn minus2 opacity -------------
      if (counter3.innerText == counter1.innerText) {
        plus.classList.add('opacity');
        minus2.classList.add('opacity');
      }
      if (counter3.innerText < 14) {
        plus2.classList.remove('opacity');
        plus2.style.pointerEvents = "auto";
      }
    }
  });
};
