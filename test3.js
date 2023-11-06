class Hero {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = 0.7;
    }
    attack() {
      let ranNum = Math.random();
      console.log(`Accuracy is ${ranNum}`);
      if (ranNum < this.accuracy) {
        console.log(`Hit enemy ship!`);
        alien.hull = alien.hull - this.firepower;
        console.log(`alien has ${alien.hull} hull points left.`);
        if (alien.hull <= 0) {
          console.log(`Alien ship is NoMore!!`);
        }
      } else {
        console.log(`We missed enemy!`);
      }
    }
  }
  
  class Alien {
    constructor(name, hull, firepower, accuracy) {
      this.name = name;
      this.hull = Math.floor(Math.random() * 4) + 3;
      this.firepower = Math.floor(Math.random() * 3) + 2;
      this.accuracy = (Math.floor(Math.random() * 3) + 6) / 10;
    }
    attack() {
      let ranNum = Math.random();
      console.log(`Accuracy is ${ranNum}`);
      if (ranNum < this.accuracy) {
        console.log(`Hit My ship!`);
        player1.hull = player1.hull - this.firepower;
        console.log(`hero has ${player1.hull} hull points left.`);
        if (player1.hull <= 0) {
          console.log(`Destoyed My Ship!!`);
        }
      } else {
        console.log(`Dodged alien missles!`);
      }
    }
  }
    attack();{
      let ranNum = Math.random();
      console.log(`Accuracy is ${ranNum}`);
      if (ranNum < this.accuracy) {
        console.log(`Hit My ship!`);
        player1.hull = player1.hull - this.firepower;
        console.log(`hero has ${player1.hull} hull points left.`);
        if (player1.hull <= 0) {
          console.log(`Destoyed My Ship!!`);
        }
      } else {
        console.log(`Dodged alien missles!`);
      }
    }

    