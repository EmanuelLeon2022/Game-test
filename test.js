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
for(let i=0; i<=10; i=i+1){
    console.log(i)
}

//Defined reesult actions
if(USSA.hull<= 0){
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
// const griffin
// const chimera
// const typhon
// const 

const retreat = document.querySelector('#retreat')
retreat.addEventListener('click',() =>{
    console.log('retreat')
    const result = document.querySelector('h1')
    result.textContent = "GAME OVER"
})

const Mars = document.querySelector('#mars')
Mars.addEventListener('click',() =>{
    mars.takeaHit
    console.log(mars)
    USSA.takeHit
})