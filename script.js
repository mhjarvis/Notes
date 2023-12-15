const container = document.querySelector('.container')
const big = document.querySelector('#big')
const medium = document.querySelector('#medium')
const small = document.querySelector('#small')

const ships = document.querySelectorAll('.ship')

let arr = []
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.className = 'square';
    div.id = i;
    container.append(div);
}

for (let i = 0; i < ships.length; i++) {
    ships[i].addEventListener('dragstart', (event) => {
        event.target.classList.add('newColor')
    })
    ships[i].addEventListener('dragend', (event) => {
        event.target.classList.remove('newColor')
    })
}    
