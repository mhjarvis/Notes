const container = document.querySelector('.container')
const big = document.querySelector('#big')
const medium = document.querySelector('#medium')
const small = document.querySelector('#small')

const ships = document.querySelectorAll('.ship')

let arr = []
let shipToDrag = undefined

for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.className = 'square';
    div.id = i;
    div['data-value'] = i;
    container.append(div);
}

// EventListener for start/stop ships
for (let i = 0; i < ships.length; i++) {
    ships[i].addEventListener('dragstart', (event) => {
        event.target.classList.add('newColor')
        event.dataTransfer.setData('text', event.currentTarget.id)
        console.log(event.currentTarget.id)
    })
    ships[i].addEventListener('dragend', (event) => {
        event.target.classList.remove('newColor')
    })
}    


const squares = document.querySelectorAll('.square')

for (let i = 0; i < squares.length; i++) {
    squares[i].addEventListener('dragover', (event) => {
        event.preventDefault()
    })
    squares[i].addEventListener('dragenter', (e) => {
        console.log(e)
        let coveredSquares = getCoverage(squares[i].id)
        console.log(coveredSquares)
        squares[i].classList.add('squareOver')
    })
    squares[i].addEventListener('dragleave', (e) => {
        squares[i].classList.remove('squareOver')
    })
    squares[i].addEventListener('drop', (e) => {
        squares[i].classList.remove('squareOver')
    })
}



function getCoverage(value) {
    let arr = []




    return arr;
}
