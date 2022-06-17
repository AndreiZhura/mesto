import { popupProfileCloseButton, popupButton } from "./index.js"

export default class Popup {
    constructor(selectorPopup) {
        this._selectorPopup = document.querySelector(selectorPopup)

    }
    popupOpen() {
        this._selectorPopup.classList.add("popup_opened")
    }
    popupClose() {
        this._selectorPopup.classList.remove("popup_opened")
    }
    __handleEscClose() {

    }
    setEventListeners() {
       
    }
}