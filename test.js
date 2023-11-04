class pilot{
    constructor(name, hull, fire){
        this.name =name;
        this.hull = hull;
        this.firepower = fire;
    }
    takeHit(enemy){
        this.enemy.pull(enemy)
        pilot.hull-=enemy.efire
    }
}
//Instantiated new pilot
const USSA = new pilot('USS ASSEMBLY', 20,  5)

//Defined reesult actions
if (USSA.hull<= 0){
    console.log("YOU DIED!!!")
}else if(USSA.hull>=0){
    console.log("KEEP FIGHTING!!!")
}

class enemy{
    constructor(ename, ehull, efire){
        this.ename = ename
        this.ehull = ehull
        this.efirepower = efire
    }
    takeaHit(pilot){
        this.pilot.push(pilot)
        enemy.ehull-=pilot.fire
    }
}

//Created new Enemies

const mars = new enemy('Mars', 5, 5)

const retreat = document.querySelector('button')
retreat.addEventListener('click',() =>{
    // console.log('retreat')
    // player1.ugotShot
    const result = document.querySelector('h1')
    result.textContent = "GAME OVER"
})

const Mars = document.querySelector('#mars')
Mars.addEventListener('click',() =>{
    console.log(mars)
})