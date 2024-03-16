// Solutions using the SLIDING WINDOWS Pattern


// Write a function that accepts an array of integers and a number called num.
// The function should calculate the maximum sum of num consecutive elements
// in the array.


function maxSubArraySum(arr, num) {
    // edge case
    if (arr.length === 0) return null;
    
    let highestNum = 0;    // track current highest number
    
    for (let i = 0; i < arr.length; i++) {
        let temp = arr.slice(i, i + num);
        let sum = temp.reduce((a, b) => a + b, 0);
        if (sum > highestNum) {
            highestNum = sum;
        }
    }
    return highestNum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([], 4)); // null