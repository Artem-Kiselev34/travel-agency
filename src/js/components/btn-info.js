if (document.querySelector(".positioning__info") !== null) {
  const btnInfo = document.querySelector('.positioning__info');
  const popup = document.querySelector('.popup');
  const popupClose = document.querySelector('.popup__close');

  btnInfo.addEventListener('click', ()=> {
    popup.classList.toggle('active');
  });

  document.addEventListener('click', (e) => {
    if (!e.target.closest('.positioning__info')) {
        popup.classList.remove('active');
    }
    if (e.target.closest('.popup__container')) {
      popup.classList.add('active');
    }
    if (e.target.closest('.popup__close')) {
      popup.classList.remove('active');
    }
  });
  };
