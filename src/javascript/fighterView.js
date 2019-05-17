import View from "./view";

class FighterView extends View {
  constructor(fighter, handleClick) {
    super();
    this.createFighter(fighter, handleClick);
    this.createProgressBar = this.createProgressBar.bind(this);
  }

  createFighter(fighter, handleClick) {
    const { name, source } = fighter;
    const nameElement = this.createName(name);
    const imageElement = this.createImage(source);
    this.progressElement = this.createElement({
      tagName: "div",
      className: "progress-wrapper"
    });
    this.element = this.createElement({ tagName: "div", className: "fighter" });
    this.element.id = fighter._id;
    this.element.append(imageElement, nameElement, this.progressElement);
    this.element.addEventListener(
      "click",
      event => handleClick(event, fighter, this.createProgressBar),
      false
    );
  }
  createName(name) {
    const nameElement = this.createElement({
      tagName: "span",
      className: "name"
    });
    nameElement.innerText = name;
    return nameElement;
  }

  createProgressBar(attributes) {
    const progressWrapper = document.createDocumentFragment();
    Object.keys(attributes).forEach(key => {
      const element = this.createElement({
        tagName: "progress",
        className: `progress-${key}`
      });
      element.value = attributes[key];
      element.max = 100;
      progressWrapper.appendChild(element);
    });
    this.progressElement.innerHTML = "";
    this.progressElement.appendChild(progressWrapper);
  }

  createImage(source) {
    const attributes = { src: source };
    const imgElement = this.createElement({
      tagName: "img",
      className: "fighter-image",
      attributes
    });
    return imgElement;
  }
}

export default FighterView;
