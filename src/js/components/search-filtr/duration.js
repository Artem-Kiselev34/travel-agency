//--------------------------------- btn duration ------------------------------------------------
window.addEventListener('click', function (event) {
  let counter;
  let counter2;
  let counter3;
  let counter4;

  // Обёртка счётчика
  const counterWrapper = event.target.closest('.counter-wrapper');
  //  счётчик
  let spanCounter = document.querySelector('.counter');

  // Находим див с числом счётчика
  counter = counterWrapper.querySelector('[data-counter]');
  counter2 = counterWrapper.querySelector('[data-counter2]');
  counter3 = counterWrapper.querySelector('[data-counter3]');
  counter4 = counterWrapper.querySelector('[data-counter4]');

  //  span с текстом 'ночей'
  const nights = document.querySelector('.nights');    // data counter2  data counter4
  const counterNights = document.querySelector('.counter-nights');    // data counter
  const counterNights3 = document.querySelector('.counter-nights3');  // data counter3

  //  span с текстом 'ночь'
  const night = document.querySelector('.night'); // data counter2  data counter4
  //  span с текстом 'ночи'
  const nightsTime = document.querySelector('.nights-time');    // data counter2 data counter4
  const counterNightsTime = document.querySelector('.counter-nights-time');   // data counter
  const counterNightsTime3 = document.querySelector('.counter-nights-time3'); // data counter3


  if (event.target.dataset.action === 'plus') {
    // Проверяем чтобы счётчик был меньше
    if (parseInt(counter.innerText) < counter3.innerText) {
      // Изменяем текст в счётчике увеличивая его на 1
      counter.innerText = ++counter.innerText;
      counter2.innerText = counter.innerText;
    }
    if (counter.innerText == counter3.innerText) {
      spanCounter.style.display = 'none';
    }
    if (counter.innerText == 1) {
      nights.style.display = 'none';  // ночей data-counter2 data-counter4
    }
    if (counter.innerText > 1) {
      counterNights.style.display = 'block';        // ночей data-counter
      counterNightsTime.style.display = 'none';    // ночи  data-counter2  data-counter4
    }
    if (counter3.innerText == counter.innerText && counter3.innerText < 5 && counter4.innerText > 1) {
      spanCounter.style.display = 'none';
      nights.style.display = 'none';       // ночей data-counter2  data-counter4
      nightsTime.style.display = 'block';  // ночи data-counter
    }
  };

  if (event.target.dataset.action === 'minus') {

    // Проверяем чтобы счётчик был больше 1
    if (parseInt(counter.innerText) > 1) {
      // Изменяем текст в счётчике уменьшая его на 1
      counter.innerText = --counter.innerText;
      counter2.innerText = counter.innerText;
      spanCounter.style.display = 'block';
    }
    if (counter.innerText == 1) {
      counterNights.style.display = 'none';       // ночей data-counter
      counterNightsTime.style.display = 'block';  // ночи  data-counter2  data-counter4
    }
    if (counter.innerText < 5 && counter3.innerText < 5 && counter.innerText > 1) {
      nightsTime.style.display = 'none';  // ночи  data-counter2 data-counter4
      nights.style.display = 'block';       // ночей data-counter2  data-counter4
    }
  };

  if (event.target.dataset.action === 'plus1') {
    spanCounter.style.display = 'block';
    // Проверяем чтобы счётчик был меньше 14
    if (parseInt(counter3.innerText) >= counter.innerText && parseInt(counter3.innerText) < 14) {
      console.log(counter.innerText)
      counter3.innerText = ++counter3.innerText;
      counter4.innerText = counter3.innerText;
      counterNights3.style.display = 'block';     // data-counter3
      counterNightsTime3.style.display = 'none';  // data-counter3
      night.style.display = 'none';               // ночь data-counter2  data-counter4
      nights.style.display = 'block';             // ночей data-counter2  data-counter4
      counterNightsTime3.style.display = 'none';  // ночи  data-counter3
    }

    if (counter3.innerText < 5) {
      nightsTime.style.display = 'none';  // ночи  data-counter2 data-counter4
    }

    if (counter3.innerText > 1 && counter3.innerText < 5) {
      night.style.display = 'none';
    } else {
      nights.style.display = 'block';
      nightsTime.style.display = 'none';
      night.style.display = 'none';
    }
  };

  if (event.target.dataset.action === 'minus1') {
    spanCounter.style.display = 'block';
    // Проверяем чтобы счётчик был больше
    if (parseInt(counter3.innerText) > counter.innerText) {
      // Изменяем текст в счётчике уменьшая его на 1
      counter3.innerText = --counter3.innerText;
      counter4.innerText = counter3.innerText;
    } else {
      spanCounter.style.display = 'none';
    }
    if (counter3.innerText == 1) {
      nights.style.display = 'none';              // ночей data-counter2  data-counter4
      nightsTime.style.display = 'none';
      spanCounter.style.display = 'none';
      night.style.display = 'block';              // ночь data-counter2  data-counter4
      counterNights3.style.display = 'none';      // ночей data-counter3
      counterNightsTime3.style.display = 'block';  // ночи data-counter3
      nightsTime.style.display = 'none';          // ночи data-counter2 data-counter4
    }
    if (counter3.innerText == counter.innerText) {
      spanCounter.style.display = 'none';
    }
    if (counter3.innerText == counter.innerText && counter3.innerText < 5 && counter3.innerText > 1) {
      spanCounter.style.display = 'none';
      nights.style.display = 'none';       // ночей data-counter2  data-counter4
      nightsTime.style.display = 'block';  // ночи data-counter
    }
  };
});
