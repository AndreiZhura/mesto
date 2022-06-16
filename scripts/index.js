import Card from './Card.js'
import FormValidator from './Formvalidation.js';
import Popup from './Popup.js'
import Section from './Section.js';

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

export const popupProfile = document.querySelector('#popupProfile');
export const popupProfileOpenButton = document.querySelector('#popOpenProfile');
export const popupProfileCloseButton = document.querySelector('#closeButtonProfile');
export const profileName = document.querySelector('#profileName');
export const profileProfession = document.querySelector('#profileProfession');
export const nameInput = document.querySelector('#name-input');
export const jobInput = document.querySelector('#job-input');
export const formPopupProfile = document.querySelector('#popupContainerProfile');
export const cardPopup = document.querySelector('#popupElements');
export const cardPopupOpenButton = document.querySelector('#popOpenElements');
export const cardPopupCloseButton = document.querySelector('#closeButtonElement');
export const formCardPopup = document.querySelector('#popupContainerElements');
export const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose');
export const elements = document.querySelector('.elements');
export const inputTitleValue = document.querySelector('#title-input');
export const inputImageValue = document.querySelector('#link-input');
export const popupFormProfile = document.querySelector('#popupProfile');
export const popupFormCard = document.querySelector('#popupElements');
export const popupProfileValid = popupFormProfile.querySelector('.popup__container')
export const popupCardValid = popupFormCard.querySelector('.popup__container');
export const photoPopupImage = document.querySelector('.popup__img');
export const photopopupTitle = document.querySelector('.popup__text');
export const popupPhoto = document.querySelector('#popupPhoto');
export const template = document.querySelector('.template')


const ESC_CODE = 'Escape';
const ENTER_CODE = 'Enter';

const formValidators = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactively',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
}

const validatorProfile = new FormValidator(formValidators, popupProfileValid)
validatorProfile.enableValidation()


const validatorCard = new FormValidator(formValidators, popupCardValid)
validatorCard.enableValidation()

const popupClassCard = new Popup('#popupElements')

const popupClassProfile = new Popup('#popupProfile')

function openProfilePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}


function openPopup(popup) {
    document.addEventListener('keydown', closeByEsc)
    popup.classList.add('popup_opened')
}
/*
function closePopup(popup) {
    document.removeEventListener('keydown', closeByEsc)
    popup.classList.remove('popup_opened')
}*/

function submitProfileForm(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    validatorProfile.disableButton()
    popupClassProfile.closePopup()
        // Вставьте новые значения с помощью textContent
}

function handleCardFormSubmit(evt) {
    evt.preventDefault()
    addNewElement(inputTitleValue.value, inputImageValue.value);
    evt.target.reset()
    validatorCard.disableButton()
    popupClassCard.closePopup()
}

const renderCard = (place) => {
    const newPlaceCard = new Card(place, '.template' /*handleCardClick*/ );

    return newPlaceCard.generateCard();
}

const cardsCatalogue = new Section({
    items: initialCards.reverse(),
    renderer: (place) => {
        cardsCatalogue.addItem(renderCard(place))
    }
}, elements)
cardsCatalogue.renderItems();

/*
function createCard(name, link) {
    // тут создаете карточку и возвращаете ее
    const card = new Card({ name, link },
        ".template")
    const cardElement = card.generateCard();
    return cardElement
}

function render(element) {
    element.forEach((step) => addNewElement(step.name, step.link));
}

function addNewElement(name, link) {
    const newObj = createCard(name, link)
    elements.prepend(newObj);
}
/*
function closeByOverlayClick(evt) {
    if (evt.target.classList.contains('popup')) {
        closePopup(evt.target);
    }
}

function closeByEsc(evt) {
    if (evt.key === ESC_CODE) {
        const openPopup = document.querySelector('.popup_opened');
        closePopup(openPopup);
    }
}*/


photoPopupButtonClose.addEventListener('click', () => closePopup(popupPhoto));


formPopupProfile.addEventListener('submit', submitProfileForm);
formCardPopup.addEventListener('submit', handleCardFormSubmit);
/*
popupProfile.addEventListener('mousedown', closeByOverlayClick)
cardPopup.addEventListener('mousedown', closeByOverlayClick)
popupPhoto.addEventListener('mousedown', closeByOverlayClick)*/

cardPopupOpenButton.addEventListener('click', () => {
    popupClassCard.openPopup()
})


popupProfileOpenButton.addEventListener('click', () => {
    popupClassProfile.openPopup()
    openProfilePopup()
})

popupProfileCloseButton.addEventListener('click', () => {
    popupClassProfile.closePopup()
});

cardPopupCloseButton.addEventListener('click', () => {
    popupClassCard.closePopup()
})


render(initialCards)