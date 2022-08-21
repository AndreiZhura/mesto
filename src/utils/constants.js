// константы ***************************************************************************************************************

const popupProfileOpenButton = document.querySelector('#popOpenProfile');
const nameInput = document.querySelector('#name-input');
const jobInput = document.querySelector('#job-input');
const cardPopupOpenButton = document.querySelector('#popOpenElements');
const popupAvatarOpenButton = document.querySelector('.profile__avatar');
const popupPencilAvatarOpenButton = document.querySelector('.profile__pencil')
const popupFormProfile = document.querySelector('.popupProfile');
const popupFormCard = document.querySelector('.popupElements');
const popupFormAvatar = document.querySelector('.popupAvatars')
    // валидация
const popupProfileValid = popupFormProfile.querySelector('.popup__container')
const popupCardValid = popupFormCard.querySelector('.popup__container');
const popupAvatarsValid = popupFormAvatar.querySelector('.popup__container');


export {
    popupProfileOpenButton,
    nameInput,
    jobInput,
    cardPopupOpenButton,
    popupAvatarOpenButton,
    popupProfileValid,
    popupCardValid,
    popupAvatarsValid,
    popupPencilAvatarOpenButton,
}