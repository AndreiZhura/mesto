export default class Card {
    constructor({ data, handleCardClick }, cardElement) {
        this._name = data.name;
        this._link = data.link;
        this._handleCardClick = handleCardClick;
        this._cardElement = cardElement;
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
        /*
            _handleImageClick = () => {
               this._elementRectangle.addEventListener('click',)
            }*/
}