import Card from './Card.js'
import Formvalidation from './Formvalidation.js';

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
const cardPopupButtonSave = document.querySelector('#popupElementsButtonSave');
const popupProfileButtonSave = document.querySelector('#popupProfileButtonSave');
const popupPhoto = document.querySelector('#popupPhoto');
const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose');
const template = document.querySelector('.template');
const elements = document.querySelector('.elements');
const photoPopupImage = document.querySelector('.popup__img');
const photopopupTitle = document.querySelector('.popup__text'); //данная переменная используется без нее не откроется попап при клиике на картинку
const inputTitleValue = document.querySelector('#title-input');
const inputImage = document.querySelector('#link-input');
const buttonElementSave = document.querySelector('#popupElementsButtonSave');


const ESC_CODE = 'Escape';
const ENTER_CODE = 'Enter'

function openProfilePopup() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)
}


function openPopup(popup) {
    document.addEventListener('keydown', closeByEsc)
    popup.classList.add('popup_opened')
}

function closePopup(popup) {
    document.removeEventListener('keydown', closeByEsc)
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

function handleCardFormSubmit(evt) {
    evt.preventDefault()

    addNewElement(inputTitleValue.value, inputImage.value);
    evt.target.reset()
    makePassiveButton(buttonElementSave)
    closePopup(cardPopup);
}

function makePassiveButton(inactively) {
    inactively.classList.add('popup__save_inactively');
    inactively.disabled = true
}

function render() {
    initialCards.forEach((step) => addNewElement(step.name, step.link));
}

function addNewElement(name, link) {
    const card = new Card(name, link)
    const newObj = card.generateCard();
    elements.prepend(newObj);
}


const enableValidation = ({ formSelector, ...rest }) => {
    const formList = Array.from(document.querySelectorAll(formSelector))
    formList.forEach((formElement) => {
        const valid = new Formvalidation(rest, formElement)
        valid.enableValidation()
    })
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


popupProfileOpenButton.addEventListener('click', openProfilePopup);
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
cardPopupOpenButton.addEventListener('click', () => openPopup(cardPopup));
cardPopupCloseButton.addEventListener('click', () => closePopup(cardPopup))
photoPopupButtonClose.addEventListener('click', () => closePopup(popupPhoto));
formPopupProfile.addEventListener('submit', submitProfileForm);
formCardPopup.addEventListener('submit', handleCardFormSubmit);
popupProfile.addEventListener('mousedown', closeByoverlayClick)
cardPopup.addEventListener('mousedown', closeByoverlayClick)
popupPhoto.addEventListener('mousedown', closeByoverlayClick)

render();
enableValidation({
    formSelector: '.popup__container',
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactively',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
})