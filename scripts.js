const startButton = document.querySelector('.start')
const controlPanel = document.querySelector('.controls')
const timer = controlPanel.querySelector('.timer')
const lives = controlPanel.querySelector('.lives')
const molesRemaining = controlPanel.querySelector('.moles-remaining')
let score = controlPanel.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')

let on = false
let timeUp = false
let lastMole
let moleNumber
let mole


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
    setTimeout(() => timeUp = true, 20000)
}

function hitMole(e) {
  e.stopPropagation()
  console.log('inside')
  console.log('mole', mole)
    score.innerHTML = parseInt(score.innerHTML) + 1;
  molesRemaining.innerHTML = parseInt(molesRemaining.innerHTML) - 1;
  mole.classList.add('hit')
  // moleNumber = e.target.dataset.id -1
  // console.log(moleNumber)
  // return moleNumber
}





function hitHole() {
  lives.innerHTML = parseInt(lives.innerHTML) - 1;
}

function popUp() {
  const time = randomTime(2000, 500)
  mole = randomMole(moles)
  mole.classList.add('up');
    setTimeout(() => {
      mole.classList.remove('up');
      if(!timeUp) {
        popUp();
      }
    }, time);
}

//if moles been clicked, remove it's number
//splice

function randomMole(moles) {
  console.log(moles)

  const moleIdx = Math.floor(Math.random() * moles.length) + 1


  // array.splice(Math.floor(Math.random()*array.length), 1);



  mole = moles[moleIdx - 1];
  if (mole.classList.contains('hit')) {
    return randomMole(moles);
  }
    if (mole === lastMole){
        return randomMole(moles);
    }
    lastMole = mole;
    return mole;
}

function randomTime(max, min) {
  return Math.random() * (max - min) + min;
}
