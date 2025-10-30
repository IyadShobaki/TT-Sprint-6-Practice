"use strict";

var cardsContainer = document.querySelector(".cards");
var cards = [{
  title: "This card should have a button",
  hasButton: true
}, {
  title: "This card should not have a button",
  hasButton: false
}, {
  title: "This card should also not have a button"
}];

var createButton = function createButton() {
  var button = document.createElement("button");
  button.textContent = "Click me";
  button.classList.add("button");
  button.type = "button";
  return button;
};

cards.forEach(function (cardData) {
  var cardElement = document.querySelector("#card-template").content.querySelector(".card").cloneNode(true);
  var titleElement = cardElement.querySelector(".card__title");
  titleElement.textContent = cardData.title;

  if ("hasButton" in cardData && cardData.hasButton) {
    var button = createButton();
    cardElement.appendChild(button);
  }

  cardsContainer.append(cardElement);
});