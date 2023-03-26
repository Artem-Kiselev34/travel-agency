let center = [48.707930140656586, 44.50946858474039];
let catalog = document.querySelector('.catalog');

const catalogList = [
  {
    msk: `
    <ul class="catalog__wrap list-reset">
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Добрынинская</div>
          <div class="catalog__address">Москва, ул.Валовая, д.35</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler 1905 года</div>
          <div class="catalog__address">Москва, Шмитовский проезд, 10/7</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Бауманская</div>
          <div class="catalog__address">Москва, Ладожская улица, 1</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Курская</div>
          <div class="catalog__address">Москва, улица Земляной Вал, 33</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Фрунзенская</div>
          <div class="catalog__address">Москва, Комсомольский проспект, 32к2</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Марьина Роща</div>
          <div class="catalog__address">Москва, Шереметьевская улица, 6к1</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Автозаводская</div>
          <div class="catalog__address">Москва, улица Ленинская Слобода, 26кА</div>
        </a>
      </li>
    </ul
  `
  }, {
    spb: `
    <ul class="catalog__wrap list-reset">
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Новочеркасская</div>
          <div class="catalog__address">Санкт-Петербург, ул.Свердловская набережная, д.60</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Маяковская</div>
          <div class="catalog__address">Санкт-Петербург, ул. Марата, д.5</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Приморская</div>
          <div class="catalog__address">Санкт-Петербург, Малый проспект Васильевского острова, д.88, корп.2</div>
        </a>
      </li>
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Московские ворота</div>
          <div class="catalog__address">Санкт-Петербург, Лиговский проспект, д.266с1</div>
        </a>
      </li>
    </ul>
  `
  }, {
    kzn: `
    <ul class="catalog__wrap list-reset">
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Площадь Тукая</div>
          <div class="catalog__address">Казань, ул.Петербургская, д.1</div>
        </a>
      </li>
    </ul>
  `
  }, {
    vlg: `
    <ul class="catalog__wrap list-reset">
      <li class="catalog__item" title="Подробнее">
        <a href="#" target="_blank">
          <div class="catalog__title">Traveler Волгоград</div>
          <div class="catalog__address">Волгоград, ул.Краснознаменская, д.9</div>
        </a>
      </li>
    </ul>
  `
  }
];

let msk = catalogList[0].msk;
let spb = catalogList[1].spb;
let kzn = catalogList[2].kzn;
let vlg = catalogList[3].vlg;

if (document.querySelector(".catalog") !== null) {
  catalog.innerHTML = msk;
};
// -------------------------------------------------------

const groups = [
  {
    name: "Москва",
    items: [
      {
        id: 1,
        center: [55.72953619381542, 37.62608949143217],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Добрынинская</div>
          <div class="balloon__address">Адрес: Москва, ул.Валовая, д.35</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Москва",
    items: [
      {
        id: 1,
        center: [55.75919104005139, 37.55270194281979],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler 1905 года</div>
          <div class="balloon__address">Адрес: Москва, Шмитовский проезд, 10/7</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Москва",
    items: [
      {
        id: 1,
        center: [55.77154464938837, 37.679140111729865],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Бауманская</div>
          <div class="balloon__address">Адрес: Москва, Ладожская улица, 1</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Москва",
    items: [
      {
        id: 1,
        center: [55.75736607513555, 37.65909864597057],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Курская</div>
          <div class="balloon__address">Адрес: Москва, улица Земляной Вал, 33</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Москва",
    items: [
      {
        id: 1,
        center: [55.726044783858846, 37.57826759509778],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Фрунзенская</div>
          <div class="balloon__address">Адрес: Москва, Комсомольский проспект, 32к2</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Москва",
    items: [
      {
        id: 1,
        center: [55.79545018775852, 37.61695577792858],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Марьина Роща</div>
          <div class="balloon__address">Адрес: Москва, Шереметьевская улица, 6к1</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Москва",
    items: [
      {
        id: 1,
        center: [55.70937776797371, 37.65303685359693],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Автозаводская</div>
          <div class="balloon__address">Адрес: Москва, улица Ленинская Слобода, 26кА</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  },
  {
    name: "Санкт-Петербург",
    items: [
      {
        id: 2,
        center: [59.95425645703236, 30.408565671691843],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Новочеркасская</div>
          <div class="balloon__address">Адрес: Санкт-Петербург, ул.Свердловская набережная, д.60</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Санкт-Петербург",
    items: [
      {
        id: 2,
        center: [59.93029791739945, 30.353913415640402],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Маяковская</div>
          <div class="balloon__address">Адрес: Санкт-Петербург, ул. Марата, д.5</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Санкт-Петербург",
    items: [
      {
        id: 2,
        center: [59.939899127413966, 30.228432013907153],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Приморская</div>
          <div class="balloon__address">Адрес: Санкт-Петербург, Малый проспект Васильевского острова, д.88, корп.2</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Санкт-Петербург",
    items: [
      {
        // id: 2,
        center: [59.8945565745232, 30.33270557157011],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Московские ворота</div>
          <div class="balloon__address">Адрес: Санкт-Петербург, Лиговский проспект, д.266с1</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  },
  {
    name: "Казань",
    items: [
      {
        id: 3,
        center: [55.78613343268177, 49.12529891396084],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Площадь Тукая</div>
          <div class="balloon__address">Адрес: Казань, ул.Петербургская, д.1</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  }, {
    name: "Волгоград",
    items: [
      {
        id: 4,
        center: [48.704410304591775, 44.50972551343156],
        name: `
        <div class="balloon">
          <div class="balloon__title">Traveler Волгоград</div>
          <div class="balloon__address">Адрес: Волгоград, ул.Краснознаменская, д.9</div>
          <div class="balloon__work-time">Режим работы: пн-пт: 10:00-21:00,<br> сб: 10:00-21:00 вс: 10:00-21:00</div>
          <a class="balloon__link btn--fill" href="#">Подробнее</a>
        </div>
      `
      }
    ]
  },
];
if (document.querySelector(".map") !== null) {
  ymaps.ready(init);

  function init() {
    const myMap = new ymaps.Map('map', {
      center: [55.72953619381542, 37.62608949143217], //Центрирование карты. Поскольку у нас есть метки с собственным центрированием, то можно не указывать
      zoom: 11,
      controls: ['zoomControl'],
    }, {
      searchControlProvider: 'yandex#search'
    });

    const placemarks = [];

    for (let i = 0, l = groups.length; i < l; i++) {
      createMenuGroup(groups[i]);
    }

    function createMenuGroup(group) {
      const collection = new ymaps.GeoObjectCollection(null, { preset: group.style });

      myMap.geoObjects.add(collection);

      for (let j = 0, m = group.items.length; j < m; j++) {
        createSubMenu(group.items[j], collection, j);
      }
    }

    function createSubMenu(item, collection, j) {
      const placemark = new ymaps.Placemark(item.center, { balloonContent: item.name }, {
        iconLayout: 'default#image',
        iconImageHref: '../img/marker.svg',
        iconImageSize: [20, 30],
      });

      collection.add(placemark);

      placemarks[item.id] = placemark;

      placemark.events.add('mouseenter', function (e) {
        e.get('target').balloon.open();
      });
    }

    function clickGoto(e) {
      const pos = [parseFloat(this.getAttribute('data-n')), parseFloat(this.getAttribute('data-s'))],
        baloonId = this.getAttribute('data-key');


      myMap.panTo(pos, { flying: 1 }).then(function (e) {
        placemarks[baloonId].balloon.open();
        if (baloonId == 1) {
          catalog.innerHTML = msk;
        }
        if (baloonId == 2) {
          catalog.innerHTML = spb;
        }
        if (baloonId == 3) {
          catalog.innerHTML = kzn;
        }
        if (baloonId == 4) {
          catalog.innerHTML = vlg;
        }
      });

      return false;
    }

    const col = document.getElementsByClassName('city-list__item');
    for (let i = 0, n = col.length; i < n; ++i) {
      col[i].onclick = clickGoto;
    }
  };
}
