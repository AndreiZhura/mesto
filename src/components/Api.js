export default class Api {
    constructor({ url, token }) {
        this._url = url;
        this._token = token;
    }

    /*1. Загрузка информации о пользователе с сервера
    Информация о пользователе должна подгружаться с сервера.
     Чтобы осуществить это, сделайте GET-запрос на URL (cohortId замените на идентификатор вашей группы):*/
    downLoadingUserInformationFromServer() {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-46/users/me`, {
                method: 'GET',
                headers: {
                    Authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка (Загрузка информации о пользователе с сервера): ${res.status}`);
            });

    }

    /*2. Загрузка карточек с сервера
Начальные карточки должны подгружаться с сервера. Для этого сделайте GET-запрос: */

    downloadingCardsFromServer(data) {
        return fetch(`https://mesto.nomoreparties.co/v1/cohort-46/cards`, {
                method: 'GET',
                headers: {
                    Authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0',
                    'Content-Type': 'application/json'
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка (Загрузка карточек с сервера): ${res.status}`);
            });


    }

    /* 3. Редактирование профиля
    Отредактированные данные профиля должны сохраняться на сервере. Для этого отправьте запрос методом PATCH:*/

    editingProfile(form) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-46/users/me', {
                method: 'PATCH',
                headers: {
                    Authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: form['nameProfile'],
                    about: form['professionProfile']
                })
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка (Загрузка карточек с сервера): ${res.status}`);
            });

    }

    /* 4. Добавление новой карточки
    Чтобы добавить на сервер новую карточку, отправьте POST-запрос:*/
    addNewCard() {

        }
        /*5. Отображение количества лайков карточки
        У каждой карточки есть свойство likes — оно содержит массив пользователей, лайкнувших карточку: */
    displayTheNumberOfLikesOfTheCard() {

        }
        /*6. Попап удаления карточки
        Удаление чего-то, как правило, безвозвратно. 
        Поэтому перед этим действием стоит спросить пользователя, уверен ли он, что хочет удалить карточку. 
        Для этого сделайте новый попап. Он должен открываться по клику на иконку удаления: */
        /*7. Удаление карточки
        Прежде чем браться за работу с API, исправьте элемент карточки. 
        Сделайте так, чтобы иконка удаления была только на созданных вами карточках, так как удалять чужие карточки нельзя. */
    popupDeleteCard() {

        }
        /*8. Постановка и снятие лайка
Чтобы лайкнуть карточку, отправьте PUT-запрос: */
    puttingAndRemovingLike() {

        }
        /*9. Обновление аватара пользователя
Чтобы сменить аватар, отправьте такой PATCH-запрос:*/
    updateUseravatar(linkAvatar) {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-46/users/me/avatar', {
                method: 'PATCH',
                headers: {
                    Authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    avatar: linkAvatar['avatar-link']

                })

            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка (Обновление аватара пользователя): ${res.status}`);
            });
    }
}