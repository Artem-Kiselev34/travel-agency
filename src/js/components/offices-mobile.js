const cart = document.querySelector('.tab__cart');
const list = document.querySelector('.tab__list');
const btnActive = document.querySelector('.tab-active');
const catalog = document.querySelector('.catalog');
const salesOfficesRigth = document.querySelector('.sales-offices__rigth');

cart.addEventListener('click', ()=> {
  catalog.style.display = 'none';
  salesOfficesRigth.style.display = 'block';
  cart.classList.add('tab-active');
  list.classList.remove('tab-active');
})
list.addEventListener('click', ()=> {
  catalog.style.display = 'block';
  salesOfficesRigth.style.display = 'none';
  cart.classList.remove('tab-active');
  list.classList.add('tab-active');
})
