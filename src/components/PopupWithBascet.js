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
        this._cardId = cardId;
        super.open();
        this._buttonYes.textContent = "Да"
            /*
            //+
            return this._cardId
            */

    }

    close() {
        super.close();
    }

    setEventListeners() {
            super.setEventListeners()
            this._popupForm.addEventListener('submit', (evt) => {
                evt.preventDefault();
                this._deletePopup(this._cardId)
            })
        }
        /*
        //+
        renderLoading(load) {
            super.renderLoading(load)
        }*/


}