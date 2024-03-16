// Solutions using MULTIPLE POINTERS Pattern

// 1. ZERO SUM PROBLEM

// This pattern uses two pointers (on an array or string, etc.) to move
// through that element in lieu of using nested loops.

// Write a function that returns the first two
// elements in an array that sum to 0.
// This method uses the multiple pointer pattern
// to solve the problem in O(N) time.

function sumZero(arr) {
    // pointers
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let sum = arr[left] + arr[right];
        if (sum === 0) {
            return [arr[left], arr[right]];
        } else if (sum > 0) {
            right--;
        } else {
            left++;
        }
    }
    // return undefined is not needed since it will return undefined anyways
    //return undefined;   // undefined if no match
}

console.log(sumZero([-8, -4, -3, -1, 0, 2, 3, 4, 6, 7, 8, 9, 10]));
console.log(sumZero([-8, -4, -3, 0, 1, 2, 6, 9]));

// 2. COUNT UNIQUE VALUES

// Implement a function called countUniqueValues which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in
// the array, but it will always be sorted.

// Questions to ask:
// 1. Is the array sorted?
// 2. Are there negative numbers?
// 3. Are there decimals or only real numbers?

function countUniqueValues(arr) {
    if (arr.length === 0) { return 0 }  // outlier - empty array

    let first = 0;
    let second = 1;

    while (second < arr.length) {
        if (arr[first] === arr[second]) {
            second++;
        } else {
            first++;
            arr[first] = arr[second];
            second++;
        }
    }
    return first + 1;
}

console.log(countUniqueValues([1, 1, 1, 1, 1, 1, 2])); // 2
console.log(countUniqueValues([1, 2, 3, 4, 5, 6, 7, 7, 8])); // 8
console.log(countUniqueValues([1, 1, 2, 2, 3, 4, 5, 5, 5])); // 5

// We could instead use a for loop using the same principle.

// 3. AVERAGE PAIR

// Write a function called averagePair. Given a sorted array of integers and a target average,
// determine if there is a pair of values in the array where the average of the pair equals
// the target average. There may be more than one pair that matches the average target.

// Bonus Constraints:
// Time: O(N)
// Space: O(1)

function averagePair(arr, target) {
    let last = arr.length - 1;

    for (let i = 0; i < last; i++) {
        let avg = (arr[i] + arr[last]) / 2;
        if (avg === target) {
            return true;
        } else if (avg < target) {
            continue;
        } else {
            last--;
        }
    }
    return false;
}

console.log(averagePair([1,2,3],2.5)) // true
console.log(averagePair([1,3,3,5,6,7,10,12,19],8)) // true
console.log(averagePair([-1,0,3,4,5,6], 4.1)) // false
console.log(averagePair([],4)) // false

// 4. IS SUBSEQUENCE

// Write a function called isSubsequence which takes in two strings and checks whether the characters
// in the first string form a subsequence of the characters in the second string. In other words, the function
// should check whether the characters in the first string appear somewhere in the second string, without their
// order changing.

// Your solution MUST have AT LEAST the following complexities:
// Time Complexity - O(N + M)
// Space Complexity - O(1)

function isSubsequence(str1, str2) {
    index = 0;
    
    for (let i = 0; i < str1.length; i++) {
        if (index >= str2.length - 1 && str1[i] !== str2[index]) { return false };
        
        if (str1[i] === str2[index]) {
            index++;
            continue;
        } else {
            index++;
        }
    }
    return true;
}

console.log(isSubsequence('hello', 'hello world')) // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false (order matters)

// Secondary Solution: 

function isSubsequence(str1, str2) {
    let i = 0;
    let j = 0;
    if (!str1) return true;
    while (j < str2.length) {
      if (str2[j] === str1[i]) i++;
      if (i === str1.length) return true;
      j++;
    }
    return false;
  }