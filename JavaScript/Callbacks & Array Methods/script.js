/**
 * Math.floor examples
 */

console.log('// Math.floor() example:')
console.log('Random num between 1 - 5: ', Math.floor(Math.random() * 5) + 1);
console.log('Random num between 20 and 22: ', Math.floor(Math.random() * 3) + 20);

/**
 * .map() examples
 */

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

/**
 * Arrow Function examples 
 */

const add = (x, y) => {
    return x + y;
}

console.log('\nArrow Function Ex 1: ', add)

/**
 * Arrow Function without parameters
 */

const rollDie = () => {
    return Math.floor(Math.random() * 6 + 1);
}

console.log('Arrow Function Ex 2: ', rollDie)

/**
 * Arrow functions without return keyword (implicit returns)
 * Only works if there is only one statement
 */

const rollDie2 = () => (
    Math.floor(Math.random() * 6) + 1
)

console.log('\n Without return keyword, rollDie2: ', rollDie2())

/**
 * Arrow functions all on one line
 * Only works if there is only one statement
 */

const add2 = (a, b) => a + b;

console.log('\n Add function all on one line (1 + 5): ', add2(1, 5));

/**
 * 
 */