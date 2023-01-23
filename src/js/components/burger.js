const burger = document.querySelector('.burger');
const isMenu = document.querySelector('.menu');
const body = document.body;
const overlay = document.querySelector('.overlay');

let openMenu = function() {
	  burger.classList.toggle('_active');
		isMenu.classList.toggle('_active');
		body.classList.toggle('_lock');
		overlay.classList.toggle('_active');
}

	burger.addEventListener('click', openMenu, true);
	overlay.addEventListener('click', openMenu, true);
