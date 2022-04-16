const popups = document.querySelectorAll('.popup');
const buttonOpenProfile = document.querySelector('.profile__button-edit');
const buttonCloseProfile = document.querySelector('.popup__button')

function OpenPopups(index) {
    popups[index].classList.add('popup_open');

}

function ClosePopups(index) {
    popups[index].classList.remove('popup_open');
}

buttonOpenProfile.addEventListener('click', () => OpenPopups(0));
buttonCloseProfile.addEventListener('click', () => ClosePopups(0));