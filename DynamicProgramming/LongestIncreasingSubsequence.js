// Runtime: 225 ms, faster than 40.00% of JavaScript online submissions for Longest Increasing Subsequence.
// Memory Usage: 40.3 MB, less than 64.49% of JavaScript online submissions for Longest Increasing Subsequence.

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function(nums) {
    let cache = Array(nums.length)
    cache.fill(1);
    for(let i = 1; i < nums.length; i++){
        for(let j = 0; j < i; j++){
            if(nums[j] < nums[i]){
                cache[i] = Math.max(cache[i], cache[j] + 1)
            }
        }
    }
    return Math.max(...cache);
};

/*
Given an integer array nums, return the length of the longest strictly increasing subsequence.
Example 1:

Input: nums = [10,9,2,5,3,7,101,18]
Output: 4
Explanation: The longest increasing subsequence is [2,3,7,101], therefore the length is 4.

Example 2:

Input: nums = [0,1,0,3,2,3]
Output: 4

Constraints:
1 <= nums.length <= 2500
-104 <= nums[i] <= 104
*/
