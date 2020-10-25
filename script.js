let on = false
const start = document.querySelector('.start')


const holes = document.querySelectorAll('.hole')

// holes.addEventListener('click', popUp)
start.addEventListener('click', startGame)

// function popUp = (holes) {
  holes.forEach(hole => {
    hole.addEventListener('click', popUp)
  })

// }
function popUp(e) {
  console.log('popUp')
  console.log(e.target)
  e.target.classList.add('mole.up')

}
