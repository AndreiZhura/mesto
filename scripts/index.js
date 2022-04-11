const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container');
const popupElement = document.getElementById('popupElements')
//кнопки вызывающие попап
const popupOpenButtonProfile = document.querySelector('.profile__button-edit');
const popupOpenButtonElements = document.querySelector('.profile__button-add');
    // Находим поля формы в DOM
const prolileName = document.getElementById('profileName');
const profileProfession = document.getElementById('profileProfession');
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const popClose = document.querySelector('.popup__button');
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
//попап профиле
function openProfilePopup() {
    popup.classList.remove('popup_profile');
    nameInput.value = prolileName.textContent;
    jobInput.value = profileProfession.textContent;
}
function closeProfilePopup() {
    popup.classList.add('popup_profile');
}
function openElementsPopup(){
  popupElement.classList.remove('popup_elements');
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
popClose.addEventListener('click', closeProfilePopup);

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


/*Забавно что вы оставляете ссылки на материалы HTML-academy ,
материал там и в правду хорошо изложен!*/
const initialCards = [
    {
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