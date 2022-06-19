/* класс PopupWithForm:
наследуется от Popup, вызывает его конструктор, в который передает нужный параметр. При этом принимает еще и второй параметр - колбэк сабмита формы.
Создаем два экземпляра этого класса, в каждый передаем свой коллебек (помимо селектора попапа). В одном случае форма редактирует 
данные пользователя на странице, во втором - добавляет новую карточку. В качестве идеи - попробуйте совместить*/

/*Создайте класс PopupWithForm, который наследует от Popup. Этот класс:
Кроме селектора попапа принимает в конструктор колбэк сабмита формы.
Содержит приватный метод _getInputValues, который собирает данные всех полей формы.
Перезаписывает родительский метод setEventListeners. Метод setEventListeners класса 
PopupWithForm должен не только добавлять обработчик клика иконке закрытия, но и добавлять обработчик сабмита формы.
Перезаписывает родительский метод close, так как при закрытии попапа форма должна ещё и сбрасываться.
Для каждого попапа создавайте свой экземпляр класса PopupWithForm.*/

import Popup from "./Popup.js";

export default class PopupWithForm extends Popup {
    constructor({ selectorPopup, submitForm }) {
        super(selectorPopup)
        this.buttonClose = this._selectorPopup.querySelector('.popup__button')
        this.submitForm = submitForm
        this.formPopup = this._selectorPopup.querySelector('.popup__container')
    }

    _getInputValues() {
        super.setEventListeners()
    }
    setEventListeners() {
        this.buttonClose.addEventListener('click', () => {
            super.close()
        })
        this._selectorPopup.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this.submitForm(this._getInputValues());
        })
    }
    closePopup() {

        super.close()
        this.formPopup.reset();

    }
}