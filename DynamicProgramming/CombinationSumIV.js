// Runtime: 72 ms, faster than 90.31% of JavaScript online submissions for Combination Sum IV.
// Memory Usage: 44.3 MB, less than 5.15% of JavaScript online submissions for Combination Sum IV.
// Bottom up approach

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var combinationSum4 = function(nums, target) {
    let dp = [target + 1];
    dp[0] = 1;
    
    for(let i = 1; i <= target; i++){
        dp[i] = 0;
        for(const n of nums){
            dp[i] = i - n >= 0 ? dp[i] + dp[i - n] : dp[i] + 0;
        }
    }
    return dp[target];
};

/*
Given an array of distinct integers nums and a target integer target, return the number of possible combinations that add up to target.

The test cases are generated so that the answer can fit in a 32-bit integer.

Example 1:

Input: nums = [1,2,3], target = 4
Output: 7
Explanation:
The possible combination ways are:
(1, 1, 1, 1)
(1, 1, 2)
(1, 2, 1)
(1, 3)
(2, 1, 1)
(2, 2)
(3, 1)
Note that different sequences are counted as different combinations.

*/
