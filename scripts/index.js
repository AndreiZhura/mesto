const popups = document.querySelectorAll('.popup');
const buttonOpenProfile = document.querySelector('.profile__button-edit');
const buttonOpenElement = document.querySelector('.profile__button-add')
const buttonClosePopup = document.querySelectorAll('.popup__button');

const profileName = document.querySelector('#profileName');
const profileProfession = document.querySelector('#profileProfession');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const formElementPopup = document.querySelectorAll('.popup__container');

const template = document.querySelector('.template');
const elements = document.querySelector('.elements');


console.log(popups);

function openPopups(index) {
    popups[index].classList.add('popup_open');
    if (popups[0]) {
        nameInput.value = profileName.textContent;
        jobInput.value = profileProfession.textContent;
    }

}


function closePopups(index) {
    popups[index].classList.remove('popup_open');
}

function submitFormHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    closePopups(0);
    // Вставьте новые значения с помощью textContent
}

function addImageAndTitle(evt) {
    evt.preventDefault();
    const inputTitleValue = document.querySelector('#titleImput').value;
    const inputImage = document.querySelector('#linkInput').value
    AddNewElement(inputTitleValue, inputImage);
    closePopups(1);
}

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

const initialCardsRender = initialCards.map(getElementsArray);
//const initialCards

function getElementsArray(item) {
    return {
        name: item.name,
        link: item.link
    };
}

function render() {
    initialCardsRender.forEach(s => AddNewElement(s.name, s.link));
}

function AddNewElement(name, link) {
    const newObj = CreateElement(name, link);

    elements.prepend(newObj);
}


function CreateElement(name, link) {
    const elementTemplate = template.content.querySelector('.element').cloneNode(true);
    elementTemplate.querySelector('.element__title').textContent = name;
    elementTemplate.querySelector('.element__rectangle').src = link;

    const elementLike = elementTemplate.querySelector('.element__like');
    const elementBascet = elementTemplate.querySelector('.element__basket');
    const elementRectangle = elementTemplate.querySelector('.element__rectangle');

    elementBascet.addEventListener('click', RemoveElement);
    elementLike.addEventListener('click', likeClick);
    elementRectangle.addEventListener('click', () => lookingElement(name, link));

    return elementTemplate;
}


function lookingElement(name, link) {
    openPopups(2);
    let photoPopupImage = document.querySelector('.popup__img');
    let photopopupTitle = document.querySelector('.popup__text');
    photoPopupImage.src = link;
    photopopupTitle.textContent = name;
}


function likeClick(like) {
    like.target.classList.toggle('element__like_active_black');
}

function RemoveElement(bascet) {
    const element = bascet.target.closest('.element');
    element.remove();
}

render();

buttonOpenProfile.addEventListener('click', () => openPopups(0));
buttonOpenElement.addEventListener('click', () => openPopups(1))
buttonClosePopup[0].addEventListener('click', () => closePopups(0));
buttonClosePopup[1].addEventListener('click', () => closePopups(1));
buttonClosePopup[2].addEventListener('click', () => closePopups(2));
formElementPopup[0].addEventListener('submit', submitFormHandler);
formElementPopup[1].addEventListener('submit', addImageAndTitle);
y