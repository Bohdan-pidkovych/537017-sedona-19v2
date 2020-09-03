var button = document.querySelector(".form__submit");
var form = document.querySelector(".form");
var modalError = document.querySelector(".modal--error");
var modalSuccess = document.querySelector(".modal--success");

var userName = form.querySelector("[name=user-name]");
var userSurname = form.querySelector("[name=user-surname]");
var phone = form.querySelector("[name=user-phone]");
var email = form.querySelector("[name=user-email]");
var formInput = form.querySelectorAll(".form__input--required");

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  if (!userName.value || !userSurname.value || !phone.value || !email.value) {
    for (var i = 0; i < formInput.length; i++) {
      formInput[i].classList.add("form__input--empty");
      modalError.classList.add("modal--show");
      var buttonClose = modalError.querySelector(".modal__button");
      buttonClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        modalError.classList.remove("modal--show");
      });
    }
  } else {
    modalSuccess.classList.add("modal--show");
    var buttonClose = modalSuccess.querySelector(".modal__button");
    buttonClose.addEventListener("click", function (evt) {
      evt.preventDefault();
      modalSuccess.classList.remove("modal--show");
    });
  }
});
