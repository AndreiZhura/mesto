/*
export default class Card {

    _name
    _link
    _openPopup
    _cardElement

    constructor({data}, cardElement ) {
        this._name = data.name
        this._link = data.link
       
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
*/

export default class Card {
    constructor(place, cardElement /*openPopup*/ ) {
        this._name = place.name;
        this._link = place.link;
        this._cardElement = cardElement;
        // this._openPopup = openPopup;
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

    _toggleLike = () => {
        this._elementLike.classList.toggle('element__like_active_black')
    }

    _handleDelete = () => {
        this._element.remove();
    }

    _setEventListeners() {
        this._elementBascet.addEventListener('click', this._handleDelete)
        this._elementLike.addEventListener('click', this._toggleLike)
        this._elementRectangle.addEventListener('click', this._handleImageClick)
    }

    /*

    _placeListeners(placeImage, placeName) {
        this._element
            .querySelector(".place__button-delete")
            .addEventListener("click", (e) => {
                this._deleteCard(e);
            });
        this._element
            .querySelector(".place__button-like")
            .addEventListener("click", (e) => {
                this._like(e);
            });
        this._element
            .querySelector(".place__pic")
            .addEventListener("click", () => {
                this._openPopup(placeImage, placeName);
            });
        }
        */
}