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

  vikingAttack() {
    //Generate random soldiers
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    //Saxon receive damage from Viking
    const result = randomSaxon.receiveDamage(randomViking.attack());
    //If a Saxon dies remove it from the army
    if (randomSaxon.health <= 0) {
      this.saxonArmy.splice(randomSaxonIndex, 1);
    }
    // Return the result of the attack
    return result;
  }
  saxonAttack() {
    //Generate random soldiers
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    //Viking receive damage from Saxon
    const result = randomViking.receiveDamage(randomSaxon.attack());
    //If a Viking dies remove it from the army
    if (randomViking.health <= 0) {
      this.vikingArmy.splice(randomVikingIndex, 1);
    }
    // Return the result of the attack
    return result;
  }

  soldierAttack(soldierType) {
    //Generate random soldiers
    const randomSaxonIndex = Math.floor(Math.random() * this.saxonArmy.length);
    const randomVikingIndex = Math.floor(
      Math.random() * this.vikingArmy.length
    );
    const randomSaxon = this.saxonArmy[randomSaxonIndex];
    const randomViking = this.vikingArmy[randomVikingIndex];
    //A soldier attacks
    let result = "";
    if (soldierType === "Viking") {
      result = randomSaxon.receiveDamage(randomViking.attack());
      //If a Saxon dies remove it from the army
      if (randomSaxon.health <= 0) {
        this.saxonArmy.splice(randomSaxonIndex, 1);
      }
    } else if (soldierType === "Saxon") {
      result = randomViking.receiveDamage(randomSaxon.attack());
      //If a Viking dies remove it from the army
      if (randomViking.health <= 0) {
        this.vikingArmy.splice(randomVikingIndex, 1);
      }
      return result;
    }
  }

  showStatus() {
    //If saxonArmy is empty Vikings won
    if (this.saxonArmy.length === 0) {
      return "Vikings have won the war of the century!";
      //If vikingArmy is empty Saxons won
    } else if (this.vikingArmy.length === 0) {
      return "Saxons have fought for their lives and survived another day...";
      //Still fighting
    } else {
      return "Vikings and Saxons are still in the thick of battle.";
    }
  }
}
