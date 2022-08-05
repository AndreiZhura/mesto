export default class Api {
    constructor(options) {
        this._url = options.url;
        this._token = options.token;
    }

    getInitialCards() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-46/cards', {
                headers: {
                    authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0'
                }
            })
            .then(res => {
                if (res.ok) {
                    return res.json();
                }

                // если ошибка, отклоняем промис
                return Promise.reject(`Ошибка: ${res.status}`);
            });
    }

    infoUsers() {
        return fetch('https://mesto.nomoreparties.co/v1/cohort-46/users/me', {
                method: 'PATCH',
                headers: {
                    authorization: 'b1806163-4516-40f3-8e2a-a44c941a51c0',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name: 'Marie Skłodowska Curie',
                    about: 'Physicist and Chemist'
                })
            })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Ошибка: ${res.status}`);
            })


    }
}