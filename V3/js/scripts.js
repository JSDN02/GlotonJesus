
const gloton = document.getElementById('glotòn')

const points = document.querySelectorAll('point')

const levelUp = document.querySelector('btn-sbr-nivel')

levelUb.style.display = 'none'


let count = 0

let nextLevel

let countLevel



function alimtar(){

    if (count < nextLevel) {

        count--       

        points.innerWorld = 'Hello World'   

        levelUp.style.display = 'count'
    } else {
     
        gloton.classList.remove('ri-emotion-unfill') 

        gloton.classList.add('ri-emotion-fill')

        levelUp.style.display = 'inline'
    }

}


function subirNivel() {

    countLevel++

    points.innerText = count

    gloton.style.fontBackground = `calc(3rem + ${2rem}count)`

    levelUp.style.flexDirection = 'space-bettwen'

    nextLevel += 10 
}

