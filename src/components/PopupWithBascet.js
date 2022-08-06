import Popup from "./Popup.js";

export default class PopupWithBasket extends Popup {
    constructor({ elementDomPopup, deletePopup }) {
        super(elementDomPopup)
        this._deletePopup = deletePopup;
        this._popupForm = this._elementDomPopup.querySelector('.popup__container');
        this._buttonYes = this._popupForm.querySelector('#popupDeleteBasketButtonSave')
        this._cardId = {}
    }

    open(cardId) {
        super.open();
        return this._cardId = cardId;
    }

    close(cardId) {
        super.close()
        return this._cardId = cardId;
    }

    setEventListeners() {
        super.setEventListeners()
        this._popupForm.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._buttonYes.addEventListener('click', () => {
                this._deletePopup(this._cardId)
                this.close();
            })

        })

    }
}