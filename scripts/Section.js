export default class Section {
    constructor({ items, renderer }, containerSelector) {
            this._items = items;
            this._renderer = renderer;
            // селектор класса div куда мы передаем карточки
            this._containerSelector = containerSelector;

        }
        // рендерим данные
    rendererValue() {
            //передаем массив в items -> перебираем его форечем и передаем в функцию рендер
            this._items.forEach(item => {
                this._renderer(item)
            });
        }
        // добавляем данные что бы отрисовать их на странице
    addItem(element) {
        //Метод prepend позволяет вставить 
        //в начало какого-либо элемента другой элемент.
        //append в конец
        this._containerSelector.append(element)
    }
}