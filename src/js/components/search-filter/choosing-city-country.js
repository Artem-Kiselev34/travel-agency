// --------------------- choosing a city and country ------------------------
const departureList = document.querySelector('.departure-drop');
const whereList = document.querySelector('.where-drop');
const departureInput = document.querySelector('.departure-input');
const whereInput = document.querySelector('.where-input');

if (document.querySelector(".departure-drop") !== null) {
  departureList.addEventListener('click', dropSelectDeparture);
}
if (document.querySelector(".where-drop") !== null) {
  whereList.addEventListener('click', dropSelectWhere);
}


function dropSelectDeparture(e) {
  departureInput.value = e.target.textContent
}
function dropSelectWhere(e) {
  whereInput.value = e.target.textContent
}
