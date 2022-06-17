import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopups) {
        super(selectorPopups)
        this._image = document.querySelector('.popup__img')
        this._title = document.querySelector('.element__title')
    }
    popupOpen(item) {
        this._image.src = item.image;
        this._title.textContent = item.title
        super.popupOpen()
    }
}