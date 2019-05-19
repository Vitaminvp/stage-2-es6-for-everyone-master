import View from "./view";

class Modal extends View {
  constructor(fighter, handleClick) {
    super();
    this.createModal(fighter, handleClick);
    this.closeWrapper = this.closeWrapper.bind(this);
    this.changeToMaxValue = this.changeToMaxValue.bind(this);
  }

  createModal(fighter, handleClick) {
    const { _id, name, health, attack, defense } = fighter;
    const nameElement = this.createName(name);
    const buttonElement = this.createButton("Choose");
    this.element = this.createElement({ tagName: "div", className: "modal" });
    const modalContent = this.createElement({
      tagName: "div",
      className: "modal-content"
    });
    const closeModal = this.createElement({
      tagName: "div",
      className: "close"
    });
    closeModal.innerHTML = "&times;";
    const healthElement = this.createInput("Health", _id, health);
    const attackElement = this.createInput("Attack", _id, attack);
    const defenseElement = this.createInput("Defense", _id, defense);

    [healthElement, attackElement, defenseElement].forEach(item => {
      item.addEventListener("input", this.changeToMaxValue);
    });

    modalContent.append(
      closeModal,
      nameElement,
      healthElement,
      attackElement,
      defenseElement,
      buttonElement
    );
    this.element.append(modalContent);

    let buttonListener;
    let closeListener;

    buttonListener = buttonElement.addEventListener("click", event => {
      buttonElement.removeEventListener("click", buttonListener);
      closeModal.removeEventListener("click", closeListener);
      [healthElement, attackElement, defenseElement].forEach(item => {
        item.addEventListener("input", this.changeToMaxValue);
      });
      handleClick(
        event,
        {
          ...fighter,
          health: healthElement.input.value,
          attack: attackElement.input.value,
          defense: defenseElement.input.value
        },
        false
      );
      this.closeWrapper();
    });

    closeListener = closeModal.addEventListener(
      "click",
      event => {
        [healthElement, attackElement, defenseElement].forEach(item => {
          item.removeEventListener("input", this.changeToMaxValue);
        });
        buttonElement.removeEventListener("click", buttonListener);
        closeModal.removeEventListener("click", closeListener);
        this.closeWrapper(event);
      },
      false
    );
  }

  changeToMaxValue(event) {
    const { target } = event;
    target.value = target.value.replace(/\D/gi, "");
    if (target.value > 100 || target.value === "" || isNaN(target.value)) {
      target.value = 100;
    }
  }

  closeWrapper() {
    if (this.element.parentNode)
      this.element.parentNode.removeChild(this.element);
  }

  createName(name) {
    const nameElement = this.createElement({
      tagName: "span",
      className: "name"
    });
    nameElement.innerText = name;
    return nameElement;
  }

  createInput(name, id, value) {
    const inputAttributes = {
      id: id,
      type: "number",
      title: "Write number from 1 till 100.",
      minlength: "1",
      maxlength: "3",
      autocomplete: "on",
      pattern: "^d{0,3}$",
      required: true
    };
    const labelAttributes = {
      for: id
    };
    const wrapperElement = this.createElement({
      tagName: "div",
      className: "input-wrapper"
    });
    const inputElement = this.createElement({
      tagName: "input",
      className: "input-origin",
      attributes: inputAttributes
    });
    const labelElement = this.createElement({
      tagName: "label",
      className: "input-label",
      attributes: labelAttributes
    });
    inputElement.value = value;
    labelElement.innerText = `${name}: `;
    wrapperElement.append(labelElement, inputElement);
    wrapperElement.input = inputElement;
    return wrapperElement;
  }

  createButton(name) {
    const buttonElement = this.createElement({
      tagName: "button",
      className: "button"
    });
    buttonElement.innerText = name;
    return buttonElement;
  }
}

export default Modal;
