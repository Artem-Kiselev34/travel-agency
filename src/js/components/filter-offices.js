const filter = document.querySelector('.filter__container');
const filterIcon = document.querySelector('.filter__icon');
const cities = document.querySelector('.city-list');
const city = document.querySelectorAll('.city-list__item');
const filterText = document.querySelector('.filter__text');

if (document.querySelector(".filter__container") !== null) {
  filter.addEventListener('click', () => {
    cities.classList.toggle('active');
    filterIcon.classList.toggle('rotate')
  });

  city.forEach(el => {
    el.addEventListener('click', (e) => {
      cities.classList.remove('active');
      filterIcon.classList.remove('rotate')
      filterText.innerHTML = e.target.innerHTML;
      filterText.classList.remove('filter__text')
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter__container')) {
      cities.classList.remove('active');
      filterIcon.classList.remove('rotate')
    }
  });
}
