export default class Popup{
    constructor(selectorPopups){
        this._selectorPopups = selectorPopups
    }
        openPopup(selectorPopups) {
            document.addEventListener('keydown', closeByEsc)
            selectorPopups.classList.add('popup_opened')
        }
        
        closePopup(selectorPopups) {
            document.removeEventListener('keydown', closeByEsc)
            selectorPopups.classList.remove('popup_opened')
        }
    
}