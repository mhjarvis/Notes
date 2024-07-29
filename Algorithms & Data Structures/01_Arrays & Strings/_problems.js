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

console.log("/// MERGE STRINGS ALTERNATELY ///")
console.log("'abc', 'pqr': ", mergeAlternately("abc", "pqr"))
console.log("'ab', 'pqrs': ", mergeAlternately("ab", "pqrs"))
console.log("'abcd', 'pq': ", mergeAlternately("abcd", "pq"))

// 3. ROMAN TO INTEGER

// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

// For example, 2 is written as II in Roman numeral, just two ones added together. 12 is
// written as XII, which is simply X + II. The number 27 is written as XXVII, which is
// XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However,
// the numeral for four is not IIII. Instead, the number four is written as IV. Because
// the one is before the five we subtract it making four. The same principle applies to
// the number nine, which is written as IX. There are six instances where subtraction is
// used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.
// Given a roman numeral, convert it to an integer.

// 4. IS SUBSEQUENCE

// Given two strings s and t, return true if s is a subsequence of t, or false otherwise.

// A subsequence of a string is a new string that is formed from the original string by
// deleting some (can be none) of the characters without disturbing the relative
// positions of the remaining characters. (i.e., "ace" is a subsequence of "abcde" while
// "aec" is not).

const isSubsequence = function (s, t) {
	if (t.length < s.length) {
		return false
	}

	s = s.split("")
	t = t.split("")

	let p1 = 0
	let p2 = 0

	while (true) {
		// test if subset is true
		if (p1 === s.length) {
			return true
		}
		if (p2 === t.length) {
			return false
		}

		if (s[p1] === t[p2]) {
			p1 += 1
			p2 += 1
		} else {
			p2 += 1
		}
	}
}

console.log("/// IS SUBSEQUENCE ///")
console.log("'abc', 'ahbgdc': ", isSubsequence("abc", "ahbgdc"))
console.log("'axc', 'ahbgdc': ", isSubsequence("axc", "ahbgdc"))
console.log("'abcd', 'pq': ", mergeAlternately("abcd", "pq"))
