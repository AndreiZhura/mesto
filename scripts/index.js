import Card from "./Card.js";
import Popup from "./Popup.js";
import Section from "./Section.js";
import FormValidator from "./Formvalidation.js"
import PopupWithImage from "./PopupWithImage.js";


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
const cardPopup = document.querySelector('#popupElements');
const cardPopupOpenButton = document.querySelector('#popOpenElements');
const cardPopupCloseButton = document.querySelector('#closeButtonElement');
const formCardPopup = document.querySelector('#popupContainerElements');
const popupPhoto = document.querySelector('#popupPhoto');
const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose');
const elements = document.querySelector('.elements');
const inputTitleValue = document.querySelector('#title-input');
const inputImageValue = document.querySelector('#link-input');
const popupFormProfile = document.querySelector('#popupProfile');
const popupFormCard = document.querySelector('#popupElements');
const popupProfileValid = popupFormProfile.querySelector('.popup__container')
const popupCardValid = popupFormCard.querySelector('.popup__container');

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


const createCard = (item) => {
    const newCard = new Card({ item: item, }, '.template')
    return newCard.generateCard()
}

const renderCard = new Section({
    items: initialCards,
    renderer: (item) => {
        renderCard.addItem(createCard(item))
    }

}, elements)
renderCard.rendererCard()



popupProfileOpenButton.addEventListener('click', () => {
    popupClassProfile.popupOpen()
})

cardPopupOpenButton.addEventListener('click', () => {
    popupClassCard.popupOpen()
})