// https://leetcode.com/problems/palindrome-number/
// Determine whether an integer is a palindrome. An integer is a palindrome when it reads the same backward as forward.
//
// Example 1:
//
// Input: 121
// Output: true
// Example 2:
//
// Input: -121
// Output: false
// Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
// Example 3:
//
// Input: 10
// Output: false
// Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
// Follow up:
//
// Coud you solve it without converting the integer to a string?

// Integer -> Boolean
const isPalindrome = function(int) {
    const numOfDigits = Math.floor(Math.log(Math.abs(int)) / Math.LN10 + 1)
    let reversedInt = 0
    let i = 0

    while (numOfDigits > i) {
        reversedInt += Math.floor(int / Math.pow(10, i) % 10) *
        Math.pow(10, numOfDigits - i - 1)

        i += 1
    }

    return reversedInt === int && int >= 0
}

isPalindrome(9999)
