// спринт 4
// попап провиля
let formElementPopupProfile = document.getElementById('popupContainer')
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
formElementPopupProfile.addEventListener('submit', formSubmitHandler);

popOpenProfile.addEventListener('click', functionPopupOpenrofile);
closeButtonProfile.addEventListener('click', functionPopupCloseProfile);

//спринт 5
const popOpenElements = document.getElementById('popOpenElements');
const closeButtonElements = document.getElementById('closeButtonElements');
const popupElements = document.getElementById('popupElements');
const titleImput = document.getElementById('titleImput');
const linkInput = document.getElementById('linkInput');
const popupElementsButtonSave = document.getElementById('popupElementsButtonSave');


function functionPopOpenElements() {
    popupElements.classList.remove('popup_elements');
}

function functionPopCloseElements() {
    popupElements.classList.add('popup_elements');
}

popOpenElements.addEventListener('click', functionPopOpenElements);
closeButtonElements.addEventListener('click', functionPopCloseElements);
popupElementsButtonSave.addEventListener('click', handelAddImageAndTitle);


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
    placeElement.querySelector(".element__title").textContent = name;
    placeElement.querySelector(".element__rectangle").src = link;
    const bascet = placeElement.querySelector('.element__basket');

    placesContainer.prepend(placeElement);
    bascet.addEventListener('click', handelRemoveElements)

}
render();

function handelAddImageAndTitle(evt) {
    evt.preventDefault();
    const inputTitleValue = document.getElementById('titleImput').value;
    const inputImage = document.getElementById('linkInput').value
    const elementTitleValue = renderCard({ name: inputTitleValue, link: inputImage });
    functionPopCloseElements();
}

function likeClick(l) {
    l.target.classList.toggle('element__like_active_white');
    l.target.classList.toggle('element__like_active_black');
}
like.forEach((like) => {
    like.addEventListener('click', likeClick);
});

function handelRemoveElements(evt) {
    const element = evt.target.closest('.element_open');
    element.remove();
}