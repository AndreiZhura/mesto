const photoPopupImage = document.querySelector('.popup__img');
const photopopupTitle = document.querySelector('.popup__text');
const popupPhoto = document.querySelector('#popupPhoto');



export default class Card {

    _name
    _link
    _openPopup
    _cardElement

    constructor(name, link, cardElement, openPopup) {
        this._name = name
        this._link = link
        this._openPopup = openPopup
        this._cardElement = cardElement
    }

    _getTemplateElement() {
        const cardElement = document
            .querySelector(this._cardElement)
            .content
            .querySelector('.element')
            .cloneNode(true)
        return cardElement
    }

    generateCard() {
        this._element = this._getTemplateElement()
        this._element.querySelector('.element__title').textContent = this._name
        this._elementRectangle = this._element.querySelector('.element__rectangle')
        this._elementRectangle.src = this._link
        this._elementRectangle.alt = this._name
        this._elementLike = this._element.querySelector('.element__like')
        this._elementBascet = this._element.querySelector('.element__basket')

        this._setEventListeners()

        return this._element
    }

    _setEventListeners() {
        this._elementBascet.addEventListener('click', this._handleDelete)
        this._elementLike.addEventListener('click', this._toggleLike)
        this._elementRectangle.addEventListener('click', this._handleImageClick)
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
        photoPopupImage.alt = this._name

        this._openPopup(popupPhoto);
    }
}