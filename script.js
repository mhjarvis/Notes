const container = document.querySelector('.container')


let arr = []
for (let i = 0; i < 100; i++) {
    const div = document.createElement('div');
    div.className = 'square';
    div.id = i;
    container.append(div);
}

console.log('heelp')