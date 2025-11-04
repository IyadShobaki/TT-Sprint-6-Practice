"use strict";

var songsContainer = document.querySelector(".songs-container");
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

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
  addSong(artist.value, title.value);
  artist.value = "";
  title.value = "";
});