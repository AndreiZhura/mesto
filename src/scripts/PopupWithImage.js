/*Создайте класс PopupWithImage,
 который наследует от Popup. Этот класс должен перезаписывать родительский метод open.
  В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения.*/
import Popup from "./Popup.js";


export default class PopupWithImage extends Popup {
    constructor(elementDomPopup) {
        super(elementDomPopup)
        this._popupImg = document.querySelector('.popup__img')
        this._popupTitle = document.querySelector('.popup__text')

    }
    open(name, link) {
        super.open()
        this._popupTitle.textContent = name;
        this._popupImg.src = link;
        this._popupImg.alt = name;

    }

}