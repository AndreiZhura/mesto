const popup = document.querySelector('.popup');
const formElement = document.querySelector('.popup__container')
    // Находим поля формы в DOM
const prolileName = document.getElementById('profileName');
const profileProfession = document.getElementById('profileProfession');
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');
const popOpenButton = document.querySelector('.profile__button-edit');
const popClose = document.querySelector('.popup__button');
const likeWhite = document.querySelector('.element__like_active_white');
const likeBlack = document.querySelector('.element__like_active_black');

function like(){
    
}

function open() {
    popup.classList.add('popup_open');
    nameInput.value = prolileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function close() {
    popup.classList.remove('popup_open');
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
    close();
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

popOpenButton.addEventListener('click', open);
popClose.addEventListener('click', close);
// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»


/*Забавно что вы оставляете ссылки на материалы HTML-academy ,
материал там и в правду хорошо изложен!*/