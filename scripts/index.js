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

const popupElementsButtonSave = document.getElementById('popupElementsButtonSave');

// фотопопап
const photopopup = document.getElementById('photo-popup')

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

photoPopupButtonClose.addEventListener('click', closePhotoPopup);
ButtonRemove.addEventListener('click', removeElements)



// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»

const initialCards = [{
        name: "Архыз",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"
    },
    {
        name: "Челябинская область",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"
    },
    {
        name: "Иваново",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"
    },
    {
        name: "Камчатка",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"
    },
    {
        name: "Холмогорский район",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"
    },
    {
        name: "Байкал",
        link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"
    }
];

const placesContainer = document.querySelector(".elements");
const placeTemplate = document.querySelector(".template").content;

const placeInfo = initialCards.map(function(item) {
    return {
        name: item.name,
        link: item.link
    };
});

function render() {
    placeInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
    const placeElement = placeTemplate.querySelector(".element").cloneNode(true);
    const ButtonRemove = document.querySelector('.element__basket');
    placeElement.querySelector(".element__title").textContent = name;
    placeElement.querySelector(".element__rectangle").src = link;



    placesContainer.prepend(placeElement);
}

function removeElements(evt) {
    const element = evt.target.closest('element_open');
    element.remove();

}

function handelAddImage() {
    const inputTitleValue = document.getElementById('titleImput').value;
    const elementTitleValue = renderCard({ name: inputTitleValue });
    placesContainer.prepend(elementTitleValue);

}
render();