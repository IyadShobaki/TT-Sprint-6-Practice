const cardsContainer = document.querySelector(".cards");

const cards = [
  {
    title: "This card should have a button",
    hasButton: true,
  },
  {
    title: "This card should not have a button",
    hasButton: false,
  },
  {
    title: "This card should also not have a button",
  },
];

const createButton = () => {
  const button = document.createElement("button");
  button.textContent = "Click me";
  button.classList.add("button");
  button.type = "button";
  return button;
};

cards.forEach((cardData) => {
  const cardElement = document
    .querySelector("#card-template")
    .content.querySelector(".card")
    .cloneNode(true);

  const titleElement = cardElement.querySelector(".card__title");
  titleElement.textContent = cardData.title;

  if ("hasButton" in cardData && cardData.hasButton) {
    const button = createButton();
    cardElement.appendChild(button);
  }

  cardsContainer.append(cardElement);
});
