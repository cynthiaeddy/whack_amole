const start = document.querySelector('.start')
const holes = document.querySelectorAll('.hole')
const controls = document.querySelector('.controls')
const moles = document.querySelectorAll('.mole')
let score = document.querySelector('.score')
let molesRemaining = document.querySelector('.moles-remaining')

score = 0
let on = false
let lastHole
let lastMole
let timeUp = false
let moleLives = 5

start.addEventListener('click', (event) => {
  if (start) {
    on = true;
  }
  // else {
  //   on = false;
  //   controls.classList.remove('show')
  //   // clear all data, reset timer, lives, in controls class
	// }
	if (on || win) {
    startGame();
	}
});

function startGame() {
  win = false;
 controls.classList.add('show')
  // start timer, all stuff in controls class
  // timeUp = false;
  score = 0;
  on = true
  popup()
  setTimeout(() => timeUp = true, 30000)
}



holes.forEach(hole => {
  hole.addEventListener('click', moleHit)
})

function moleHit(e) {
  const holeHit = e.target.dataset.id
  console.log('holeHit', holeHit, e.target.dataset.id)
  if (holeHit) {
    score++
    console.log(score)
  }
  // will add to score
  // minus mole, say or look hit
}

function popup() {
  const time = randomTime(1000, 500)
  mole = randomHole(moles)
  mole.classList.add('up');
    setTimeout(() => {
      mole.classList.remove('up');
      if(!timeUp) {
        popup();
      }
    }, time);
}


function randomTime(max, min) {
  return Math.random() * (max - min) + min;
}

function randomHole(moles){
  const index = Math.floor(Math.random() * 9 + 1);
  console.log(index)
  const mole = moles[index];
    if (mole === lastMole){
        return randomHole(moles);
    }
    lastMole = mole;
    return mole;
}



