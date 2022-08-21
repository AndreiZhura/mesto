/* класс UserInfo (обратите внимание что тут не нужны сеттеры и геттеры, надо сделать обычными методами):
Аргумент - объект с двумя ключами { элементИнформацииОСебе, элементИмени }
есть метод getUserInfo который возвращает текущие значения из класса в виде объекта.
setUserInfo - получает объект с ключами и устанавливает их в разметку. */
/* Класс UserInfo отвечает за управление отображением информации о пользователе на странице. Этот класс:
Принимает в конструктор объект с селекторами двух элементов: элемента имени пользователя и элемента информации о себе.
Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
 Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
 */

export default class UserInfo {
    constructor({ profileName, profileProfession, profileAvatar }) {
            this._profileName = document.querySelector(profileName);
            this._profileProfession = document.querySelector(profileProfession);
            this._profileAvatar = document.querySelector(profileAvatar);
        }
        //Содержит публичный метод getUserInfo, который возвращает объект с данными пользователя.
        //Этот метод пригодится когда данные пользователя нужно будет подставить в форму при открытии.
    getUserInfo() {
            return this.data = {
                name: this._profileName.textContent,
                profession: this._profileProfession.textContent
            };
        }
        //  Содержит публичный метод setUserInfo, который принимает новые данные пользователя и добавляет их на страницу.
    setUserInfo(data) {
        this._profileName.textContent = data.name;
        this._profileProfession.textContent = data.about;
        this._profileAvatar.src = data.avatar
    }
}