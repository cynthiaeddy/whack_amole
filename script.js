let on = false
const start = document.querySelector('.start')
const holes = document.querySelectorAll('.hole')
const controls = document.querySelector('.controls')
const moles = document.querySelector('.mole')


start.addEventListener('click', (event) => {
  if (start) {
    on = true;
	} else {
    on = false;
    controls.classList.remove('show')
    // clear all data, reset timer, lives, in controls class
	}
	if (on || win) {
    startGame();
	}
});

function startGame() {
  win = false;
 controls.classList.add('show')
  // start timer, all stuff in controls class
  on = true
  moleHit()
  popup()
}



holes.forEach(hole => {
  hole.addEventListener('click', moleHit)
})

function moleHit(e) {
  const hole = e.target.dataset.id
  console.log('hole', hole)
  // will add to score
  // minus mole, say or look hit
}

function popup() {
  const time = randomTime(1000, 500)
  const hole = randomHole(holes)
  console.log(hole)

}

function randomTime(max, min) {
  return Math.random() * (max - min) + min;
}



