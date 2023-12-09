// Math.flor examples for randomness
Math.floor(Math.random() * 5) + 1       // random number 1 - 5
Math.floor(Math.random() * 3) + 20      //random number 20 - 22

// .map()
const array = ['ro', 'markus', 'jfsoijoi']

// using .map()
const mappedArray = array.map(function (el) {
    return el.toUpperCase();
})

// using .forEach()
mappedArray.forEach(function(el) {
    console.log(el);
})

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

let x = numbers.map(function(ele) {
    return ele * ele;
})

console.log(x);