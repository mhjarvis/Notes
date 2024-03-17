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

// 2. MAX SUBARRAY SUM

// Given an array of integers and a number, write a function called maxSubarraySum, 
// which finds the maximum sum of a subarray with the length of the number passed to the 
// function.

// Note that a subarray must consist of consecutive elements from the original array. 
// In the first example below, [100, 200, 300] is a subarray of the original array, but [
// 100, 300] is not.

// Constraints:
// Time Complexity - O(N)
// Space Complexity - O(1)

function maxSubarraySum(arr, num) {
    // outlier
    if (arr.length < num) { return null }
    
    // sum of fist `num` values
    let sum = arr.slice(0, num).reduce((a, b) => a + b, 0);
    let highest = sum;

    for (let i = 0; i < arr.length; i++) {
        sum -= arr[i];
        sum += arr[i + num];
        if (sum > highest) {
            highest = sum;
        }
    }
    return highest;
}

console.log(maxSubarraySum([100,200,300,400], 2)) // 700
console.log(maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))  // 39 
console.log(maxSubarraySum([-3,4,0,-2,6,-1], 2)) // 5
console.log(maxSubarraySum([3,-2,7,-4,1,-1,4,-2,1],2)) // 5
console.log(maxSubarraySum([2,3], 3)) // null

// 3. MIN SUB ARRAY LENGTH

// Write a function called minSubArrayLen which accepts two parameters - 
// an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray
// of which the sum is greater than or equal to the integer passed to the
// function. If there isn't one, return 0 instead.

// Time Complexity - O(n)
// Space Complexity - O(1)

function minSubArrayLen(arr, num) {
    let sum = 0;
    let trailing = 0;
    let leading, subArrayCount, lowestCount;

    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
        if (i === arr.length - 1 && sum < num) { return 0 };
        if (sum >= num) {
            leading = i;
            subArrayCount = i + 1;
            lowestCount = i + 1;
            break;
        }
    }
    
    while (leading < arr.length) {
        if (subArrayCount < lowestCount && sum >= num) { lowestCount = subArrayCount };
        if (sum >= num) {
            sum -= arr[trailing];
            trailing++;
            subArrayCount--;
        } else {
            leading++;
            sum += arr[leading];
            subArrayCount++;
        }
    }

    // 2 [ 3  5 ]  6  1  4
    return lowestCount;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)) // 2 -> because [4,3] is the smallest subarray
console.log(minSubArrayLen([2,1,6,5,4], 9)) // 2 -> because [5,4] is the smallest subarray
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52)) // 1 -> because [62] is greater than 52
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],39)) // 3
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11)) // 2
console.log(minSubArrayLen([1,4,16,22,5,7,8,9,10],95)) // 0

// This is not an optimized solution

