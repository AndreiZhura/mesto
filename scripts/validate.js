const enableValidation = {
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactively',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
}

function enableValidationList() {
    const formList =
        Array.from(document.querySelectorAll(enableValidation.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(formElement)
    })
}

const showInputError = (formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(enableValidation.inputErrorClass);
    errorElement.textContent = errorMessage
    errorElement.classList.add(enableValidation.errorClass)
}

const hideInputError = (formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(enableValidation.inputErrorClass)
    errorElement.textContent = '';
    errorElement.classList.remove(enableValidation.errorClass)
}

const isValid = (formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(formElement, inputElement, inputElement.validationMessage)
    } else {
        hideInputError(formElement, inputElement)
    }
}

function setEventListeners(formElement) {
    const inputList = Array.from(formElement.querySelectorAll(enableValidation.inputSelector))
    const buttonElement = formElement.querySelector(enableValidation.submitButtonSelector);
    toggleButton(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            isValid(formElement, inputElement)
            toggleButton(inputList, buttonElement)
        })
    })
}



const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}

const toggleButton = (inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(enableValidation.inactiveButtonClass);
        buttonElement.disabled = true
    } else {
        buttonElement.classList.remove(enableValidation.inactiveButtonClass)
        buttonElement.disabled = false
    }
}

enableValidationList();