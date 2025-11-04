"use strict";

var songsContainer = document.querySelector(".songs-container");
var addButton = document.querySelector(".input__btn_action_add");
var form = document.forms.add;
var artist = form.elements.artist;
var title = form.elements.title;

function addSong(artistValue, titleValue) {
  var songTemplate = document.querySelector("#song-template").content;
  var songElement = songTemplate.cloneNode(true);
  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songsContainer.append(songElement);
}

function setSubmitButtonState(isFormValid) {
  if (isFormValid) {
    addButton.removeAttribute("disabled");
    addButton.classList.remove("input__btn_disabled");
  } else {
    addButton.setAttribute("disabled", true);
    addButton.classList.add("input__btn_disabled");
  }
}

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  form.reset();
  setSubmitButtonState(false);
});
form.addEventListener("input", function (evt) {
  var isValid = artist.value.length > 0 && title.value.length > 0;
  setSubmitButtonState(isValid);
});