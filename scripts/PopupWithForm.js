import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitForm) {
        this._popupSelector = document.querySelector(popupSelector)
        this._submitForm = submitForm;
    }

    _getInputValues() {

    }

    setEventListeners() {

    }
}