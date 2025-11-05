"use strict";

var form = document.querySelector(".form");
var formInput = form.querySelector(".form__input");
var formError = form.querySelector(".".concat(formInput.id, "-error"));

var showInputError = function showInputError(formElement, inputElement, errorMessage) {
  var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
  inputElement.classList.add("form__input_type_error");
  errorElement.textContent = errorMessage;
  errorElement.classList.add("form__input-error_active");
};

var hideInputError = function hideInputError(formElement, inputElement) {
  var errorElement = formElement.querySelector(".".concat(inputElement.id, "-error"));
  inputElement.classList.remove("form__input_type_error");
  errorElement.classList.remove("form__input-error_active");
  errorElement.textContent = "";
};

var checkInputValidity = function checkInputValidity() {
  if (!formInput.validity.valid) {
    showInputError(form, formInput, formInput.validationMessage);
  } else {
    hideInputError(form, formInput);
  }
};

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
formInput.addEventListener("input", function () {
  checkInputValidity();
});