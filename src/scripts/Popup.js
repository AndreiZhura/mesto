/*Создайте класс `Popup`, который отвечает за открытие и закрытие попапа. Этот класс:

- Принимает в конструктор единственный параметр — селектор попапа.
- Содержит публичные методы `open` и `close`, которые отвечают за открытие и закрытие попапа.
- Содержит приватный метод `_handleEscClose`, который содержит логику закрытия попапа клавишей Esc.
- Содержит публичный метод `_setEventListeners`, который добавляет слушатель клика иконке закрытия попапа. */

import { ESC_CODE } from "./index.js"
export default class Popup {
    constructor(elementDomPopup) {
        this._elementDomPopup = document.querySelector(elementDomPopup);
        this._buttonClose = this._elementDomPopup.querySelector('.popup__button')
    }
    open() {
        this._elementDomPopup.classList.add("popup_opened")
        document.addEventListener('keydown', (evt) => { this._handleEscClose(evt) })

    }
    close() {
        this._elementDomPopup.classList.remove("popup_opened")
        document.removeEventListener('keydown', (evt) => { this._handleEscClose(evt) })
    }
    setEventListeners() {
        this._buttonClose.addEventListener('click', () => {
            this.close()
        })

        this._elementDomPopup.addEventListener('mousedown', (event) => {
            if (event.target.classList.contains('popup')) {
                this.close();
            }
        });

    }
    _handleEscClose(evt) {
        if (evt.key === ESC_CODE) {
            this.close();
        }
    }
}