const formElement = document.querySelector(".form");
const urlForm = document.forms.urlForm;
const url = urlForm.elements.url;

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

urlForm.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

urlForm.addEventListener("input", function (evt) {
  console.log(evt.target.validity);
});
