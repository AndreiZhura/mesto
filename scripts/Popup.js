export default class Popup {
    constructor(selectorPopups) {
        this._selectorPopups = document.querySelector(selectorPopups)
    }
    openPopup() {
        this._selectorPopups.classList.add('popup_opened')
    }

    closePopup() {

        this._selectorPopups.classList.remove('popup_opened')
    }

    _handleEscClose(evt) {
        if (evt.key === 'Escape') {
            this.close()
        }
    }

    setEventListeners() {
        this._popup.querySelector('.popup__button').addEventListener('click', _ => this.close())
    }
}