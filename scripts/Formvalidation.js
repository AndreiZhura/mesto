function enableValidationList({ formSelector, ...rest }) {
    const formList = Array.from(document.querySelectorAll(formSelector))
    formList.forEach((formElement) => formElement.addEventListener('submit', (evt) => evt.preventDefault()))
    setEventListener(formElement, rest)
}

function setEventListener(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const buttonToggle = formElement.querySelector(submitButtonSelector)
    toggleButton(inputSelector, submitButtonSelector, { inactiveButtonClass })
}

function toggleButton()



enableValidationList({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactively',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
});