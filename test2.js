class pilot {
    constructor(name) {
      this.name = name
      this.hull = 20
      this.firepower = 5
      this.accuracy = .7
    }
    // takeHit(mnm) {
    //   const hitstat = mnm.bigshot()
    //   this.hull -= hitstat
    // }
    takeHit(currentalien) {
        const hitstat = currentalien.bigshot()
        this.hull -= hitstat
      }
    bigshot() {
      return this.firepower * rangedRandom(0.7, 0)
    }
  }
  class enemy {
    constructor(name, hull, firepower, acc) {
      this.name = name
      this.hull = hull
      this.firepower = firepower
      this.accuracy = acc * (Math.floor(Math.random() * 3) + 6) / 10;
    }
    takeHit() {
      const hitstat = USSA.bigshot()
      this.hull -= hitstat
    }
    bigshot() {
      return this.firepower * rangedRandom(0.7, 0)
    }
  }
  
  //creates the random hull and firepower strengths
  function rangedRandom(max, min) {
    let rand = Math.random()
    return min + rand * (max - min)
  }
  const USSA = new pilot('USSA')
  const one = new enemy('Harpy', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const two = new enemy('Griffin', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const three = new enemy('Chimera', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const four = new enemy('Typhon', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const five = new enemy('Serberus', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const six = new enemy('Mars', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  
  let count = 0;
  let army = [one, two, three, four, five, six];

  let currentalien = army[count]
  const switcher = () =>{
    count ++
    currentalien = aliengroup[count]
  }
  function next() {
    if (currentalien.hull >= 1) {
      const ooze = document.querySelector('#tree')
      ooze.textContent = `A wild ${currentalien.name} appears`
      const boo = document.querySelector('#birb')
      boo.textContent = `${currentalien.firepower}`
    }else if(currentalien.hull<=0){
        aliengroup[-1]
    }
  }
  
  function life() {
    if (USSA.hull >= 1) {
      const life = document.querySelector('#STATUS')
      life.textContent = `KEEP FIGHTING`
      return 1
    } else if (USSA.hull <= 1) {
      const life = document.querySelector('#STATUS')
      life.textContent = `YOU DIED`
      return 0
    }
  }
  
  function life_status() {
    if (USSA.hull >= 1) {
      return 1
    } else if (USSA.hull <= 1) {
      return 0
    }
  }
  
  //FIGHT BUTTON
  const FIGHT = document.querySelector('#FIGHT')
  FIGHT.addEventListener('click', () => {
    life()
    next()
    // You could alternatively get rid of 'life_status()' and just do a driect check of USSA.hull
    // if (USSA.hull > 1)...
    const dis = life_status()
    if (dis == 1) {
      USSA.takeHit(one);
      one.takeHit();
      const power = document.querySelector('#stats')
      power.textContent = `USS ASSEMBLY ${USSA.hull} HP`
      const foe = document.querySelector('#aliens')
      foe.textContent = `Alien ${one.hull} HP`
    } else if (dis == 0) {
      const foe = document.querySelector('#aliens')
      foe.textContent = `HAHAHA`
    }
  })
  
  const RETREAT = document.querySelector('#RETREAT')
  RETREAT.addEventListener('click', () => {
    const stats = document.querySelector('#STATUS')
    stats.textContent = `GAME OVER ${USSA.name}`
  })