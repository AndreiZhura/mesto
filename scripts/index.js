import Card from "./Card.js";
import Popup from "./Popup.js";
import Section from "./Section.js";
import PopupWithForm from "./PopupWithForm.js";


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
export const popupProfileCloseButton = document.querySelector('#closeButtonProfile');
export const popupButton = document.querySelector('.popup__button')
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

const popupClassCard = new Popup('#popupElements')

const popupClassProfile = new Popup('#popupProfile')


const createCard = (item) => {
    const newCard = new Card(item, '.template')
    return newCard.generateCard()
}

const renderCard = new Section({
    items: initialCards,
    renderer: (item) => {
        renderCard.addItem(createCard(item))
    }

}, elements)
renderCard.renderer()


const popupProfileWithForm = new PopupWithForm({
    
})

popupProfileOpenButton.addEventListener('click', () => {
    popupClassProfile.popupOpen()
})

cardPopupOpenButton.addEventListener('click', () => {
    popupClassCard.popupOpen()
})