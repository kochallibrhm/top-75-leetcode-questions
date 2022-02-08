// Runtime: 83 ms, faster than 52.34% of JavaScript online submissions for House Robber II.
// Memory Usage: 41.8 MB, less than 18.98% of JavaScript online submissions for House Robber II.

/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    const len = nums.length
    if(len == 1)
        return nums[0];
    if(len == 2)
        return Math.max(nums[0], nums[1]);
    return Math.max(helper(nums.slice(1, len)), helper(nums.slice(0, len - 1)));
};

var helper = function(nums){
    const len = nums.length
    if(len == 1)
        return nums[0];
    if(len == 2)
        return Math.max(nums[0], nums[1]);
    
    let dp = Array.from(len + 1).fill(0);
    
    dp[len] = nums[len -1];
    dp[len - 1] = nums[len -2];
    dp[len - 2] = nums[len - 3] + dp[len];
    
    for(let i = len - 3; i > 0; i--){
        dp[i] = nums[i - 1] + Math.max(dp[i + 2], dp[i + 3]);
    }
    return Math.max(dp[1], dp[2]);
}

/*
  You are a professional robber planning to rob houses along a street. Each house has a certain amount of money stashed. All houses at this place are arranged in a circle. That means the first house is the neighbor of the last one. Meanwhile, adjacent houses have a security system connected, and it will automatically contact the police if two adjacent houses were broken into on the same night.

  Given an integer array nums representing the amount of money of each house, return the maximum amount of money you can rob tonight without alerting the police.
  
  Example 1:
  
  Input: nums = [2,3,2]
  Output: 3
  Explanation: You cannot rob house 1 (money = 2) and then rob house 3 (money = 2), because they are adjacent houses.
  Example 2:
  
  Input: nums = [1,2,3,1]
  Output: 4
  Explanation: Rob house 1 (money = 1) and then rob house 3 (money = 3).
  Total amount you can rob = 1 + 3 = 4.
  Example 3:
  
  Input: nums = [1,2,3]
  Output: 3
  
*/
