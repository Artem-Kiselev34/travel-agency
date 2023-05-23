import AirDatepicker from "air-datepicker";

if (document.querySelector("#airdatepicker") !== null) {
  if (window.innerWidth > 768) {
    new AirDatepicker("#airdatepicker", {
      selectedDates: [new Date()],
      autoClose: true,
      minDate: new Date()
    });
  } else {
    new AirDatepicker("#airdatepicker", {
      selectedDates: [new Date()],
      autoClose: true,
      minDate: new Date(),
      isMobile: true
    });
  }

  const calendarFocus = document.querySelector(".calendar");
  calendarFocus.addEventListener("click", () => {
    document.getElementById("airdatepicker").focus();
  });
}
