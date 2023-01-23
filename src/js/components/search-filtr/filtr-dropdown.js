document.addEventListener('DOMContentLoaded', () => {

	const formInner = document.querySelectorAll('.search-form__inner');
	const drops = document.querySelectorAll('.dropdown');
	const dropsContent = document.querySelectorAll('.dropdown__content');


	formInner.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.search-form__item').querySelector('.dropdown');
			dropsContent.forEach(el => {
				el.classList.remove('dropdown--deactive');
				el.addEventListener('click', () => {
					el.classList.add('dropdown--deactive')

					drops.forEach(el => {
						if (el == drop) {
							el.classList.remove('dropdown--active');
						}
					});
				});
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('dropdown--active');
				}
			});

			drop.classList.toggle('dropdown--active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.search-form') || e.target.closest('.search-button')) {
			drops.forEach(el => {
				el.classList.remove('dropdown--active');
			});
		}
	});
});
