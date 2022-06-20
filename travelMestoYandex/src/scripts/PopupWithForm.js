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
    constructor({ selectorPopup, buttonClose, popupForm, submitForm }) {
            super(selectorPopup)
            this.buttonClose = buttonClose;
            this.submitForm = submitForm;
            this.formPopup = popupForm
            this._popupForm = this._selectorPopup.querySelector('.popup__container');
            this._inputList = this._popupForm.querySelectorAll('.popup__input');
        }
        /*

            _getInputValues() {
                this._formValues = {};
                this._inputList.forEach(input => {
                    this._formValues[input.name] = input.value;
                })

                return this._formValues;
            }

            setEventListeners() {
                super.setEventListeners()
                this.formPopup.addEventListener('submit', (evt) => {
                    evt.preventDefault();

                    this.submitForm(this._getInputValues());
                })
            }
            closePopup() {
                super.close()
                this.formPopup.reset();
            }
        }