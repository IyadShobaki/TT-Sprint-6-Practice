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

var checkInputValidity = function checkInputValidity(formElement, inputElement) {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

var setEventListeners = function setEventListeners(formElement) {
  // Find all fields inside the form, and
  // make an array from them using the Array.from() method
  var inputList = Array.from(formElement.querySelectorAll(".form__input")); // Iterate over the resulting array

  inputList.forEach(function (inputElement) {
    // add the input event handler to each field
    inputElement.addEventListener("input", function () {
      // Call the checkInputValidity() function inside the callback,
      // and pass the form and the element to be checked to it
      checkInputValidity(formElement, inputElement);
    });
  });
};