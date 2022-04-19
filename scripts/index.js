const popupProfile = document.querySelector('#popupProfile')
const popupProfileOpenButton = document.querySelector('#popOpenProfile');
const popupProfileCloseButton = document.querySelector('#closeButtonProfile');
const profileName = document.querySelector('#profileName');
const profileProfession = document.querySelector('#profileProfession');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const formPopupProfile = document.querySelector('#popupContainerProfile');


const popupElement = document.querySelector('#popupProfile');
const popupElementOpenButton = document.querySelector('#popOpenElements');
const popupElementCloseButton = document.querySelector('#closeButtonElements');
const formPopupElement = document.querySelector('#popupContainerElements')

const popupElementsButtonSave = document.querySelector('#popupElementsButtonSave')
const popupProfileButtonSave = document.querySelector('#popupProfileButtonSave')

const popupPhoto = document.querySelector('#popupPhoto')
const popupText = document.querySelector('.popup__text')
const popupPhotoButtonClose = document.querySelector('#photoPopupButtonClose');

const template = document.querySelector('.template');
const elements = document.querySelector('.elements');




function popupValue() {
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
    openPopup(popupProfile)
}

function openPopup(open) {
    open.classList.add('popup_open');
}

function closePopup(close) {
    close.classList.remove('popup_open')
}

function submitFormHandler(evt) {
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

function addImageAndTitle(evt) {
    evt.preventDefault();
    const inputTitleValue = document.querySelector('#titleImput').value;
    const inputImage = document.querySelector('#linkInput').value;
    addNewElement(inputTitleValue, inputImage);
    closePopup(popupElement);
}

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






function render() {
    initialCards.forEach(step => addNewElement(step.name, step.link));
}

function addNewElement(name, link) {
    const newObj = createElement(name, link);

    elements.prepend(newObj);
}


function createElement(name, link) {
    const elementTemplate = template.content.querySelector('.element').cloneNode(true);
    elementTemplate.querySelector('.element__title').textContent = name;
    elementTemplate.querySelector('.element__rectangle').src = link;

    const elementLike = elementTemplate.querySelector('.element__like');
    const elementBascet = elementTemplate.querySelector('.element__basket');
    const elementRectangle = elementTemplate.querySelector('.element__rectangle');

    elementBascet.addEventListener('click', removeElement);
    elementLike.addEventListener('click', likeClick);
    elementRectangle.addEventListener('click', () => lookingElement(name, link));

    return elementTemplate;
}


function lookingElement(name, link) {

    const photoPopupImage = document.querySelector('.popup__img');
    const photopopupTitle = document.querySelector('.popup__text');
    photoPopupImage.src = link;
    photopopupTitle.textContent = name;
    openPopup(popupPhoto)
}


function likeClick(like) {
    like.target.classList.toggle('element__like_active_black');
}

function removeElement(bascet) {
    const element = bascet.target.closest('.element');
    element.remove();
}

render();

popupProfileOpenButton.addEventListener('click', popupValue)
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile))
popupElementOpenButton.addEventListener('click', () => openPopup(popupElement))
popupPhotoButtonClose.addEventListener('click', () => closePopup(popupPhoto))
formPopupProfile.addEventListener('submit', submitFormHandler)
popupElementsButtonSave.addEventListener('submit', addImageAndTitle)