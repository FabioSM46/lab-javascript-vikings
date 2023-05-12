// Soldier
class Soldier {
  constructor(health, strength) {
    this.strength = strength;
    this.health = health;
  }
  attack() {
    return this.strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
  }
}

// Viking
class Viking extends Soldier {
  constructor(name, health, strength) {
    super();
    this.name = name;
    this.health = health;
    this.strength = strength;
  }
  receiveDamage(damage) {
    this.health -= damage;
    let phrase = "";
    if (this.health === 0) {
      phrase = `${this.name} has died in act of combat`;
    } else {
      phrase = `${this.name} has received ${damage} points of damage`;
    }
    return phrase;
  }
  attack() {
    super.attack();
    return this.strength;
  }
  battleCry() {
    return `Odin Owns You All!`;
  }
}

// Saxon
class Saxon extends Soldier {
  receiveDamage(damage) {
    this.health -= damage;
  }
  receiveDamage(damage) {
    this.health -= damage;
    let phrase = "";
    if (this.health === 0) {
      phrase = `A Saxon has died in combat`;
    } else {
      phrase = `A Saxon has received ${damage} points of damage`;
    }
    return phrase;
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(Viking) {
    this.vikingArmy.push(Viking);
  }

  addSaxon(Saxon) {
    this.saxonArmy.push(Saxon);
  }

  vikingAttack() {}
  saxonAttack() {}

  showStatus() {
    if (this.vikingArmy.length === 0) {
      return "Vikings have won the war of the century!";
    } else if (this.saxonArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
