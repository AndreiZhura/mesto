/*Создайте класс PopupWithImage,
 который наследует от Popup. Этот класс должен перезаписывать родительский метод open.
  В методе open класса PopupWithImage нужно вставлять в попап картинку и атрибут src изображения.*/
import Popup from "./Popup.js";
import { popupImg, popupTitle } from "./index.js";

export default class PopupWithImage extends Popup {
    constructor(selectorPopop) {
        super(selectorPopop)
    }
    open(name, link) {
        super.open()
        popupTitle.textContent = name;
        popupImg.src = link;
        popupImg.alt = name;

    }

}