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


const popOpenProfile = document.querySelector('#popOpenProfile')
const popOpenElements = document.querySelector('#popOpenElements')
const popupProfile = document.querySelector('#popupProfile')
const elements = document.querySelector('.elements')
const template = document.querySelector('.template')
const closeButtonProfile = document.querySelector('#closeButtonProfile')
const formPopupProfile = document.querySelector('#popupContainerProfile');
const popupProfileInputName = document.querySelector('#name-input')
const popupProfileInputJob = document.querySelector('#job-input')
const profileName = document.querySelector('#profileName')
const profileProfession = document.querySelector('#profileProfession')
const popupElements = document.querySelector('#popupElements')
const popupcloseButtonElement = document.querySelector('#closeButtonElement')
const popupElementInputName = document.querySelector('#title-input')
const popupElementInputURL = document.querySelector('#link-input')
const formPopupElement = document.querySelector('#popupContainerElements')
const elementLike = document.querySelector('.element__like')
const photoPopupImg = document.querySelector('.popup__img')
const photoPopupTitle = document.querySelector('.popup__text')
const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose')
const popupPhoto = document.querySelector('#popupPhoto')
const formSelector = document.querySelectorAll('.popup__container')

console.log(formSelector)

function submitPopupProfile(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    profileName.textContent = popupProfileInputName.value
    profileProfession.textContent = popupProfileInputJob.value
    closePopup(popupProfile)
}



function openPopup(open) {
    open.classList.add('popup_opened')
    popupProfileInputName.value = profileName.textContent
    popupProfileInputJob.value = profileProfession.textContent
}

function closePopup(close) {
    close.classList.remove('popup_opened')
}

function render() {
    initialCards.forEach(object => addNewElement(object.name, object.link))
}

function addNewElement(name, link) {
    const newObject = createElement(name, link)
    elements.prepend(newObject)
}

function addImageAndTitle(evt) {
    evt.preventDefault()
    addNewElement(popupElementInputName.value, popupElementInputURL.value)
    closePopup(popupElements)
}

function likeClick(like) {
    like.target.classList.toggle('element__like_active_black')
}

function removeElement(basket) {
    const bascetElement = basket.target.closest('.element')
    bascetElement.remove()
}

function lookingElement(name, link) {
    photoPopupTitle.textContent = name
    photoPopupImg.src = link
    openPopup(popupPhoto)
}

function createElement(name, link) {
    const elementTemplate = template.content.querySelector('.element').cloneNode(true);
    const elementTitle = elementTemplate.querySelector('.element__title').textContent = name
    const elementLink = elementTemplate.querySelector('.element__rectangle').src = link
    const elementBascet = elementTemplate.querySelector('.element__basket')
    const elementLike = elementTemplate.querySelector('.element__like')
    const elementRectangle = elementTemplate.querySelector('.element__rectangle')
    elementLike.addEventListener('click', likeClick)
    elementBascet.addEventListener('click', removeElement)
    elementRectangle.addEventListener('click', () => lookingElement(name, link))

    return elementTemplate
}

popOpenProfile.addEventListener('click', () => openPopup(popupProfile))
closeButtonProfile.addEventListener('click', () => closePopup(popupProfile))
popOpenElements.addEventListener('click', () => openPopup(popupElements))
popupcloseButtonElement.addEventListener('click', () => closePopup(popupElements))
photoPopupButtonClose.addEventListener('click', () => closePopup(popupPhoto))
formPopupProfile.addEventListener('submit', submitPopupProfile)
formPopupElement.addEventListener('submit', addImageAndTitle)


render()