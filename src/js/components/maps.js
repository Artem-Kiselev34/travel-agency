let mskCenter = [55.72953619381542, 37.62608949143217];
let mskCenter2 = [55.75919104005139, 37.55270194281979];
let mskCenter3 = [55.77154464938837, 37.679140111729865];
let mskCenter4 = [55.75736607513555, 37.65909864597057];
let mskCenter5 = [55.726044783858846, 37.57826759509778];
let mskCenter6 = [55.79545018775852, 37.61695577792858];
let mskCenter7 = [55.70937776797371, 37.65303685359693];

let spbCenter = [59.95425645703236, 30.408565671691843];
let spbCenter2 = [59.93029791739945, 30.353913415640402];
let spbCenter3 = [59.939899127413966, 30.228432013907153];
let spbCenter4 = [59.8945565745232, 30.33270557157011];

let kznCenter = [55.78613343268177, 49.12529891396084];

let vlgCenter = [48.704410304591775, 44.50972551343156];


function init() {
  if (document.querySelector(".msk") !== null) {
    const map = new ymaps.Map("map1", {
      center: mskCenter,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      mskCenter,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".msk2") !== null) {
    const map = new ymaps.Map("map2", {
      center: mskCenter2,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      mskCenter2,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "../img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".msk3") !== null) {
    const map = new ymaps.Map("map3", {
      center: mskCenter3,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      mskCenter3,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".msk4") !== null) {
    const map = new ymaps.Map("map4", {
      center: mskCenter4,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      mskCenter4,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".msk5") !== null) {
    const map = new ymaps.Map("map5", {
      center: mskCenter5,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      mskCenter5,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".msk6") !== null) {
    const map = new ymaps.Map("map6", {
      center: mskCenter6,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      mskCenter6,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".msk7") !== null) {
    const map = new ymaps.Map("map7", {
      center: mskCenter7,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      mskCenter7,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  }

  if (document.querySelector(".spb") !== null) {
    const map = new ymaps.Map("map-spb", {
      center: spbCenter,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      spbCenter,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".spb2") !== null) {
    const map = new ymaps.Map("map-spb2", {
      center: spbCenter2,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      spbCenter2,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".spb3") !== null) {
    const map = new ymaps.Map("map-spb3", {
      center: spbCenter3,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      spbCenter3,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".spb4") !== null) {
    const map = new ymaps.Map("map-spb4", {
      center: spbCenter4,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      spbCenter4,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".kzn") !== null) {
    const map = new ymaps.Map("map-kzn", {
      center: kznCenter,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      kznCenter,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };

  if (document.querySelector(".vlg") !== null) {
    const map = new ymaps.Map("map-vlg", {
      center: vlgCenter,
      zoom: 16,
      controls: [
        "zoomControl",
        new ymaps.control.SearchControl({
          options: {
            size: "Normal",
            provider: "yandex#search",
          },
        }),
      ],
    });
    let placemark = new ymaps.Placemark(
      vlgCenter,
      {},
      {
        iconLayout: "default#image",
        iconImageHref: "./img/marker.svg",
        iconImageSize: [30, 40],
      }
    );
    map.geoObjects.add(placemark);
  };
}
ymaps.ready(init);
