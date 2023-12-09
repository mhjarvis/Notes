// Math.floor
console.log('// Math.floor() example:')
console.log('Random num between 1 - 5: ', Math.floor(Math.random() * 5) + 1);
console.log('Random num between 20 and 22: ', Math.floor(Math.random() * 3) + 20);

// Using .map()
const array = ['ro', 'markus', 'jfsoijoi']
const mappedArray = array.map(function (el) {
    return el.toUpperCase();
})
console.log('\nArray mapped to capitalize all items: ', mappedArray)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let x = numbers.map(function(ele) {
    return ele * ele;
})

console.log('Array of numbers squared: ', x);

// Arrow Functions

const add = (x, y) => {
    return x + y;
}

console.log('\nArrow Function Ex 1: ', add)

// Arrow function without parramater

const rollDie = () => {
    return Math.floor(Math.random() * 6 + 1);
}

console.log('Arrow Function Ex 2: ', rollDie)







// Heads / Tails example

/* let heads = 0;
let tails = 0;

for (let i = 0; i < 5; i++) {
    let test = Math.floor(Math.random() * 2);
    if (test === 0) {
        heads++;
    } else {
        tails++;
    }
}

console.log('Heads: ', heads);
console.log('Tails: ', tails);
 */