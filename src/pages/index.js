import Card from "../components/Card.js";
//удалил импорт попапа
import Section from "../components/Section.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupWithImage from "../components/PopupWithImage.js";
import UserInfo from '../components/UserInfo.js'
import FormValidator from '../components/FormValidator.js'
import './index.css'
import {
    popupProfile,
    popupProfileOpenButton,
    popupProfileCloseButton,
    profileName,
    profileProfession,
    profileAvatar,
    nameInput,
    jobInput,
    formPopupProfile,
    cardPopup,
    cardPopupOpenButton,
    cardPopupCloseButton,
    formCardPopup,
    popupPhoto,
    photoPopupButtonClose,
    elements,
    popupAvatarOpenButton,
    popupFormProfile,
    popupFormCard,
    popupFormAvatar,
    popupProfileValid,
    popupCardValid,
    popupAvatarsValid,
} from '../utils/constants.js'

import Api from "../components/Api.js";


const formValidators = {
    inputSelector: '.popup__input',
    submitButtonSelector: '.popup__save',
    inactiveButtonClass: 'popup__save_inactively',
    inputErrorClass: 'popup__input_type_error',
    errorClass: 'popup__error_active'
}

const userInfo = new UserInfo({
    profileName: ".profile__name",
    profileProfession: ".profile__profession",
    profileAvatar: '.profile__avatar'
})


const userID = {}

// подключаем Api*********************************************************************************************************************************
const api = new Api({
    baseUrl: 'https://mesto.nomoreparties.co/v1/cohort-46',
    headers: {
        Authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0',
        'Content-Type': 'application/json'
    }
});
// 1. Загрузка информации о пользователе с сервера
api.downLoadingUserInformationFromServer()
    .then((result) => {
        console.log(result)
        userID.id = result._id;
        userInfo.setUserInfo(result)
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });


//2. Загрузка карточек с сервера
api.downloadingCardsFromServer()
    .then((result) => {
        console.log(result)
        section.rendererValue(result)
    })
    .catch((err) => {
        console.log(err); // выведем ошибку в консоль
    });


//******************************************************************************************************************************************


//создаем карточку**************************************************************************************************************************
const popupWithImage = new PopupWithImage('.popupPhoto')

const createCard = (data) => {
    const newCard = new Card({
        data: data,
        handleCardClick: (name, link) => {
            popupWithImage.open(name, link)
        }
    }, '.template')
    return newCard.generateCard()
}

popupWithImage.setEventListeners()

// отрисовываем карточку****************************************************************************************************************
const section = new Section({
    renderer: (item) => {
        section.addItem(createCard(item))
    }

}, '.elements')


// сами попапы **********************************************************************************************************************

const popupWithFormClassProfile = new PopupWithForm({
    elementDomPopup: '.popupProfile',

    submitForm: (form) => {
        api.editInfoUsers(form)
            .then((result) => {
                userInfo.setUserInfo(result)
                popupWithFormClassProfile.close()
                validatorProfile.disableButton()
            })
            .catch((err) => {
                console.log(err); // выведем ошибку в консоль
                console.log('ошибка')
            });
    }
})
popupWithFormClassProfile.setEventListeners()

const popupWithFormClassCard = new PopupWithForm({
    elementDomPopup: '.popupElements',

    submitForm: (item) => {
        section.addItem(createCard(item))
        popupWithFormClassCard.close()
        validatorCard.disableButton()
    }
})
popupWithFormClassCard.setEventListeners()

const popupWithFormClassAvatar = new PopupWithForm({
    elementDomPopup: '.popupAvatars',
    submitForm: (item) => {
        popupWithFormClassAvatar.close();
        validatorAvatar.disableButton();
    }
})
popupWithFormClassAvatar.setEventListeners()




//Функционал кнопок открытия попапа************************************************************************************************

popupProfileOpenButton.addEventListener('click', () => {
    const { name, profession } = userInfo.getUserInfo();
    nameInput.value = name
    jobInput.value = profession
    popupWithFormClassProfile.open()
})

cardPopupOpenButton.addEventListener('click', () => {
    popupWithFormClassCard.open()
})

popupAvatarOpenButton.addEventListener('click', () => {
    popupWithFormClassAvatar.open()
})

const validatorProfile = new FormValidator(formValidators, popupProfileValid)
validatorProfile.enableValidation()


const validatorCard = new FormValidator(formValidators, popupCardValid)
validatorCard.enableValidation()

const validatorAvatar = new FormValidator(formValidators, popupAvatarsValid)
validatorAvatar.enableValidation()