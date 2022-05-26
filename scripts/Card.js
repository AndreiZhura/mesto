const photoPopupImage = document.querySelector('.popup__img');
const photopopupTitle = document.querySelector('.popup__text');
const popupPhoto = document.querySelector('#popupPhoto');
const popupCloseButton = document.querySelector('.popup__close');

class Card {
    _name
    _link
    _cardSelector

    constructor(name, link) {
        this._name = name
        this._link = link


    }

    _getTemplateElement() {
        const cardElement = document
            .querySelector('.template')
            .content
            .querySelector('.element')
            .cloneNode(true)
        return cardElement
    }
    generateCard() {
        this._element = this._getTemplateElement()
            // this._setEventListeners()
        this._element.querySelector('.element__title').textContent = this._name
        this._element.querySelector('.element__rectangle').src = this._link

        this._elementLike = this._element.querySelector('.element__like')
        this._elementBascet = this._element.querySelector('.element__basket')
        this._elementRectangle = this._element.querySelector('.element__rectangle')


        this._elementBascet.addEventListener('click', this._delClickHandler)
        this._elementLike.addEventListener('click', this._likeClick)
        this._elementRectangle.addEventListener('click', this._lookingPopupOpen)





        return this._element
    }



    _delClickHandler = () => {
        this._element.remove();
    }

    _likeClick = () => {
        this._elementLike.classList.toggle('element__like_active_black')
    }


    _lookingPopupOpen = () => {
        photopopupTitle.textContent = this._name
        photoPopupImage.src = this._link
        popupPhoto.classList.add('popup_opened')
    }

    _lookingPopupClose = () => {
            photopopupTitle.textContent = ''
            photoPopupImage.src = ''
            popupPhoto.classList.remove('popup_opened')
        }
        /*
            _setEventListeners() {
                this._element.addEventListener('click', () => {
                    // откройте попап
                    this._lookingPopupOpen()
                });
                popupCloseButton.addEventListener('click', () => {
                    // закройте попап
                    this._lookingPopupClose()
                });
            }
        */

}

export { Card }