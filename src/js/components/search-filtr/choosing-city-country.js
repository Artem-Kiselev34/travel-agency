// --------------------- choosing a city and country ------------------------

const departureList = document.querySelector('.departure-drop');
const whereList = document.querySelector('.where-drop');
const departureInput = document.querySelector('.departure-input');
const whereInput = document.querySelector('.where-input');


departureList.addEventListener('click', dropSelectDeparture);
whereList.addEventListener('click', dropSelectWhere);


function dropSelectDeparture(e){
  departureInput.value = e.target.textContent
}
function dropSelectWhere(e){
  whereInput.value = e.target.textContent
}
