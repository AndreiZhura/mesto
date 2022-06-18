/*Создайте класс `Popup`, который отвечает за открытие и закрытие попапа. Этот класс:

- Принимает в конструктор единственный параметр — селектор попапа.
- Содержит публичные методы `open` и `close`, которые отвечают за открытие и закрытие попапа.
- Содержит приватный метод `_handleEscClose`, который содержит логику закрытия попапа клавишей Esc.
- Содержит публичный метод `_setEventListeners`, который добавляет слушатель клика иконке закрытия попапа. */

import { popupClose, ESC_CODE } from "./index.js"

export default class Popup {
    constructor(selectorPopop) {
        this._selectorPopup = selectorPopop
    }
    open() {
        this._selectorPopup.classList.add("popup_opened")
    }
    close() {
        this._selectorPopup.classList.remove("popup_opened")
    }
    setEventListeners() {
        popupClose.addEventListener('click', () => {
            this.close()
        })
        this._selectorPopup.addEventListener('mousedown', (evt) => {
            if (evt.target.classList.contains('popup')) {
                this.close();
            }
        })
        document.addEventListener('keydown', (evt) => {
            this._handleEscClose(evt)
        })
    }
    _handleEscClose(evt) {
        if (evt.key === ESC_CODE) {
            this.close();
        }
    }
}