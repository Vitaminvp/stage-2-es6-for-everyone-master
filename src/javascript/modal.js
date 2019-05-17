import View from './view';

class Modal extends View {
    constructor(fighter, handleClick) {
        super();
        this.createModal(fighter, handleClick);
        this.closeWrapper = this.closeWrapper.bind(this);
    }

    createModal(fighter, handleClick) {
        const {_id, name, health, attack, defense} = fighter;
        const nameElement = this.createName(name);
        const buttonElement = this.createButton('Choose');
        this.element = this.createElement({tagName: 'div', className: 'modal'});
        const modalContent = this.createElement({tagName: 'div', className: 'modal-content'});
        const closeModal = this.createElement({tagName: 'div', className: 'close'});
        closeModal.innerHTML = '&times;';
        const healthElement = this.createInput('Health', _id, health);
        const attackElement = this.createInput('Attack', _id, attack);
        const defenseElement = this.createInput('Defense', _id, defense);
        modalContent.append(closeModal, nameElement, healthElement, attackElement, defenseElement, buttonElement);
        this.element.append(modalContent);

        let buttonListener;
        let closeListener;

        buttonListener = buttonElement.addEventListener('click', event => {
            buttonElement.removeEventListener('click', buttonListener);
            closeModal.removeEventListener('click', closeListener);
            handleClick(event, {
                ...fighter,
                health: healthElement.input.value,
                attack: attackElement.input.value,
                defense: defenseElement.input.value
            }, false);
            this.closeWrapper();
        });

        closeListener = closeModal.addEventListener('click', event => {
            buttonElement.removeEventListener('click', buttonListener);
            closeModal.removeEventListener('click', closeListener);
            this.closeWrapper(event);
        }, false);
    }

    closeWrapper() {
        if(this.element.parentNode)
            this.element.parentNode.removeChild(this.element);
    }

    createName(name) {
        const nameElement = this.createElement({tagName: 'span', className: 'name'});
        nameElement.innerText = name;
        return nameElement;
    }

    createInput(name, id, value) {
        const inputAttributes = {
            id,
            type: 'number',
            maxlength: '3'
        };
        const labelAttributes = {
            for: id
        };
        const wrapperElement = this.createElement({tagName: 'div', className: 'input-wrapper'});
        const inputElement = this.createElement({tagName: 'input', className: 'input-origin', inputAttributes});
        const labelElement = this.createElement({tagName: 'label', className: 'input-label', labelAttributes});
        inputElement.value = value;
        labelElement.innerText = `${name}: `;
        wrapperElement.append(labelElement, inputElement);
        wrapperElement.input = inputElement;
        return wrapperElement;
    }

    createButton(name) {
        const buttonElement = this.createElement({tagName: 'button', className: 'button'});
        buttonElement.innerText = name;
        return buttonElement;
    }
}

export default Modal;
