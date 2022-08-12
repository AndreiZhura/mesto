import Popup from "./Popup.js";

export default class PopupWithBasket extends Popup {
    constructor({ elementDomPopup, deletePopup }) {
        super(elementDomPopup)
        this._deletePopup = deletePopup;
        this._popupForm = this._elementDomPopup.querySelector('.popup__container');
        this._buttonYes = this._popupForm.querySelector('#popupDeleteBasketButtonSave')
        this._deletePopup = deletePopup;
        this._setEvent = this._setEvent.bind(this);
    }
    handleSubmitConfirm(submitConfirm) {
        this._deletePopup = submitConfirm;
    }

    _setEvent(evt) {
        evt.preventDefault();
        this._deletePopup();
    }

    open() {
        super.open();
        this._popupSelector.addEventListener('submit', this._setEvent);
    }

    close() {
        super.close();
        this._popupSelector.removeEventListener('submit', this._setEvent);
    }

}