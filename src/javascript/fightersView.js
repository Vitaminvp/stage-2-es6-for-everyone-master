import View from "./view";
import FighterView from "./fighterView";
import { fighterService } from "./services/fightersService";
import Modal from "./modal";
import Fighter from "./fighter";
import { CONSTANTS, fight } from "./helpers/apiHelper";

class FightersView extends View {
  constructor(fighters) {
    super();
    this.handleFighterClick = this.handleFighterClick.bind(this);
    this.handleModalClick = this.handleModalClick.bind(this);
    this.createFighters = this.createFighters.bind(this);
    this.createFighters(fighters, this.handleFighterClick);
  }

  fightersDetailsMap = new Map();
  fightersMap = new Map();

  createFighters(fighters, handleFighterClick) {
    const fighterElements = fighters.map(fighter => {
      const fighterView = new FighterView(fighter, handleFighterClick);
      return fighterView.element;
    });
    this.element = this.createElement({
      tagName: "div",
      className: "fighters"
    });
    this.element.append(...fighterElements);
  }

  async handleFighterClick(event, fighter, progressBar) {
    this.progressBar = progressBar;
    const firstFighterId = fighter._id;
    if (!this.fightersDetailsMap.has(firstFighterId)) {
      const fighterDetails = await fighterService.getFighterDetails(
        firstFighterId
      );
      this.fightersDetailsMap.set(firstFighterId, fighterDetails);
    }
    if (this.fightersMap.size >= CONSTANTS.fightersAmount) {
      const secondFighterId = Array.from(this.fightersMap.keys()).filter(
        id => +id !== +firstFighterId
      )[0];
      const firstFighterElement = this.element.querySelector(
        `[id="${firstFighterId}"]`
      );
      const secondFighterElement = this.element.querySelector(
        `[id="${secondFighterId}"]`
      );

      secondFighterElement.classList.add("defence");
      const coords = firstFighterElement.getBoundingClientRect();

      if (document.documentElement.clientWidth < coords.left + coords.right) {
        firstFighterElement.classList.add("attackLeft");
      } else {
        firstFighterElement.classList.add("attackRight");
      }

      setTimeout(() => {
        firstFighterElement.classList.remove("attackLeft", "attackRight");
      }, CONSTANTS.attackDelay);

      setTimeout(() => {
        secondFighterElement.classList.remove("defence");
      }, CONSTANTS.defenceDelay);

      if (this.fightersMap.has(firstFighterId)) {
        const demage = fight(
          this.fightersMap.get(firstFighterId),
          this.fightersMap.get(secondFighterId)
        );
      }
    } else {
      const modal = new Modal(
        this.fightersDetailsMap.get(firstFighterId),
        this.handleModalClick
      );
      this.element.appendChild(modal.element);
    }
  }

  handleModalClick(event, fighter) {
    const { _id, name, health, attack, defense } = fighter;
    this.fightersDetailsMap.set(_id, fighter);
    this.progressBar({ health, attack, defense });
    this.fighter = new Fighter(name, health, attack, defense, this.progressBar);
    this.fightersMap.set(_id, this.fighter);

    if (this.fightersMap.size >= CONSTANTS.fightersAmount) {
      const fighterElements = this.element.querySelectorAll(".fighter");
      if (fighterElements.length > CONSTANTS.fightersAmount) {
        const fightersArray = Array.from(this.fightersMap.keys());
        const [firstFighterId, secondFighterId] = fightersArray;
        fighterElements.forEach(item => {
          if (+item.id !== +firstFighterId && +item.id !== +secondFighterId) {
            item.classList.add("hidden");
          }
        });
        if (!this.element.querySelector(".rotate")) {
          firstFighterId > secondFighterId
            ? this.element
                .querySelector(`[id="${firstFighterId}"] .fighter-image`)
                .classList.add("rotate")
            : this.element
                .querySelector(`[id="${secondFighterId}"] .fighter-image`)
                .classList.add("rotate");
        }
      }
    }
  }
}

export default FightersView;
