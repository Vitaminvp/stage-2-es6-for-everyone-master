import { random } from "./helpers/apiHelper";

class Fighter {
  constructor(name, health, attack, defense, progressBar) {
    this.name = name;
    this.health = health;
    this.attack = attack;
    this.defense = defense;
    this.getHitPower = this.getHitPower.bind(this);
    this.getBlockPower = this.getBlockPower.bind(this);
    this.progressBar = progressBar;
  }

  getHitPower() {
    const criticalHitChance = random();
    return this.attack * criticalHitChance;
  }

  getBlockPower() {
    const dodgeChance = random();
    return this.defense * dodgeChance;
  }
  getHealth() {
    return this.health;
  }

  setHealth(defense) {
    this.health = defense;
  }

  setProgressBar() {
    const { health = 0, attack = 0, defense = 0 } = this;
    this.progressBar({ health, attack, defense });
  }
}

export default Fighter;
