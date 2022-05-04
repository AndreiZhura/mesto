const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

const toggleButton = (inputList, buttonElement, { inactiveButtonClass }) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(inactiveButtonClass);
        buttonElement.disabled = true
    } else {
        buttonElement.classList.remove(inactiveButtonClass)
        buttonElement.disabled = false
    }
}

const isValid = (formElement, inputElement, { inputErrorClass, errorClass }) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage, { inputErrorClass, errorClass })
    } else {
        hideInputError(formElement, inputElement, { inputErrorClass, errorClass })
    }
}
const hideInputError = (formElement, inputElement, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(inputErrorClass)
    errorElement.textContent = '';
    errorElement.classList.remove(errorClass)
}

const showInputError = (formElement, inputElement, errorMessage, { inputErrorClass, errorClass }) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(inputErrorClass);
    errorElement.textContent = errorMessage
    errorElement.classList.add(errorClass)
}

const enableValidationList = ({ formSelector, ...rest }) => {
    const formList = Array.from(document.querySelectorAll(formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formElement, rest)
    })
}

function setEventListeners(formElement, { inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass }) {
    const inputList = Array.from(formElement.querySelectorAll(inputSelector))
    const buttonElement = formElement.querySelector(submitButtonSelector);
    toggleButton(inputList, buttonElement, { inactiveButtonClass });
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            isValid(formElement, inputElement, { inputErrorClass, errorClass })
            toggleButton(inputList, buttonElement, { inactiveButtonClass })
            console.log(inputList)
        })
    })
}


enableValidationList({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactively',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
});