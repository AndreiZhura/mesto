/*Создайте класс `Popup`, который отвечает за открытие и закрытие попапа. Этот класс:

- Принимает в конструктор единственный параметр — селектор попапа.
- Содержит публичные методы `open` и `close`, которые отвечают за открытие и закрытие попапа.
- Содержит приватный метод `_handleEscClose`, который содержит логику закрытия попапа клавишей Esc.
- Содержит публичный метод `_setEventListeners`, который добавляет слушатель клика иконке закрытия попапа. */


export default class Popup {
    constructor(elementDomPopup) {
        this._elementDomPopup = document.querySelector(elementDomPopup);
        this._buttonClose = this._elementDomPopup.querySelector('.popup__button')
            // this._escClose = this._handleEscClose.bind(this)
    }
    open() {
        this._elementDomPopup.classList.add("popup_opened")
            //  document.addEventListener('keydown', this._escClose)

    }
    close() {
        this._elementDomPopup.classList.remove("popup_opened")
            //  document.removeEventListener('keydown', this._escClose)
    }
    setEventListeners() {
            this._buttonClose.addEventListener('click', () => {
                    this.close()
                })
                /*
                        this._elementDomPopup.addEventListener('mousedown', (event) => {
                            if (event.target.classList.contains('popup')) {
                                this.close();
                            }
                        });*/

        }
        /*
        _handleEscClose = (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }
        }*/
}