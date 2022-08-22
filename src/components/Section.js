export default class Section {
    constructor({ renderer }, containerSelector) {

            this._renderer = renderer;
            // селектор класса div куда мы передаем карточки
            this._containerSelector = document.querySelector(containerSelector);

        }
        // рендерим данные
    renderItems(items) {
            //передаем массив в items -> перебираем его форечем и передаем в функцию рендер
            items.forEach(item => {
                this._renderer(item)
            });
        }
        // добавляем данные что бы отрисовать их на странице
    addItem(element) {
        //Метод prepend позволяет вставить 
        //в начало какого-либо элемента другой элемент.
        //append в конец
        this._containerSelector.prepend(element)
    }
}