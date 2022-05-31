const photoPopupImage = document.querySelector('.popup__img');
const photopopupTitle = document.querySelector('.popup__text');
const popupPhoto = document.querySelector('#popupPhoto');


export default class Card {
    _name
    _link

    constructor(data, cardSelector, handleCardClick) {
        this._name = data.name
        this._link = data.link
        this._cardSelector = cardSelector
        this._handleCardClick = handleCardClick
    }

    _getTemplateElement() {
        const cardElement = document
            .querySelector(this._cardSelector)
            .content
            .querySelector('.element')
            .cloneNode(true)
        return cardElement
    }

    generateCard() {
        this._element = this._getTemplateElement()
        this._element.querySelector('.element__title').textContent = this._name
        this._element.querySelector('.element__rectangle').src = this._link
        this._elementLike = this._element.querySelector('.element__like')
        this._elementBascet = this._element.querySelector('.element__basket')
        this._elementRectangle = this._element.querySelector('.element__rectangle')
        this._elementBascet.addEventListener('click', this._handleDelete)
        this._elementLike.addEventListener('click', this._toggleLike)
        this._elementRectangle.addEventListener('click', this._lookingPopupOpen)

        return this._element
    }

    _handleDelete = () => {
        this._element.remove();
    }

    _toggleLike = () => {
        this._elementLike.classList.toggle('element__like_active_black')
    }


    _handleImageClick = () => {
        photopopupTitle.textContent = this._name
        photoPopupImage.src = this._link
        popupPhoto.classList.add('popup_opened')
    }

    _lookingPopupClose = () => {
        photopopupTitle.textContent = ''
        photoPopupImage.src = ''
        popupPhoto.classList.remove('popup_opened')
    }

}