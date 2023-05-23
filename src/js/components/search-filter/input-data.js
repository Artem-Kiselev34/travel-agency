const searchBtn = document.querySelector("#search-btn");

if (document.querySelector("#filters") !== null) {
  let inputCity;
  let inputCountry;
  document.addEventListener('DOMContentLoaded', () => {  // при готовности объектной модели
    inputCity = document.getElementById('city');         // выбираем из документа элемент инпута
    inputCountry = document.getElementById('country');
    inputCountry.value = localStorage.getItem('savedDataCountry') || 'Турция'; // присваиваем его значению сохраненное в localStorage, либо строку (при отсутствии сохр. знач.)
    inputCity.value = localStorage.getItem('savedDataCity') || 'Москва';
    searchBtn.addEventListener('click', () => {                     // добавляем кнопке слушателя события "клик"...
      localStorage.setItem('savedDataCountry', inputCountry.value); // ...при котором, в localStorage будет добавлена/изменена запись с именем "savedData" и значением элемента inputData (на момент события)
      localStorage.setItem('savedDataCity', inputCity.value);
    });
  });
};
