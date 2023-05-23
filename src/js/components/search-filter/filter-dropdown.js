document.addEventListener('DOMContentLoaded', () => {
  if (document.querySelector(".dropdown") !== null) {

	const formInner = document.querySelectorAll('.search-form__inner');
	const drops = document.querySelectorAll('.dropdown');
	const dropsContent = document.querySelectorAll('.dropdown-content');


	formInner.forEach(el => {
		el.addEventListener('click', (e) => {
			let currentBtn = e.currentTarget;
			let drop = currentBtn.closest('.search-form__item').querySelector('.dropdown');
			dropsContent.forEach(el => {
				el.addEventListener('click', () => {
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
  }
});

