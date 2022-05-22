const initialCards = [{

        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

const elements = document.querySelector('.elements');
const likeActive = document.querySelector('.element__like_active_black')


class Card {
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
        this._element.querySelector('.element__title').textContent = this._name
        this._element.querySelector('.element__rectangle').src = this._link
        const elementLike = this._element.querySelector('.element__like');
        const elementBascet = this._element.querySelector('.element__basket');
        const elementRectangle = this._element.querySelector('.element__rectangle');
        elementBascet.addEventListener('click', this._delClickHandler)
        elementLike.addEventListener('click', this._likeClick)

        return this._element
    }
    _delClickHandler = () => {
        this._element.remove();
    }

    _likeClick = () => {
        this._element.toggle()
    }


}

initialCards.forEach((element) => {
    const card = new Card(element.name, element.link)
    const cardElement = card.generateCard();
    elements.prepend(cardElement)
})