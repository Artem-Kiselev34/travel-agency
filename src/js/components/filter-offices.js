const select = document.querySelector('.filter');
const selectIcon = document.querySelector('.filter__icon');
const options = document.querySelector('.city-list');
const option = document.querySelectorAll('.city-list__item');
const selectText = document.querySelector('.filter__text');

if (document.querySelector(".filter") !== null) {
  select.addEventListener('click', () => {
    options.classList.toggle('active');
    selectIcon.classList.toggle('rotate')
  });

  option.forEach(el => {
    el.addEventListener('click', (e) => {
      options.classList.remove('active');
      selectIcon.classList.remove('rotate')
      selectText.innerHTML = e.target.innerHTML;
      selectText.classList.remove('filter__text')
    });
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.filter')) {
      options.classList.remove('active');
      selectIcon.classList.remove('rotate')
    }
  });
}
