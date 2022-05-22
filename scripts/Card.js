class TodoItem {
    _title;
    _template;

    constructor(title, template) {
        this._title = title;
        this._template = template
    }

    _removeElement() {
        this._view.element.remove();
    }

    getView(name, link) {
        this._view = this._template.cloneNode(true).querySelector('.element');
        this._view.querySelector('.element__title').textContent = name;
        this._view.querySelector('.element__rectangle').src = link;
        this._view.querySelector('.element__like').addEventListener('click', () => { this._removeElement() })
        this._view.querySelector('.element__basket');
        this._view.querySelector('.element__rectangle');
        return this._view
    }
}