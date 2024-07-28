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
