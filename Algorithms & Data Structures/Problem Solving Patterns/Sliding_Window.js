// Solutions using the SLIDING WINDOWS Pattern

// 1. MAX SUBARRAY SUM

// Write a function that accepts an array of integers and a number called num.
// The function should calculate the maximum sum of num consecutive elements
// in the array.

// Inefficient solution:

function maxSubArraySum(arr, num) {
    // edge case
    if (arr.length < num) return null;

    let highestNum = 0; // track current highest number

    for (let i = 0; i < arr.length - (num - 1); i++) {
        let temp = arr.slice(i, i + num);
        let sum = temp.reduce((a, b) => a + b, 0); // this causes O(N^2) time
        if (sum > highestNum) {
            highestNum = sum;
        }
    }
    return highestNum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([], 4)); // null
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6

// The more efficient solution uses two seperate loops resulting in O(N) time:

function maxSubArraySum(arr, num) {
    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    // Add up the first `num` numbers and store in maxSum
    for (let i = 0; i < num; i++) {
        maxSum += arr[i];
    }

    tempSum = maxSum;

    for (let i = num; i < arr.length; i++) {
        tempSum = tempSum - arr[i - num]; // subtract the first element from total;
        tempSum = tempSum + arr[i]; // add next current element to total;
        maxSum = Math.max(maxSum, tempSum); // compare and keep the largest sum
    }
    return maxSum;
}

console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 2)); // 10
console.log(maxSubArraySum([1, 2, 5, 2, 8, 1, 5], 4)); // 17
console.log(maxSubArraySum([], 4)); // null
console.log(maxSubArraySum([4, 2, 1, 6], 1)); // 6

// As we progress through the array, we keep in view a group of numbers,
// or a window of numbers, and each increase of i results in us subtracting
// the first number in that window and adding the next.
