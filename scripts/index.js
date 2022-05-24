import { Card } from "./Card";

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
const popupPhoto = document.querySelector('#popupPhoto');
const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose');
const template = document.querySelector('.template');
const elements = document.querySelector('.elements');
const photoPopupImage = document.querySelector('.popup__img');
const photopopupTitle = document.querySelector('.popup__text'); //данная переменная используется без нее не откроется попап при клиике на картинку
const inputTitleValue = document.querySelector('#title-input');
const inputImage = document.querySelector('#link-input');
const buttonElementSave = document.querySelector('#popupElementsButtonSave')



const ESC_CODE = 'Escape';
const ENTER_CODE = 'Enter'


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

function addPopupValue() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)
}

function addImageAndTitle(evt) {
    evt.preventDefault()
    render(inputTitleValue.value, inputImage.value);
    inputTitleValue.value = '';
    inputImage.value = '';
    makePassiveButton(buttonElementSave)
    closePopup(popupElement);
}

function makePassiveButton(inactively) {
    inactively.classList.add('popup__save_inactively');
    inactively.disabled = true
}

function render() {
    initialCards.forEach((element) => {
        const card = new Card(element, '.template')
        const cardElement = card.generateCard();
        elements.prepend(cardElement)
    })
}

popupProfileOpenButton.addEventListener('click', addPopupValue);
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupElementOpenButton.addEventListener('click', () => openPopup(popupElement));
popupElementCloseButton.addEventListener('click', () => closePopup(popupElement));
photoPopupButtonClose.addEventListener('click', () => closePopup(popupPhoto));
formPopupProfile.addEventListener('submit', submitProfileForm);
formPopupElement.addEventListener('submit', addImageAndTitle);
popupProfile.addEventListener('mousedown', closeByoverlayClick);
popupElement.addEventListener('mousedown', closeByoverlayClick);
popupPhoto.addEventListener('mousedown', closeByoverlayClick);


render()