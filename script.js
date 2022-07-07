const $lucesDelCirculo = document.querySelectorAll('.luces-circulo')
let index = 2
let time = 1
const times = [5000, 2000, 6000]

var main

function start() {
  main = setInterval(changeColor, 1000)
}

function stop() {
  clearInterval(main)
}

function changeColor() {
  if (time === 5 && index === 2) {
    index--
    time = 0
  }

  if (time === 2 && index === 1) {
    index--
    time = 0
  }

  if (time === 6 && index === 0) {
    index = 2
    time = 0
    for (let i = 0; i < times.length; i++) {
      $lucesDelCirculo[i].className = 'luces-circulo'
      const apagar = $lucesDelCirculo[i]
      apagar.classList.remove(luzActual.getAttribute('color'))
    }
  }

  $lucesDelCirculo[index].className = 'luces-circulo'
  const luzActual = $lucesDelCirculo[index]
  luzActual.classList.add(luzActual.getAttribute('color'))

  if (index === 0) {
    for (let i = 0; i < times.length; i++) {
      if (index !== i) {
        $lucesDelCirculo[i].className = 'luces-circulo'
        const apagar = $lucesDelCirculo[i]
        apagar.classList.remove(luzActual.getAttribute('color'))
      }
    }
  }
  time++
}
