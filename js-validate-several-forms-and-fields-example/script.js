const form = document.querySelector(".form");
const formInput = form.querySelector(".form__input");
const formError = form.querySelector(`.${formInput.id}-error`);

const showInputError = (inputElement, errorMessage) => {
  inputElement.classList.add("form__input_type_error");
  formError.textContent = errorMessage;
  formError.classList.add("form__input-error_active");
};

const hideInputError = (inputElement) => {
  inputElement.classList.remove("form__input_type_error");
  formError.classList.remove("form__input-error_active");
  formError.textContent = "";
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showInputError(formInput, formInput.validationMessage);
  } else {
    hideInputError(formInput);
  }
};

form.addEventListener("submit", function (evt) {
  evt.preventDefault();
});

formInput.addEventListener("input", function () {
  checkInputValidity();
});
