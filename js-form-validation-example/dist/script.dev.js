"use strict";

var formElement = document.querySelector(".form");
var formInput = formElement.querySelector(".form__input");

var showError = function showError(input) {// add the error class to the input element
};

var hideError = function hideError(input) {// remove the error class from the input element
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});