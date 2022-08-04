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
}