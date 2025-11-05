const formElement = document.querySelector(".form");
const formInput = formElement.querySelector(".form__input");
// 1. Declare the formError constant.
const formError = formElement.querySelector(`.${formInput.id}-error`);

const showError = (input, errorMessage) => {
  // add the error class to the input element
  input.classList.add("form__input_type_error");
  // 2. Assign errorMessage to the textContent for formError.
  formError.textContent = errorMessage;
  // 3. Add the form__input-error_active class to formError.
  formError.classList.add("form__input-error_active");
};

const hideError = (input) => {
  // remove the error class from the input element
  input.classList.remove("form__input_type_error");
};

const checkInputValidity = () => {
  if (!formInput.validity.valid) {
    showError(
      formInput,
      formInput.validationMessage /* 4. Make the error message the function's second parameter. */
    );
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
