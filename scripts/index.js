// спринт 4
// попап провиля
let formElement = document.getElementById('popupContainer')
const popupProfile = document.getElementById('popupProfile');
const popOpenProfile = document.getElementById('popOpenProfile');
const closeButtonProfile = document.getElementById('closeButtonProfile');


const prolileName = document.getElementById('profileName');
const profileProfession = document.getElementById('profileProfession');
const nameInput = document.getElementById('nameInput');
const jobInput = document.getElementById('jobInput');

function functionPopupOpenrofile() {
    popupProfile.classList.remove('popup_profile');
    nameInput.value = prolileName.textContent;
    jobInput.value = profileProfession.textContent;
}

function functionPopupCloseProfile() {
    popupProfile.classList.add('popup_profile');
}

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    prolileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    functionPopupCloseProfile();
    // Вставьте новые значения с помощью textContent
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler);

popOpenProfile.addEventListener('click', functionPopupOpenrofile);
closeButtonProfile.addEventListener('click', functionPopupCloseProfile);