class pilot {
    constructor(name) {
      this.name = name
      this.hull = 20
      this.firepower = 5
      this.accuracy = .7
    }
    takeHit() {
      this.hull -= enemy.bigshot
    }
    bigshot(){
        this.firepower *= rangedRandom(0, 0.7)
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
      this.hull -= USSA.bigshot
    }
    bigshot(){
        this.firepower *= rangedRandom(0, 0.7)
    }
  }
  
  //creates the random hull and firepower strengths
  function rangedRandom(max, min) {
    let rand = Math.random()
    return min + rand * (max - min)
  }
  
  const one = new enemy('Harpy', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const two = new enemy('Griffin', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const three = new enemy('Chimera', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const four = new enemy('Typhon', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const five = new enemy('Serberus', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  const six = new enemy('Mars', rangedRandom(6, 3), rangedRandom(4, 2), .7);
  
  const USSA = new pilot('USSA')


  
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
    // You could alternatively get rid of 'life_status()' and just do a driect check of USSA.hull
    // if (USSA.hull > 1)...
    const dis = life_status()
    if (dis == 1) {
      USSA.takeHit();
      one.takeHit();
      const power = document.querySelector('#stats')
      power.textContent = `USSA ${USSA.hull} HP`
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
  

// class pilot{
//     constructor(name, hull, fire, accuracy){
//         this.name =name;
//         this.hull = hull;
//         this.firepower = fire;
//         this.accuracy = accuracy
//     }
//     takeHit(currentalien){
//         this.currentalien.push(currentalien)
//         this.hull-=(currentalien.accuracy * currentalien.efirepower)
//     }
// }
// //Instantiated new pilot
// const USSA = new pilot('USS ASSEMBLY', 20, 5, .7)

// function value(){
//     if(USSA.hull>=0){
//         return 'KEEP FIGHTING'
//     } else if(USSA.hull<=0){
//         return 'YOU DIED'
//     }
// }
// let takeHit = function() {USSA.hull - (currentalien.accuracy* Math.random(currentalien.efirepower))}

// //creates the random hull and firepower strengths
// function rangedRandom(min, max) {
//   let rand = Math.random()
//   return min + rand * (max - min)
// }

// class enemy{
//     constructor(ename, ehull, efirepower, accuracy){
//         this.ename = ename
//         this.ehull = ehull
//         this.efirepower = efirepower
//         this.accuracy = accuracy
//         this.accuracy = (Math.floor(Math.random() * 3) + 6) /10;
//         this.bigshot= () =>{
//             let ranNum = Math.random();
//             console.log(`Accuracy of enemy is ${ranNum}`);
//             if(rangedRandom < this.accuracy){
//                 console.log(`You have been hit`);
//                 USSA.hull = USSA.hull - this.efirepower;
//                 console.log(`USSA has ${USSA.hull} HP`);
//             }else{
//                 console.log(`Evavsive Manuvers Engaged`);
//             }
//         }
//     }
//     takeaHit(){
//         currentalien.ehull-(USSA.accuracy * USSA.firepower)
//     }
// }

// // let takeaHit = function() {currentalien.ehull - (USSA.accuracy* Math.random(USSA.firepower))}


// let one = new enemy('Harpy', rangedRandom(6,3), rangedRandom(4,2), .7)
// let two = new enemy('Griffin', rangedRandom(6,3), rangedRandom(4,2), .7)
// let three = new enemy('Chimera', rangedRandom(6,3), rangedRandom(4,2), .7)
// let four = new enemy('Typhon', rangedRandom(6,3), rangedRandom(4,2), .7)
// let five = new enemy('Serberus', rangedRandom(6,3), rangedRandom(4,2), .7)
// let six = new enemy('Mars', rangedRandom(6,3), rangedRandom(4,2), .7)

// let count = 0;
// let aliengroup = [one, two, three, four, five, six];


// let currentalien = aliengroup[count]
// const switchin= () =>{
//     count++
//     currentalien = aliengroup[count]
// }

// if (currentalien.ehull<=0){
//     switchin
// }

// let holder = -1;
// const switcheroo =() => {
//     let pics = [
//         "alien 1.jpg",
//         "alien 2.jpg",
//         "alien 3.jpg",
//         "alien 4.jpg",
//         "alien 5.jpg",
//         "alien 6.jpg"
//     ];
//     holder ++;
//     let ufo = document.querySelector('.aliens')
//     ufo.setAttribute("src", pics[holder])
// }

// let violence = (USSA, currentalien) =>{
//     if (USSA.hull > 0 && currentalien.ehull >0){
//         currentalien.takeHit(USSA);
//         console.log(`enemy destroyed`)
//         count++
//         currentalien = aliengroup[count]
//         switchin()
//     }else{
//         currentalien.takeHit
//     }
// }


// console.log(currentalien.ename)

// //FIGHT BUTTON
// const FIGHT = document.querySelector('#FIGHT')
// FIGHT.addEventListener('click', () => {
//     currentalien.takeaHit
//     USSA.takeHit();
//     const Health = document.querySelector('#stats')
//     Health.textContent = `USSA: ${USSA.hull} HP`
//     const helph = document.querySelector('#helph')
//     helph.textContent =`ENEMY: ${currentalien.ehull} HP`
// })

// const RETREAT = document.querySelector('#RETREAT')
// RETREAT.addEventListener('click',() =>{
//     const stats =document.querySelector('#STATUS')
//     stats.textContent = `GAME OVER ${USSA.name}`
//     FIGHT.break
// });