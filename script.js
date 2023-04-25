const form = document.querySelector(".form-sign-up__form");
const inputEmail = document.querySelector(".form-sign-up__input-email");
const inputPassword = document.querySelector(".form-sign-up__input-password");
const inputRePassword = document.querySelector(
  ".form-sign-up__input-retype-password"
);
const inputRating = document.querySelectorAll(".star-rating__input");

form.addEventListener("submit", (e) => {
  if (inputEmail.value == "") {
    inputEmail.style.border = "2px solid red";
    e.preventDefault();
  }
  if (inputPassword.value == "") {
    inputPassword.style.border = "2px solid red";
    e.preventDefault();
  }
  if (inputRePassword.value == "") {
    inputRePassword.style.border = "2px solid red";
    e.preventDefault();
  }

  if (inputRePassword.value != inputPassword.value) {
    alert("Введенный повторно пароль не совпадает с первичным!");
    inputRePassword.style.border = "2px solid red";
    e.preventDefault();
  }
});
