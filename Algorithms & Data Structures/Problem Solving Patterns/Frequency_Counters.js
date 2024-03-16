// Solutions using the FREQUENCY COUNTERS Pattern

// Anagram solution for input of two strings

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
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
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