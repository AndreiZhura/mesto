import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopups) {
        super(selectorPopups)
        this._imagePopup = document.querySelector('.popup__img')
        this._titlePopup = document.querySelector('.popup__text')
    }
    popupOpen(name, link) {
        this._imagePopup.src = link;
        this._titlePopup.textContent = name;
        super.popupOpen()
    }
}