// inputmask

const form = document.querySelector(".help-form");
if (document.querySelector(".help-form") !== null) {
  const telSelector = form.querySelector('input[type="tel"]');

  const inputMask = new Inputmask("+7 (999) 999-99-99");
  inputMask.mask(telSelector);

  new window.JustValidate(".help-form", {
    rules: {
      tel: {
        required: true,
        function: () => {
          const phone = telSelector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
    colorWrong: "#ff0f0f",
    messages: {
      name: {
        required: "Введите имя",
        minLength: "Введите 3 и более символов",
        maxLength: "Не более 15 символов",
      },
      email: {
        email: "Введите корректный email",
        required: "Введите email",
      },
      tel: {
        required: "Введите телефон",
        function: "Введите номер полностью",
      },
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Отправлено");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      thisForm.reset();
    },
  });
};

if (document.querySelector(".subscribe-form") !== null) {
  new window.JustValidate(".subscribe-form", {
    colorWrong: "#ff0f0f",
    messages: {
      email: {
        email: "Введите корректный email",
        required: "Введите email",
      },
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Отправлено");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      thisForm.reset();
    },
  });
};

if (document.querySelector(".site-modal__form") !== null) {
  new window.JustValidate(".site-modal__form", {
    colorWrong: "#ff0f0f",
    messages: {
      email: {
        email: "Введите корректный email",
        required: "Введите email",
      },
      password: {
        password: "Введите корректный пароль",
        required: "Введите пароль",
        minLength: "Введите не менее 4 символов",
      },
    },
  });
};


const formBuyer = document.querySelector(".buyer");
if (document.querySelector(".buyer") !== null) {
  const telSelector = formBuyer.querySelector('input[type="tel"]');
  const inputMask = new Inputmask("+7 (999) 999-99-99");
  inputMask.mask(telSelector);

  new JustValidate("#buyer", {

    rules: {
      name2: {
        required: true,
      },
      tel: {
        required: true,
        function: () => {
          const phone = telSelector.inputmask.unmaskedvalue();
          return Number(phone) && phone.length === 10;
        },
      },
    },
    colorWrong: "#ff0f0f",
    messages: {
      name: {
        required: "Введите имя",
        minLength: "Введите 3 и более символов",
        maxLength: "Не более 15 символов",
      },
      name2: {
        required: "Введите фамилию",
      },
      email: {
        email: "Введите корректный email",
        required: "Введите email",
      },
      tel: {
        required: "Введите телефон",
        function: "Введите номер полностью",
      },
    },
    submitHandler: function (thisForm) {
      let formData = new FormData(thisForm);

      let xhr = new XMLHttpRequest();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log("Отправлено");
          }
        }
      };

      xhr.open("POST", "mail.php", true);
      xhr.send(formData);

      thisForm.reset();
    },
  });
}
//------------------------------------
let userName = document.querySelectorAll(".checkup");
let regex = /[0-9]/g; // регулярка только цифры

userName.forEach(el => {
  el.oninput = function () {
    this.value = this.value.replace(regex, '');
  }
})
