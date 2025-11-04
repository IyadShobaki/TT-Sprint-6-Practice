"use strict";

var songsContainer = document.querySelector(".songs-container");
var addButton = document.querySelector(".input__btn_action_add");
var artistInput = document.querySelector(".input__text_type_artist");
var titleInput = document.querySelector(".input__text_type_title");

function addSong(artistValue, titleValue) {
  var songTemplate = document.querySelector("#song-template").content;
  var songElement = songTemplate.cloneNode(true);
  songElement.querySelector(".song__artist").textContent = artistValue;
  songElement.querySelector(".song__title").textContent = titleValue;
  songsContainer.append(songElement);
}

addButton.addEventListener("click", function () {
  addSong(artistInput.value, titleInput.value);
  artistInput.value = "";
  titleInput.value = "";
});