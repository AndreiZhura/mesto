class Card {
    _name
    _link
    _cardSelector

    constructor(data, cardSelector) {
        this._name = data.name
        this._link = data.link
        this._cardSelector = cardSelector;
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

        this._elementBascet.addEventListener('click', this._delClickHandler)
        this._elementLike.addEventListener('click', this._likeClick)
        this._elementRectangle.addEventListener('click', this._lookingElement)

        return this._element
    }
    _delClickHandler = () => {
        this._element.remove();
    }

    _likeClick = () => {
        this._elementLike.classList.toggle('element__like_active_black')
    }


    _lookingElement = () => {
        photopopupTitle.textContent = this._name
        photoPopupImage.src = this._link
        openPopup(popupPhoto)
    }


}

export { Card }