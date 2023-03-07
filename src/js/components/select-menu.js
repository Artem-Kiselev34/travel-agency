const select = document.querySelector('.select');
const selectIcon = document.querySelector('.select__icon');
const options = document.querySelector('.options');
const option = document.querySelectorAll('.option');
const selectText = document.querySelector('.select__text');

select.addEventListener('click', () => {
  options.classList.toggle('active');
  selectIcon.classList.toggle('rotate')
});

option.forEach(el => {
  el.addEventListener('click', (e) => {
    options.classList.remove('active');
    selectIcon.classList.remove('rotate')
    selectText.innerHTML = e.target.innerHTML;
    selectText.classList.remove('select__text')
  });
});

document.addEventListener('click', (e) => {
  if (!e.target.closest('.select')) {
    options.classList.remove('active');
    selectIcon.classList.remove('rotate')
  }
});


