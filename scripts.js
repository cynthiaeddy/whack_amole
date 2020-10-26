const startButton = document.querySelector('.start')
const controlPanel = document.querySelector('.controls')
const timer = controlPanel.querySelector('.timer')
const lives = controlPanel.querySelector('.lives')
const molesRemaining = controlPanel.querySelector('.moles-remaining')
let score = controlPanel.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')

let on = false
let timeUp
let lastMole
let timeOutId


// console.log(moles)
// console.log(timer, lives, molesRemaining, score, controlPanel)

startButton.addEventListener('click', startGame)

moles.forEach(mole => {
  mole.addEventListener('click', hitMole)
})

holes.forEach(hole => {
  hole.addEventListener('click', hitHole)
})





function startGame() {
  on = true
  controlPanel.classList.add('show')
  popUp()


}

function hitMole(e) {
  e.stopPropagation()
    console.log('inside')
    score.innerHTML = parseInt(score.innerHTML) + 1;
    molesRemaining.innerHTML = parseInt(molesRemaining.innerHTML) -1;
}

function hitHole() {
  lives.innerHTML = parseInt(lives.innerHTML) - 1;
}


function popUp() {
  const molePick = randomMole(moles)
  const moleTime = randomTime(1500, 500)
  molePick.classList.add('up');
  // timeOutId = setTimeout(() => {
  //     molePick.classList.remove('up');
  // setTimeout(() => {
  //   molePick.classList.remove('up');
  //     if(!timeUp) {
  //       popUp();
  //     }
  //   }, moleTime);
  // clearTimeout(timeOutId)
}

function randomMole(moles){
  const moleIdx = Math.floor(Math.random() * 9) + 1;
  const mole = moles[moleIdx];
    if (mole === lastMole){
        return randomMole(moles);
    }
    lastMole = mole;
    return mole;
}

function randomTime(max, min) {
  const time = Math.random * (max - min) + min
  return time
}

