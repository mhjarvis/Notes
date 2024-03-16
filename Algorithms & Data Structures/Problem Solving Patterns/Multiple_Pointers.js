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

console.log(sumZero([-8, -4, -3, -1, 0, 2, 3, 4, 6, 7, 8, 9, 10]))
console.log(sumZero([-8, -4, -3, 0, 1, 2, 6, 9]))

// 2. COUNT UNIQUE VALUES

// Implement a function called countUniqueValues which accepts a sorted array,
// and counts the unique values in the array. There can be negative numbers in 
// the array, but it will always be sorted.

function countUniqueValues(arr) {
    
}










countUniqueValues([1, 1, 1, 1, 1, 1, 2])    // 2
countUniqueValues([1, 2, 3, 4, 5, 6, 7, 7, 8])  // 8
countUniqueValues([1, 1, 2, 2, 3, 4, 5, 5, 5]) // 5