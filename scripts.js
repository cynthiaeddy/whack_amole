const startButton = document.querySelector('.start')
const controlPanel = document.querySelector('.controls')
const timed = controlPanel.querySelector('.timer')
const lives = controlPanel.querySelector('.lives')
const molesRemaining = controlPanel.querySelector('.moles-remaining')
let score = controlPanel.querySelector('.score')
const holes = document.querySelectorAll('.hole')
const moles = document.querySelectorAll('.mole')
const h1 = document.querySelector('h1')

let on = false
let timeUp = false
let lastMole
let mole
let molesDone
let livesDone = 5
let holeNum = 0
let timeoutId


/////////////////////////// event listeners /////////////////////////////////////

startButton.addEventListener('click', startGame)

moles.forEach(mole => {
  mole.addEventListener('click', hitMole)
})

holes.forEach(hole => {
  hole.addEventListener('click', hitHole)
})

/////////////////////////// game /////////////////////////////////////

function startGame() {
    on = true
  controlPanel.classList.add('show')
  countdown(1, 00);
    popUp()
  setTimeout(() => timeUp = true, 60000)
}

function countdown(minutes, seconds) {
    function tick() {
        timed.innerHTML =
            minutes.toString() + ":" + (seconds < 10 ? "0" : "") + String(seconds);
        seconds--;
        if (seconds >= 0) {
            timeoutId = setTimeout(tick, 1000);
        } else {
            if (minutes >= 1) {
                // countdown(mins-1);
                setTimeout(function () {
                    countdown(minutes - 1, 59);
                }, 1000);
            }
        }
    }
    tick();
}


function hitMole(e) {
  e.stopPropagation()
  holeNum = parseInt(e.target.dataset.id) -1
  hole = holes[holeNum]
    hole.classList.add('white')

  setTimeout(function() {
    hole.classList.remove('white')
  }, (1*1000)); //40 seconds
  // hole.classList.add('white')
  score.innerHTML = parseInt(score.innerHTML) + 1;
  molesRemaining.innerHTML = parseInt(molesRemaining.innerHTML) - 1;
  molesDone = parseInt(molesRemaining.innerHTML)
    mole.classList.add('hit')

  if (molesDone === 0) {
    endGame()
    //stop molesDone from counting
  }
}


function hitHole() {
  if (livesDone > 0) {
    livesDone -= 1
    lives.innerHTML = parseInt(lives.innerHTML) - 1;
  }
  if (livesDone === 0) {
    endGame()
    //stop livesDone from counting
  }
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


function randomMole(moles) {
  // console.log(moles)
  const moleIdx = Math.floor(Math.random() * moles.length) + 1

  mole = moles[moleIdx - 1];
  if (mole.classList.contains('hit') || mole === lastMole) {
    return randomMole(moles);
  }
    lastMole = mole;
    return mole;
}

function randomTime(max, min) {
  return Math.random() * (max - min) + min;
}

function endGame() {
  timeUp = true
  if (livesDone === 0) {
    h1.innerHTML = 'YOU LOST'
    console.log('you lost')
  } else
    if (molesDone === 0) {
      h1.innerHTML = 'YOU WON!'
    console.log('you won')
  }
  clearTimeout(timeoutId);
  on = false
}

