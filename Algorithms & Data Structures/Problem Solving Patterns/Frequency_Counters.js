// Solutions using the FREQUENCY COUNTERS Pattern

// 1. Anagram solution for input of two strings

function validAnagram(str1, str2) {
    // edge case
    if (str1.length !== str2.length) {
        return false;
    }

    let letters1 = str1.split(""); // hold array of str1 split('')
    let letters2 = str2.split(""); // hodl array of str2 split('')
    let obj1 = {}; // hold frequency counters of each letter (letter: count)
    let obj2 = {}; // hold frequency counters of each letter (letter: count)

    // loop over each letter in letters1 and letters2 add to array with value
    // of 1 if it is not present, increase count if it is already present
    for (letter of letters1) {
        if (letter in obj1) {
            obj1[letter]++;
        } else {
            obj1[letter] = 1;
        }
    }

    for (letter of letters2) {
        if (letter in obj2) {
            obj2[letter]++;
        } else {
            obj2[letter] = 1;
        }
    }

    // loop over obj1 and:
    // check if the key is present in obj2 (O(N) time)
    // check if the value of the key is the same in both objects
    // returns false if either of the cases is false
    for (i in obj1) {
        if (!(i in obj2)) {
            return false;
        }
        if (obj1[i] !== obj2[i]) {
            return false;
        }
    }
    // since none are false, they are an anagram
    return true;
}

// Improvements:
// 1. You can loop through a string without needing to break it into an array.
// 2. Use just one object:

let lookup = {};

for (let i = 0; i < str1.length; i++) {
    let letter = first[i];
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
}

for (let i = 0; i < str2.length; i++) {
    let letter = str2[i];
    if (!lookup[letter]) {
        return false;
    } else {
        lookup[letter] -= 1;
    }
}

return true;

// 2. Solution for Frequency Counter for a Number

// Write a function called sameFrequency. Given two positive integers,
// find out if the two numbers have the same frequency of digits.
// Your solution MUST have the following complexities: Time: O(N)

function sameFrequency(x, y) {
    let obj = {};
    x = String(x);
    y = String(y);

    // go through first number and add to abject
    for (let i = 0; i < x.length; i++) {
        let temp = x[i];
        // test if the value is already in teh obj
        obj[temp] ? (obj[temp] += 1) : (obj[temp] = 1);
    }

    for (let i = 0; i < y.length; i++) {
        let temp = y[i];
        if (obj[temp] && obj[temp] !== 0) {
            obj[temp] -= 1;
        } else {
            return false;
        }
    }

    return true;
}

console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false

/* 
This would allow us to split a number, and map the string back to digits:

var num = 123456;
var digits = num.toString().split('');
var realDigits = digits.map(Number)

*/

// 3. Solution for ARE THERE DUPLICATES

// Implement a function called, areThereDuplicates which accepts a variable
// number of arguments, and checks whether there are any duplicates among the
// arguments passed in.  You can solve this using the frequency counter
//  pattern OR the multiple pointers pattern.

function areThereDuplicates(...args) {
    const obj = {};
    for (let arg of args) {
        if (obj[arg]) {
            return true;
        } else {
            obj[arg] = 1;
        }
    }
    return false;
}

console.log(areThereDuplicates(1, 2, 3)) // false
console.log(areThereDuplicates(1, 2, 2)) // true 
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // true 