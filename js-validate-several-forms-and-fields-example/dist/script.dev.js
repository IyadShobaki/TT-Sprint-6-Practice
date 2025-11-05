"use strict";

var form = document.querySelector(".form");
var formInput = form.querySelector(".form__input");
var formError = form.querySelector(".".concat(formInput.id, "-error"));

var showInputError = function showInputError(inputElement, errorMessage) {
  inputElement.classList.add("form__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("form__input-error_active");
};

var hideInputError = function hideInputError(inputElement) {
  inputElement.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_active");
  formError.textContent = "";
};

var checkInputValidity = function checkInputValidity() {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
formInput.addEventListener("input", function () {
  checkInputValidity();
});