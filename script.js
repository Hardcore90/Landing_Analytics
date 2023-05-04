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

inputEmail.addEventListener("input", () => {
  if (inputEmail.value != "") {
    inputEmail.style.border = "2px solid green";
  }
});

inputRePassword.addEventListener("input", () => {
  if (inputRePassword.value == inputPassword.value) {
    inputPassword.style.border = "2px solid green";
    inputRePassword.style.border = "2px solid green";
  } else {
    inputRePassword.style.border = "2px solid red";
    inputPassword.style.border = "2px solid red";
  }
});

const scrollEl = document.querySelector(".plans_content__list-wrp");
scrollEl.scrollTop = "440px";

const navbarList = document.querySelectorAll(".offcanvas-body");
navbarList.forEach((element) => {
  element.addEventListener("click", (e) => {
    const close = document.querySelector(".btn-close");
    close.click();
    e.preventDefault();
  });
});

const signUpBtnMobile = document.querySelector(".signUp_btn_mobile");
signUpBtnMobile.addEventListener("click", (e) => {
  e.preventDefault();
});
