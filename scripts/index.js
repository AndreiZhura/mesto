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

const popupProfile = document.querySelector('#popupProfile');
const popupProfileOpenButton = document.querySelector('#popOpenProfile');
const popupProfileCloseButton = document.querySelector('#closeButtonProfile');
const profileName = document.querySelector('#profileName');
const profileProfession = document.querySelector('#profileProfession');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');
const formPopupProfile = document.querySelector('#popupContainerProfile');
const popupElement = document.querySelector('#popupElements');
const popupElementOpenButton = document.querySelector('#popOpenElements');
const popupElementCloseButton = document.querySelector('#closeButtonElement');
const formPopupElement = document.querySelector('#popupContainerElements');
const popupElementsButtonSave = document.querySelector('#popupElementsButtonSave');
const popupProfileButtonSave = document.querySelector('#popupProfileButtonSave');

const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose');
const template = document.querySelector('.template');

const inputTitleValue = document.querySelector('#title-input');
const inputImage = document.querySelector('#link-input');
const buttonElementSave = document.querySelector('#popupElementsButtonSave')


const elements = document.querySelector('.elements');
const likeActive = document.querySelector('.element__like_active_black');
const popupPhoto = document.querySelector('#popupPhoto');
const photopopupTitle = document.querySelector('.popup__text');


function openPopup(popup) {
    popup.addEventListener('keydown', closeByEsc)
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    popup.removeEventListener('keydown', closeByEsc)
    popup.classList.remove('popup_opened')
}

function submitProfileForm(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    closePopup(popupProfile);
    // Вставьте новые значения с помощью textContent
}

function closeByoverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

function closeByEsc(evt) {
    if (evt.key === ESC_CODE) {
        const openPopup = document.querySelector('.popup_opened');
        closePopup(openPopup);
    }
}

popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupElementOpenButton.addEventListener('click', () => openPopup(popupElement));
popupElementCloseButton.addEventListener('click', () => closePopup(popupElement));
photoPopupButtonClose.addEventListener('click', () => closePopup(popupPhoto));
formPopupProfile.addEventListener('submit', submitProfileForm);
popupProfile.addEventListener('mousedown', closeByoverlayClick);
popupElement.addEventListener('mousedown', closeByoverlayClick);
popupPhoto.addEventListener('mousedown', closeByoverlayClick);



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
        this._elementLike = this._element.querySelector('.element__like');
        this._elementBascet = this._element.querySelector('.element__basket');
        this._elementRectangle = this._element.querySelector('.element__rectangle');

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
        popupPhoto.src = this._link

    }

}

initialCards.forEach((element) => {
    const card = new Card(element.name, element.link)
    const cardElement = card.generateCard();
    elements.prepend(cardElement)
})