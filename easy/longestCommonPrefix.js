//url: https://leetcode.com/problems/longest-common-prefix/
// Write a function to find the longest common prefix string amongst an array of strings.
//
// If there is no common prefix, return an empty string "".
//
// Example 1:
//
// Input: ["flower","flow","flight"]
// Output: "fl"
// Example 2:
//
// Input: ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
// Note:
//
// All given inputs are in lowercase letters a-z.

// Array Strings -> String
const longestCommonPrefix = function(strs) {
    if (strs.length === 0 || strs[0].length === 0) return ''

    let prefixLen = 1
    let prefix = strs[0].slice(0, prefixLen)
    let loop = strs.every(str => str.slice(0, prefixLen) === prefix)

    prefix = loop ? strs[0].slice(0, prefixLen) : prefix.slice(0, prefixLen - 1)

    while (loop && strs[0].length > prefixLen) {
        prefixLen += 1
        prefix = strs[0].slice(0, prefixLen)
        loop = strs.every(str => str.slice(0, prefixLen) === prefix)
        prefix = loop ? strs[0].slice(0, prefixLen) : prefix.slice(0, prefixLen - 1)
    }

    return prefix
};

console.log(longestCommonPrefix(["flower","flow","flight"]))
console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix([""]))
console.log(longestCommonPrefix(["a"]))
console.log(longestCommonPrefix(["aa","ab"]))
