// Runtime: 219 ms, faster than 45.43% of JavaScript online submissions for 3Sum.
// Memory Usage: 49.2 MB, less than 52.56% of JavaScript online submissions for 3Sum.

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums.sort((a, b) => a-b);
    let n = nums.length;
    let result = [];
    let threeSum;
    
    if(n < 3)
        return result;
    
    for(let i = 0; i < n; i++){
        if(nums[i] == nums[i-1])
            continue;
        let l = i + 1;
        let r = nums.length - 1;
        while(l < r){
            threeSum = nums[i] + nums[l] + nums[r];
            if(threeSum > 0)
                r -= 1;
            else if(threeSum < 0)
                l += 1;
            else{
                result.push([nums[i], nums[l], nums[r]])
                l += 1;
                while(nums[l] == nums[l-1] && r > l){
                    l += 1;
                }
            }
        }
    }
   return result;
};

/*
Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Notice that the solution set must not contain duplicate triplets.

 

Example 1:

Input: nums = [-1,0,1,2,-1,-4]
Output: [[-1,-1,2],[-1,0,1]]
Example 2:

Input: nums = []
Output: []
Example 3:

Input: nums = [0]
Output: []
 

Constraints:

0 <= nums.length <= 3000
-105 <= nums[i] <= 105
*/
