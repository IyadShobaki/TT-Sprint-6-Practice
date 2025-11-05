"use strict";

var formElement = document.querySelector(".form");
var formInput = formElement.querySelector(".form__input");

var showError = function showError(input) {
  // add the error class to the input element
  input.classList.add("form__input_type_error");
};

var hideError = function hideError(input) {
  // remove the error class from the input element
  input.classList.remove("form__input_type_error");
};

var checkInputValidity = function checkInputValidity() {
  if (!formInput.validity.valid) {
    showError(formInput);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
formElement.addEventListener("input", function (evt) {
  checkInputValidity();
});