// константы ***************************************************************************************************************
// секция попапа профиля
const popupProfile = document.querySelector('.popupProfile');
// кнопка открытия попапа профиля
const popupProfileOpenButton = document.querySelector('#popOpenProfile');
//кнопка закрытия попапа профиля
const popupProfileCloseButton = document.querySelector('#closeButtonProfile');
// экспортируем иконку закрытия попапа

// имя профиля
const profileName = document.querySelector('#profileName');
//профессия профиля
const profileProfession = document.querySelector('#profileProfession');
//Аватар
const profileAvatar = document.querySelector('#profileAvatar')
    // ввод имени профиля
const nameInput = document.querySelector('#name-input');
// профессия имени профиля
const jobInput = document.querySelector('#job-input');
// контайнер попапа профиля
const formPopupProfile = document.querySelector('#popupContainerProfile');
// попап создания карточки
const cardPopup = document.querySelector('.popupElements');
// кнопка открытия попапа карточки
const cardPopupOpenButton = document.querySelector('#popOpenElements');
//кнопка закрытия попапа карточки
const cardPopupCloseButton = document.querySelector('#closeButtonElement');
// форма контэйнера попапа карточки
const formCardPopup = document.querySelector('#popupContainerElements');
// попап с  картинкой и текстом
const popupPhoto = document.querySelector('.popupPhoto');
// кнопка его закрития
const photoPopupButtonClose = document.querySelector('#photoPopupButtonClose');
// div вставки карточки
const elements = document.querySelector('.elements');
// значение первого поля карточки попапа 
//кнопка аватарки
const popupAvatarOpenButton = document.querySelector('.profile__avatar');

const popupDeleteBascet = document.querySelector('.popupDeleteBascet')

const popupFormProfile = document.querySelector('.popupProfile');
const popupFormCard = document.querySelector('.popupElements');
const popupFormAvatar = document.querySelector('.popupAvatars')
    // валидация
const popupProfileValid = popupFormProfile.querySelector('.popup__container')
const popupCardValid = popupFormCard.querySelector('.popup__container');
const popupAvatarsValid = popupFormAvatar.querySelector('.popup__container');

export {
    popupProfile,
    popupProfileOpenButton,
    popupProfileCloseButton,
    profileName,
    profileProfession,
    profileAvatar,
    nameInput,
    jobInput,
    formPopupProfile,
    cardPopup,
    cardPopupOpenButton,
    cardPopupCloseButton,
    formCardPopup,
    popupPhoto,
    photoPopupButtonClose,
    elements,
    popupAvatarOpenButton,
    popupFormProfile,
    popupFormCard,
    popupFormAvatar,
    popupProfileValid,
    popupCardValid,
    popupAvatarsValid,
}