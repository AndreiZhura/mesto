import Popup from "./Popup.js";

export default class PopupWithBasket extends Popup {
    constructor({ elementDomPopup, submitForm }) {
        super(elementDomPopup)
        this._submitForm = submitForm;
        this._popupForm = this._elementDomPopup.querySelector('.popup__container');
        this._buttonYes = this._popupForm.querySelector('#popupDeleteBasketButtonSave')
        this._cardId = {}
    }

    open(cardId) {
        super.open();
        return this._cardId = cardId;
    }

    close() {
        super.close()
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._buttonYes.addEventListener('click', () => {
                this._submitForm(this._cardId)
            })

        })

    }
}