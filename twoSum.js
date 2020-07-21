// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
//
// Example:
//
// Given nums = [2, 7, 11, 15], target = 9,
//
// Because nums[0] + nums[1] = 2 + 7 = 9,
// return [0, 1].

// Brute force
// Time complexity: O(n^2)
// Space complexity: O(1)
const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i !== j && nums[i] + nums[j] === target) {
                return ([i, j])
            }
        }
    }
}

console.log(twoSum([2,7,11,15], 9))


// One-pass hash table
// Time complexity: O(n)
// Space complexity: O(n)
const twoSum2 = function(nums, target) {
    let seenNums = {}

    for (let i = 0; i < nums.length; i++) {
        let difference = target - nums[i]

        if (difference in seenNums) {
            return [seenNums[difference], i]
        } else {
            seenNums[nums[i]] = i
        }
    }
}

console.log(twoSum2([2,7,11,15], 9))
