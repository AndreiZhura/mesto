<<<<<<< HEAD
const enableValidation = (config) => {
    const formList =
        Array.from(document.querySelectorAll(config.formSelector))
    formList.forEach((formElement) => {
        formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
        setEventListeners(config, formElement)
    })
}

function setEventListeners(config, formElement) {
    const inputList = Array.from(formElement.querySelectorAll(config.inputSelector))
    const buttonElement = formElement.querySelector(config.submitButtonSelector);
    toggleButton(inputList, buttonElement);
    inputList.forEach((inputElement) => {
        inputElement.addEventListener('input', function() {
            isValid(config, formElement, inputElement)
            toggleButton(config, inputList, buttonElement)
        })
    })
}


const isValid = (config, formElement, inputElement) => {
    if (!inputElement.validity.valid) {
        showInputError(config, formElement, inputElement, inputElement.validationMessage)
    } else {
        hideInputError(config, formElement, inputElement)
    }
}

const toggleButton = (config, inputList, buttonElement) => {
    if (hasInvalidInput(inputList)) {
        buttonElement.classList.add(config.inactiveButtonClass);
        buttonElement.disabled = true
    } else {
        buttonElement.classList.remove(config.inactiveButtonClass)
        buttonElement.disabled = false
    }
}

const hasInvalidInput = (inputList) => {
    return inputList.some((inputElement) => {
        return !inputElement.validity.valid
    })
}



const showInputError = (config, formElement, inputElement, errorMessage) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.add(config.inputErrorClass);
    errorElement.textContent = errorMessage
    errorElement.classList.add(config.errorClass)
}

const hideInputError = (config, formElement, inputElement) => {
    const errorElement = formElement.querySelector(`.${inputElement.id}-error`)
    inputElement.classList.remove(config.inputErrorClass)
    errorElement.textContent = '';
    errorElement.classList.remove(config.errorClass)
}

enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactively',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
})
=======
 enableValidation({
     formSelector: '.popup__container',
     inputSelector: '.popup__input',
     submitButtonSelector: '.popup__save',
     inactiveButtonClass: 'popup__save_inactively',
     inputErrorClass: 'popup__input_type_error',
     errorClass: 'popup__error_active'
 })

 function enableValidation({ formSelector, ...rest }) {
     const forms = Array.from(document.querySelectorAll(formSelector))
     forms.forEach((formElement) => {
         formElement.addEventListener('submit', (evt) => {
             evt.preventDefault();
         })
         setEventListeners(formElement, rest)
     })
 }


 function toggleButton(inputList, buttonElement, { inactiveButtonClass }) {
     if (hasInvalidInput(inputList)) {
         buttonElement.classList.add(inactiveButtonClass);
         buttonElement.disabled = true
     } else {
         buttonElement.classList.remove(inactiveButtonClass)
         buttonElement.disabled = false
     }
 }

 function setEventListeners(formElement, { inputSelector, submitButtonSelector }) {
     const inputList = Array.from(formElement.querySelectorAll(inputSelector))
     const buttonElement = formElement.querySelector(submitButtonSelector);
     toggleButton(inputList, buttonElement);
     inputList.forEach((inputElement) => {
         inputElement.addEventListener('input', function() {
             isValid(formElement, inputElement)
             toggleButton(inputList, buttonElement)
         })
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





 const hasInvalidInput = (inputList) => {
     return inputList.some((inputElement) => {
         return !inputElement.validity.valid
     })
 }


 enableValidationList();
>>>>>>> ab78f8d653a81484f750900afbaa7ddc1858fc0f
