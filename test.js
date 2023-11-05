class pilot{
    constructor(name, hull, fire){
        this.name =name;
        this.hull = hull;
        this.firepower = fire;
    }
    takeHit(){
        // this.enemy.push(enemy)
        // pilot.hull-=enemy.efire
        this.hull--
    }
}
//Instantiated new pilot
const USSA = new pilot('USS ASSEMBLY', 20, 5)
for (let i=0; i<5; i++){
    USSA.takeHit()
}

//Defined reesult actions
if(USSA.hull<= 0){
    console.log("YOU DIED!!!")
}else if(USSA.hull>=0){
    console.log("KEEP FIGHTING!!!")
}


class enemy{
    constructor(ename, ehull, efire, accuracy){
        this.ename = ename
        this.ehull = Math.floor(Math.random()*4) + 3;
        this.efirepower = (Math.floor(Math.random() * 3) + 2);
        this.accuracy = (Math.floor(Math.random() * 3) + 6) /10;
        this.bigshot= () =>{
            let ranNum = Math.random();
            console.log(`Accuracy of enemy is ${ranNum}`);
            if(ranNum < this.accuracy){
                console.log(`You have been hit`);
                USSA.hull = USSA.hull - this.efirepower;
                console.log(`USSA has ${USSA.hull} HP`);
            }else{
                console.log(`Evavsive Manuvers Engaged`);
            }
        }
    }
    takeaHit(USSA){
        this.USSA.push(USSA)
        this.ehull--
    }
}

const setRandomNum = (min,max) =>{
    let random =
    Math.floor(Math.random( max - min))
}

// const mars = new enemy('Mars', setRandomNum(6,3), setRandomNum(4,2))
let harpy = new enemy('Harpy', setRandomNum(3,6), setRandomNum(2,4))
let griffin = new enemy('Griffin', setRandomNum(3,6), setRandomNum(2,4))
let chimera = new enemy('Chimera', setRandomNum(3,6), setRandomNum(2,4))
let typhon = new enemy('Typhon', setRandomNum(3,6), setRandomNum(2,4))
let serberus = new enemy('Serberus', setRandomNum(3,6), setRandomNum(2,4))
let mars = new enemy('Mars', setRandomNum(3,6), setRandomNum(2,4))

//FIGHT BUTTON
const FIGHT = document.querySelector('#FIGHT')
FIGHT.addEventListener('on click', () => {
    USSA.takeHit
    const enemyHealth = document.querySelector('#stats')
    enemyHealth.textContent = `USS Assembly ${USSA.hull} HP`
    const stats =document.querySelector('#STATUS')
    stats.textContent = `ENEMY ${enemy.ehull} HP`
})

const RETREAT = document.querySelector('#RETREAT')
RETREAT.addEventListener('click',() =>{
    const stats =document.querySelector('#STATUS')
    stats.textContent = `GAME OVER`
})