"use strict";

var formElement = document.querySelector(".form");
var urlForm = document.forms.urlForm;
var url = urlForm.elements.url;
formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
urlForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});
urlForm.addEventListener("input", function (evt) {
  console.log(evt.target.validity);
});