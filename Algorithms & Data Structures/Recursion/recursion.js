// 1. POWER

// Write a function called power which accepts a base and an
// exponent. The function should return the power of the base
// to the exponent. This function should mimic the 
// functionality of Math.pow()  - do not worry about negative
//bases and exponents.

function power(num, powy) {
    if (powy === 0) { return 1 };
    return num * power(num, powy - 1)
}
 
console.log(power(2,0)) // 1
console.log(power(2,2)) // 4
console.log(power(2,4)) // 16

// 2. FACTORIAL

// Write a function factorial which accepts a number and 
// returns the factorial of that number. A factorial is the 
// product of an integer and all the integers below it; e.g.,
// factorial four ( 4! ) is equal to 24, because 4 * 3 * 2 * 
// 1 equals 24.  factorial zero (0!) is always 1.

function factorial(num){
    if (num <= 0) { return 1 }
    return num * factorial(num - 1);
 }
 
 console.log(factorial(1)) // 1
 console.log(factorial(2)) // 2
 console.log(factorial(4)) // 24
 console.log(factorial(7)) // 5040
 
// 3. PRODUCT OF ARRAY

// Write a function called productOfArray which takes in an array
// of numbers and returns the product of them all.

function productOfArray(arr) {
    if (arr.length === 0) {return 1};
    return arr[0] * productOfArray(arr.slice(1))
}

console.log(productOfArray([1,2,3])) // 6
console.log(productOfArray([1,2,3,10])) // 60

// 4. RECURSIVE RANGE

// Write a function called recursiveRange which accepts a number
// and adds up all the numbers from 0 to the number passed to the function 

function recursiveRange(num){
    if (num === 0) { return 0 };
    return num + recursiveRange(num - 1);
 }
 
 // SAMPLE INPUT/OUTPUT
 console.log(recursiveRange(6)) // 21
 console.log(recursiveRange(10)) // 55

 // 5. FIB

// Write a recursive function called fib which accepts a number and returns
// the nth number in the Fibonacci sequence. Recall that the Fibonacci
// sequence is the sequence of whole numbers 1, 1, 2, 3, 5, 8, ... which 
// starts with 1 and 1, and where every number thereafter is equal to the 
// sum of the previous two numbers.

function fib(num){
    if (num === 1) { return 1 };
    if (num === 2) { return 1 };
    
    return fib(num - 1) + fib(num - 2);
}

console.log(fib(4)) // 3
console.log(fib(10)) // 55
console.log(fib(28)) // 317811
console.log(fib(35)) // 9227465

// 6. REVERSE STRING

// Write a recursive function called reverse which accepts
// a string and returns a new string in reverse.

function reverse(str){
    let s = '';

    function recur(x) {
        if (x.length === 0) return
        s += x[x.length - 1];
        return recur(x.slice(0, x.length - 1))
    }
    
    recur(str)
    
    return s
}

console.log(reverse('awesome')) // 'emosewa'
console.log(reverse('rithmschool')) // 'loohcsmhtir'

// OPTIMIZED SOLUTION FOR REVERSE(STR): 

function reverse(str){
	if(str.length <= 1) return str;
	return reverse(str.slice(1)) + str[0];
}

// 7. PALINDROME SOLUTION
console.log(isPalindrome('aa')) // true
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
console.log(isPalindrome('amanaplanacanalpanama')) // true
console.log(isPalindrome('amanaplanacanalpandemonium')) // false

function isPalindrome(str){
    if(str.length === 1) return true;
    if(str.length === 2) return str[0] === str[1];
    if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
    return false;
}

// 8. SOME RECURSIVE

// Write a recursive function called someRecursive which accepts an array and a callback. 
// The function returns true if a single value in the array returns true when passed to 
// the callback. Otherwise it returns false.

const isOdd = val => val % 2 !== 0;

console.log(someRecursive([1,2,3,4], isOdd)) // true
console.log(someRecursive([4,6,8,9], isOdd)) // true
console.log(someRecursive([4,6,8], isOdd)) // false
console.log(someRecursive([4,6,8], val => val > 10)); // false

function someRecursive(arr, func){
    if (arr.length === 0) { return false }
    if (func(arr[0])) { return true }
    
    return someRecursive(arr.slice(1), func)
}

f

