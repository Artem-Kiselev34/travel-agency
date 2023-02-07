// ------------------------------ geolocation ------------------------------------
window.onload = function () {
  // let user = document.querySelectorAll("#")
  jQuery("#user-city").text(ymaps.geolocation.city);
  jQuery("#user-city-mobile").text(ymaps.geolocation.city);

}
