const formSelector = '.popup__container'
const inputSelector = '.popup__input'
const submitButtonSelector = '.popup__save'
const inactiveButtonClass = 'popup__save_inactively'
const inputErrorClass = 'popup__input_type_error'
const errorClass = 'popup__error_active'


const checkInputValidity = () => {
    if (!inputSelector.validity.valid) {

    }
}

formSelector.addEventListener('submit', function(evt) {
    evt.preventDefault()
})

inputSelector.addEventListener('input', function(evt) {
    checkInputValidity();
})