// 1. FIND CLOSEST NUMBER TO ZERO

// Given an integer array nums of size n, return the number with the value closest to 0
// in nums. If there are multiple answers, return the number with the largest value.

const findClosestNumber = function (nums) {
	let closest = Infinity

	for (let i = 0; i < nums.length; i++) {
		if (Math.abs(nums[i]) < Math.abs(closest)) {
			closest = nums[i]
		} else if (Math.abs(nums[i]) === Math.abs(closest)) {
			closest = Math.max(closest, nums[i])
		}
	}
	return closest
}

console.log("/// FIND CLOSEST NUMBER ///")
console.log("[-4,-2,1,4,8]: ", findClosestNumber([-4, -2, 1, 4, 8]))
console.log("[2,-1,1]: ", findClosestNumber([2, -1, 1]))
console.log("")

// 2. MERGE STRINGS ALTERNATELY

// You are given two strings word1 and word2. Merge the strings by adding letters in
// alternating order, starting with word1. If a string is longer than the other, append
// the additional letters onto the end of the merged string.

// Return the merged string.

const mergeAlternately = function (word1, word2) {
	let longest = Math.max(word1.length, word2.length)
	let word = []

	for (let i = 0; i < longest; i++) {
		word.push(word1[i])
		word.push(word2[i])
	}

	if (word1.length > longest) {
		word.push(word1.slice(longest, -1))
	} else {
		word.push(word2.slice(longest, -1))
	}

	return word.join("")
}
