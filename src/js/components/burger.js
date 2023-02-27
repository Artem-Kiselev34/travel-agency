const burger = document.querySelector('.burger');
const isMenu = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu__container');
const body = document.body;
const overlay = document.querySelector('.overlay');

let openMenu = function() {
	  burger.classList.toggle('_active');
		isMenu.classList.toggle('_active');
		// mobileMenu.classList.toggle('is-hidden');
		body.classList.toggle('_lock');
		overlay.classList.toggle('_active');
}

	burger.addEventListener('click', openMenu, true);
  // burger.addEventListener('click', mobileMenu, true);
	overlay.addEventListener('click', openMenu, true);
