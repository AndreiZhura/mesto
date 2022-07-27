class Api {
    constructor(options) {
        // тело конструктора
        this._baseUrl = options.baseUrl;
        this._headers = options.headers;
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

    // другие методы работы с API
}