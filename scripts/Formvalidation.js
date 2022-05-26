class EnableValidation {
    constructor(formElement, inputSelector, submitButtonSelector, inactiveButtonClass, inputErrorClass, errorClass) {
        this._formElement = formElement,
            this._inputSelector = inputSelector,
            this._submitButtonSelector = submitButtonSelector,
            this._inactiveButtonClass = inactiveButtonClass,
            this._inputErrorClass = inputErrorClass,
            this._errorClass = errorClass

    }

    _form() {
        const form = Array.from(document.querySelectorAll(this._inputSelector))
        form.forEach((fotmElement) => {
            fotmElement.addEventListener('submit', (evt) => {
                evt.preventDefault();
            })
            this._setEventListeners()
        })
    }

    _setEventListeners() {
        const inputList = Array.from(this._formElement.querySelectorAll(this._inputSelector))
        const buttonElement = this._formElement.querySelector(this._submitButtonSelector);
        toggleButton(inputList, buttonElement);
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