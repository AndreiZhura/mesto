export default class Formvalidation {
    constructor(element, formElement) {
        this._inputSelector = element.inputSelector
        this._submitButtonSelector = element.submitButtonSelector
        this._inactiveButtonClass = element.inactiveButtonClass
        this._inputErrorClass = element.inputErrorClass
        this._errorClass = element.errorClass


        this._formElement = formElement

        this._inputList = Array.from(formElement.querySelectorAll(element.inputSelector))
        this._buttonElement = this._formElement.querySelector(element.submitButtonSelector);
    }

    _showInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.add(this._inputErrorClass);
        errorElement.textContent = inputElement.validationMessage
        errorElement.classList.add(this._errorClass)
    }

    _hideInputError(inputElement) {
        const errorElement = this._formElement.querySelector(`.${inputElement.id}-error`)
        inputElement.classList.remove(this._inputErrorClass)
        errorElement.textContent = '';
        errorElement.classList.remove(this._errorClass)
    }

    _isValid(inputElement) {
        if (!inputElement.validity.valid) {
            this._showInputError(inputElement, inputElement.validationMessage)
        } else {
            this._hideInputError(inputElement)
        }
    }

    _toggleButton() {
        if (this._hasInvalidInput(this._inputList)) {
            this._buttonElement.classList.add(this._inactiveButtonClass);
            this._buttonElement.disabled = true
        } else {
            this._buttonElement.classList.remove(this._inactiveButtonClass)
            this._buttonElement.disabled = false
        }
    }


    _hasInvalidInput() {
        return this._inputList.some((inputElement) => {
            return !inputElement.validity.valid
        })
    }

    _setEventListeners() {

        this._toggleButton();

        this._inputList.forEach((inputElement) => {
            inputElement.addEventListener('input', () => {
                this._isValid(inputElement)
                this._toggleButton()
            })
        })
    }

    _addValidElement = () => {
        this._formElement.addEventListener('submit', (evt) => {
            evt.preventDefault();
        })
    }



    resetValidation() {
        this._toggleButton();

        this._inputList.forEach((inputElement) => {
            this._hideInputError(inputElement)

        });
    }

    enableValidationList = () => {
        this._addValidElement()
        this._setEventListeners()
    }


}