document.addEventListener('DOMContentLoaded', () => {

	const formInner = document.querySelectorAll('.search-form__inner');
	const drops = document.querySelectorAll('.dropdown');
	const dropsContent = document.querySelectorAll('.dropdown__content');


	formInner.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.search-form__item').querySelector('.dropdown');
			dropsContent.forEach(el => {
				el.classList.remove('dropdown--hide');
				el.addEventListener('click', () => {
					el.classList.add('dropdown--hide')

					drops.forEach(el => {
						if (el == drop) {
							el.classList.remove('active');
						}
					});
				});
			});

			drops.forEach(el => {
				if (el !== drop) {
					el.classList.remove('active');
				}
			});

			drop.classList.toggle('active');
		});
	});

	document.addEventListener('click', (e) => {
		if (!e.target.closest('.search-form') || e.target.closest('.search-button')) {
			drops.forEach(el => {
				el.classList.remove('active');
			});
		}
	});
});
