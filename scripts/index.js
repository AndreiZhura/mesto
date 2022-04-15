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
const photopopup = document.getElementById('photo-popup');
const photoPopupButtonClose = document.getElementById('photoPopupButtonClose');
const elementTitle = document.querySelector('.element__title');
const elementImage = document.querySelector('.element__rectangle');
const placesContainer = document.querySelector(".elements");
const placeTemplate = document.querySelector(".template").content;



function functionPopOpenElements() {
    popupElements.classList.remove('popup_elements');
}

function functionPopCloseElements() {
    popupElements.classList.add('popup_elements');
}

popOpenElements.addEventListener('click', functionPopOpenElements);
closeButtonElements.addEventListener('click', functionPopCloseElements);
popupElementsButtonSave.addEventListener('click', handelAddImageAndTitle);
photoPopupButtonClose.addEventListener('click', functionPhotoPopupClose);


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




const InfoArray = initialCards.map(function(item) {
    return { name: item.name, link: item.link };
});

function render() {
    InfoArray.forEach(renderCard);
}

function renderCard({ name, link }) {
    const ArrayElement = placeTemplate.querySelector(".element").cloneNode(true);
    const elementTitleArray = ArrayElement.querySelector(".element__title").textContent = name;
    const elementImageArray = ArrayElement.querySelector(".element__rectangle").src = link;
    const bascet = ArrayElement.querySelector('.element__basket');
    const like = ArrayElement.querySelector('.element__like');
    const rectangle = ArrayElement.querySelector('.element__rectangle');
    placesContainer.prepend(ArrayElement);

    function handlePhotopopupOpen(title, image) {
        photopopup.classList.remove('photopopup_open');
        const photopopupTitle = document.querySelector('.photopopup__text').textContent = title;
        const photoPopupImage = document.querySelector('.photopopup__main').src = image;
        const photoMain = handlePhotopopupOpen(title = name, image = link);

    }


    rectangle.addEventListener('click', handlePhotopopupOpen);
    bascet.addEventListener('click', handelRemoveElements);
    like.addEventListener('click', likeClick);

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

function handelRemoveElements(evt) {
    const element = evt.target.closest('.element_open');
    element.remove();
}




function functionPhotoPopupClose() {
    photopopup.classList.add('photopopup_open');
}