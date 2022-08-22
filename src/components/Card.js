export default class Card {
    constructor({ data, handleCardClick, handleDeleteCard, handleLikeClick }, cardElement, userId) {
            this._name = data.name;
            this._link = data.link;
            this._cardId = data._id;
            this._likes = data.likes;
            this._likesLenght = data.likes.length;
            this._ownerId = data.owner._id;
            this._likesName = data.likes.name

            this._handleDeleteCard = handleDeleteCard;
            this._handleCardClick = handleCardClick;
            this._handleLikeClick = handleLikeClick;
            // переменная id Usera 
            this._userId = userId;

            // template элемент карточки
            this._cardElement = cardElement;
            this._likeUsers = {};
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
            this._element.querySelector('.element__title').textContent = this._name;
            this._elementRectangle = this._element.querySelector('.element__rectangle');
            this._elementRectangle.src = this._link;
            this._elementRectangle.alt = this._name;
            this._elementLike = this._element.querySelector('.element__like');
            this._elementNumber = this._element.querySelector('.element__number');
            this._elementNumber.textContent = this._likesLenght
            this._elementBascet = this._element.querySelector('.element__basket');
            this._elementLikeActive = this._element.querySelector('.element__like_active_black');
            //выставляет корзину
            if (this._ownerId !== this._userId) {
                this._elementBascet.remove()
            }

            if (this._likesLenght) {
                console.log(this._likesLenght)
                this._likes.forEach((item) => {
                    console.log(item)
                    this._checkingLikes(item, this._likesLenght)
                })
            }
            this._setEventListeners()

            return this._element
        }
        // устанавливаем прослушивание событий


    _checkingLikes(item, likesLenght) {
        console.log(item, likesLenght)
        if (item._id == this._userId) {
            this._elementLike.classList.add('element__like_active_black');
            this._elementNumber.textContent = likesLenght;


        } else {
            this._elementNumber.textContent = likesLenght;

        }

    }
    isLiked() {
        if (this._elementLike.classList.contains('element__like_active_black')) {
            return true
        } else {
            return false
        }
    }

    addLike(likesLenght) {
        this._elementLike.classList.add('element__like_active_black');
        this._elementNumber.textContent = likesLenght;

    }
    deleteLike(likesLenght) {
        this._elementLike.classList.remove('element__like_active_black');
        this._elementNumber.textContent = likesLenght;
    }

    _setEventListeners() {
            this._elementLike.addEventListener('click', this._handleLikeAndDislike)
            this._elementRectangle.addEventListener('click', this._handleImageClick)
            this._elementBascet.addEventListener('click', this._handleCardClickDelete)

        }
        // ставим лайк



    // добавление лайка

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

    _handleLikeAndDislike = () => {
        this._handleLikeClick(this)
    }


}