 export class EnableValidation {
     constructor(formElement, rest) {
         this._formElement = formElement,
             this._inputSelector = rest.inputSelector,
             this._submitButtonSelector = rest.submitButtonSelector,
             this._inactiveButtonClass = rest.inactiveButtonClass,
             this._inputErrorClass = rest.inputErrorClass,
             this._errorClass = rest.errorClass

     }

     _setEventListeners() {
         const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
         const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
         toggleButton(inputList, buttonElement, { inactiveButtonClass });
         inputList.forEach((inputElement) => {
             inputElement.addEventListener('input', function() {
                 this._isValid(this._formElement, inputElement, )
                 this._toggleButton(inputList, buttonElement)
             })
         })
     }
     _toggleButton(inputList, buttonElement) {
         if (hasInvalidInput(inputList)) {
             buttonElement.classList.add(this._inactiveButtonClass);
             buttonElement.disabled = true
         } else {
             buttonElement.classList.remove(this._inactiveButtonClass)
             buttonElement.disabled = false
         }
     }

     _hasInvalidInput(inputList) {
         return inputList.some((inputElement) => {
             return !inputElement.validity.valid
         })
     }

     _isValid(formElement, inputElement) {
         if (!inputElement.validity.valid) {
             this._showInputError(formElement, inputElement, inputElement.validationMessage)
         } else {
             this._hideInputError(formElement, inputElement)
         }
     }

     _hideInputError(inputElement) {
         const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
         inputElement.classList.remove(this._inputErrorClass)
         errorElement.textContent = '';
         errorElement.classList.remove(this._errorClass)
     }

     _showInputError(inputElement, errorMessage) {
         const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
         inputElement.classList.add(this._inputErrorClass);
         errorElement.textContent = errorMessage
         errorElement.classList.add(errorClass)
     }
 }

 export { EnableValidation }