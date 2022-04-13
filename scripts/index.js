const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');
const popupElement = document.getElementById('popupElements');
//кнопки вызывающие попап
const popupOpenButtonProfile = document.getElementById('popOpenProfile');
const popupOpenButtonElements = document.getElementById('popOpenElements');
//кнопки закрывающие попап
const closeButtonElements = document.getElementById('closeButtonElements');
const closeButtonProfile = document.getElementById('closeButtonProfile');
//кнопка нажатия на картинки в элементах
const openPhotoPopupButton = document.querySelector('.element__rectangle');
const photoPopupButtonClose = document.getElementById('photoPopupButtonClose');
// внутренности попапа профиля
const prolileName = document.getElementById('profileName');
const profileProfession = document.getElementById('profileProfession');
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');

// фотопопап
const photopopup = document.getElementById('photo-popup');
const elementBasket = document.querySelector('.element__basket');
const element = document.querySelector('.element');


// лайки
const likeWhite = document.querySelector('.element__like_active_white');
const likeBlack = document.querySelector('.element__like_active_black');
let like = document.querySelectorAll('.element__like');
//лайк
function likeClick(l) {
    l.target.classList.toggle('element__like_active_white');
    l.target.classList.toggle('element__like_active_black');
}

like.forEach((like) => {
    like.addEventListener('click', likeClick);
});

function photopopup(p) {
    p.target.classList.toggle('element__rectangle');
    p.target.classList.toggle('popup__button');
};
openPhotoPopupButton.forEach((openPhoto) => {
    openPhoto.addEventListener('click', photopopup)
});

//попап профиля
function openProfilePopup() {
    popup.classList.remove('popup_profile');
    nameInput.value = prolileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function closeProfilePopup() {
    popup.classList.add('popup_profile');
}
// попап элемента
function openElementsPopup() {
    popupElement.classList.remove('popup_elements');
}

function closeElementPopup() {
    popupElement.classList.add('popup_elements');
}
// попап с фото
function openPhotoPopup() {
    photopopup.classList.remove('photopopup_open');
}

function closePhotoPopup() {
    photopopup.classList.add('photopopup_open');
}

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value

    // Выберите элементы, куда должны быть вставлены значения полей
    prolileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    // Вставьте новые значения с помощью textContent
    closeProfilePopup();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);
popupOpenButtonProfile.addEventListener('click', openProfilePopup);
popupOpenButtonElements.addEventListener('click', openElementsPopup);

closeButtonProfile.addEventListener('click', closeProfilePopup);
closeButtonElements.addEventListener('click', closeElementPopup);





// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»