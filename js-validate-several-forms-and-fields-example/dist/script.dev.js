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

var enableValidation = function enableValidation() {
  // It will find all forms with the specified class in DOM, and
  // make an array from them using the Array.from() method
  var formList = Array.from(document.querySelectorAll(".form")); // Iterate over the resulting array

  formList.forEach(function (formElement) {
    formElement.addEventListener("submit", function (evt) {
      // Cancel default behavior for each form
      evt.preventDefault();
    }); // Call the setEventListeners() function for each form,
    // taking a form element as an argument

    setEventListeners(formElement);
  });
}; // The function takes an array of fields


var hasInvalidInput = function hasInvalidInput(inputList) {
  // iterate over the array using the some() method
  return inputList.some(function (inputElement) {
    // If the field is invalid, the callback will return true.
    // The method will then stop, and hasInvalidInput() function will return true
    // hasInvalidInput returns true
    return !inputElement.validity.valid;
  });
};