const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");

const showError = (input) => {
  // add the error class to the input element
  input.classList.add("form__input_type_error");
};

const hideError = (input) => {
  // remove the error class from the input element
  input.classList.remove("form__input_type_error");
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(formInput);
  } else {
    hideError(formInput);
  }
};

formElement.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formElement.addEventListener("input", function (evt) {
  checkInputValidity();
});
