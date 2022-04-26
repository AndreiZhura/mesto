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
const popupText = document.querySelector('.popup__text');
const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose');
const template = document.querySelector('.template');
const elements = document.querySelector('.elements');
const photoPopupImage = document.querySelector('.popup__img');
const photopopupTitle = document.querySelector('.popup__text');
const inputTitleValue = document.querySelector('#title-imput');
const inputImage = document.querySelector('#link-input');




function addPopupValue() {
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
    inputTitleValue.value
    inputImage.value
    addNewElement(inputTitleValue.value, inputImage.value);
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
    const elementTitle = elementTemplate.querySelector('.element__title').textContent = name;
    const elementLink = elementTemplate.querySelector('.element__rectangle').src = link;

    const elementLike = elementTemplate.querySelector('.element__like');
    const elementBascet = elementTemplate.querySelector('.element__basket');
    const elementRectangle = elementTemplate.querySelector('.element__rectangle');

    elementBascet.addEventListener('click', removeElement);
    elementLike.addEventListener('click', likeClick);
    elementRectangle.addEventListener('click', () => lookingElement(name, link));

    return elementTemplate;
}

function lookingElement(name, link) {
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

popupProfileOpenButton.addEventListener('click', addPopupValue);
popupProfileCloseButton.addEventListener('click', () => closePopup(popupProfile));
popupElementOpenButton.addEventListener('click', () => openPopup(popupElement));
popupElementCloseButton.addEventListener('click', () => closePopup(popupElement))
photoPopupButtonClose.addEventListener('click', () => closePopup(popupPhoto));
formPopupProfile.addEventListener('submit', submitFormHandler);
formPopupElement.addEventListener('submit', addImageAndTitle);

formPopupProfile.addEventListener('submit', (event) => handleFormSubmit(event));
formPopupProfile.addEventListener('input', (event) => handleFormInput(event, formPopupProfile));
formPopupElement.addEventListener('submit', (event) => handleFormSubmit(event));
formPopupElement.addEventListener('input', (event) => handleFormInput(event, formPopupProfile));

function handleFormSubmit(event) {
    event.preventDefault();
    if (formPopupProfile.checkValidity()) {
        alert('Форма валидна')

    } else {
        alert('форма не валидна')
    }
}

function handleFormInput(event) {
    const input = event.target

    const errorValid = document.querySelector('#' + input.id + '-error')
    console.log(errorValid);
}