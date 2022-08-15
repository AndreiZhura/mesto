export default class Card {
    constructor({ data, handleCardClick, handleDeleteCard }, cardElement) {
        this._name = data.name;
        this._link = data.link;
        this._cardId = data._id;
        this._owner = data.owner;

        this._handleDeleteCard = handleDeleteCard
        this._handleCardClick = handleCardClick;



        // template элемент карточки
        this._cardElement = cardElement;
    }

    // получаем элемент шаблона
    _getTemplateElement() {
            return document
                .querySelector(this._cardElement)
                .content
                .querySelector('.element')
                .cloneNode(true)

        }
        // генерируем карточку
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
        // устанавливаем прослушивание событий
    _setEventListeners() {
        this._elementLike.addEventListener('click', this._toggleLike)
        this._elementRectangle.addEventListener('click', this._handleImageClick)
        this._elementBascet.addEventListener('click', this._handleCardClickDelete)

    }

    // ставим лайк
    _toggleLike = () => {
            this._elementLike.classList.toggle('element__like_active_black')
        }
        // открываем попап с картинкой
    _handleImageClick = () => {
            this._handleCardClick(this._name, this._link)
        }
        // удаляем карточку
    _handleCardClickDelete = () => {
        this._handleDeleteCard(this._cardId)
    }

    handleDelete = () => {
        this._element.remove();
    }

}