const board = document.querySelector('#board')
const colors = ['#3FBFBF', '#BF3F7F', '#BF3F3F', '#3F3FBF', '#3FBF7F', '#7F3FBF', '#7FBF3F', '#BF7F3F']
const SQUARES_NUMBER = 500

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div')
    square.classList.add('square')

    square.addEventListener('mouseover', () => setColor(square))
    square.addEventListener('mouseleave', () => removeColor(square))

    board.append(square)
}

function setColor(element) {
    const color = getColor()
    element.style.backgroundColor = color
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`
}

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d'
    element.style.boxShadow = `0 0 2px #000`
}

function getColor() {
    const index = Math.floor(Math.random() * colors.length)
    return colors[index]
}