const popups = document.querySelectorAll('.popup');
const buttonOpenProfile = document.querySelector('.profile__button-edit');
const buttonOpenElement = document.querySelector('.profile__button-add')
const buttonClosePopup = document.querySelectorAll('.popup__button');

const prolileName = document.querySelector('#profileName');
const profileProfession = document.querySelector('#profileProfession');
const nameInput = document.querySelector('#nameInput');
const jobInput = document.querySelector('#jobInput');
const formElementPopup = document.querySelectorAll('.popup__container');

const template = document.querySelector('.template');
const elements = document.querySelector('.elements');


console.log(popups);

function OpenPopups(index) {
    popups[index].classList.add('popup_open');
    if (popups[0]) {
        nameInput.value = prolileName.textContent;
        jobInput.value = profileProfession.textContent;
    } else if (popups[2]) {
        handlePhotopopupOpen();
    }

}


function ClosePopups(index) {
    popups[index].classList.remove('popup_open');
}

function formSubmitHandler(evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    // Так мы можем определить свою логику отправки.
    // О том, как это делать, расскажем позже.

    // Получите значение полей jobInput и nameInput из свойства value
    prolileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    // Выберите элементы, куда должны быть вставлены значения полей
    ClosePopups(0);
    // Вставьте новые значения с помощью textContent
}

function handelAddImageAndTitle(evt) {
    evt.preventDefault();
    const inputTitleValue = document.querySelector('#titleImput').value;
    const inputImage = document.querySelector('#linkInput').value
    const elementTitleValue = getElement({ name: inputTitleValue, link: inputImage });
    ClosePopups(1);
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

const initialCardsRender = initialCards.map(array);


function array(item) {
    return {
        name: item.name,
        link: item.link
    };
}

function render() {
    initialCardsRender.forEach(getElement);
}



function getElement({ name, link }) {
    const elementTemplate = template.content.querySelector('.element').cloneNode(true);
    elementTemplate.querySelector('.element__title').textContent = name;
    elementTemplate.querySelector('.element__rectangle').src = link;
    const elementLike = elementTemplate.querySelector('.element__like');
    const elementBascet = elementTemplate.querySelector('.element__basket');
    const elementRectangle = elementTemplate.querySelector('.element__rectangle')
    elementBascet.addEventListener('click', handelRemoveElement);
    elementLike.addEventListener('click', likeClick);
    elementRectangle.addEventListener('click', () => OpenPopups(2))

    elements.prepend(elementTemplate);
}


function handle(name, link) {
    OpenPopups(2);
    let photoPopupImage = document.querySelector('.popup__img');
    let photopopupTitle = document.querySelector('.popup__text');
    photoPopupImage.src = link;
    photopopupTitle.textContent = name;
}


function likeClick(like) {
    like.target.classList.toggle('element__like_active_white');
    like.target.classList.toggle('element__like_active_black');
}

function handelRemoveElement(bascet) {
    const element = bascet.target.closest('.element');
    element.remove();
}

function handlePhotopopupOpen(name, link) {

    let photoPopupImage = document.querySelector('.photopopup__img');
    let photopopupTitle = document.querySelector('.photopopup__text');
    photoPopupImage.src = link;
    photopopupTitle.textContent = name;
}
render();

buttonOpenProfile.addEventListener('click', () => OpenPopups(0));
buttonOpenElement.addEventListener('click', () => OpenPopups(1))
buttonClosePopup[0].addEventListener('click', () => ClosePopups(0));
buttonClosePopup[1].addEventListener('click', () => ClosePopups(1));
buttonClosePopup[2].addEventListener('click', () => ClosePopups(2));
formElementPopup[0].addEventListener('submit', formSubmitHandler);
formElementPopup[1].addEventListener('submit', handelAddImageAndTitle);