const sliders = document.querySelectorAll('.small-slider');
sliders.forEach((el) => {
	let line = el.querySelector(".small-slider__slides");
	markers = el.querySelector(".slideshow");
	marker = markers.querySelectorAll(".slideshow__item");

  marker.forEach(function (mark) {
	mark.onmousemove = function () {
	  let data = this.dataset.position;
	  line.style.left = `${data}px`;
	};
  });
})
