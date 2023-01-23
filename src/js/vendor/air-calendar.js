import AirDatepicker from 'air-datepicker';

new AirDatepicker('#airdatepicker',{
	range: true,
	multipleDatesSeparator: ' - ',
	dateFormat: 'd.MM',
	position: 'bottom center',
	offset: 24,
	autoClose: true,
	minDate: new Date(),
	startDate: new Date()
  });

  const formControl = document.querySelector('.form-control')
  const dataField = document.querySelector('.dataField')
  const dateField = document.getElementById("dateField");

  const calendarFocus = document.querySelector('.calendar__field');
  calendarFocus.addEventListener('click', function(_event) {
	dateField.style.display = 'none';
	dataField.style.display = 'block';
	formControl.style.opacity = 1;
	document.getElementById('airdatepicker').focus();
	 return false;
  });

  // ------------------------------- calendar сurrent data -----------------------------------

function my_curr_date() {

  let currentDate = new Date()
  let day = currentDate.getDate();
  let day2 = currentDate.getDate() + 2;
  let month = currentDate.getMonth() + 1;

  if(month<10) month='0'+month;

  let my_date = day+"."+month;
  let my_date2 = day2+"."+month;

  // dateField.innerText ='с '+ my_date +' по '+ my_date2;
  dateField.innerText = my_date +' - '+ my_date2;
  // dateField.innerText = my_date;
}
   my_curr_date()
