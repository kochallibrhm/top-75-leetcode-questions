// Runtime: 372 ms, faster than 8.42% of JavaScript online submissions for Missing Number.
// Memory Usage: 41.2 MB, less than 44.94% of JavaScript online submissions for Missing Number.

/*
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    for(let i = 0; i < nums.length+1; i++){
        if(!nums.includes(i))
            return i;
    }
};

/*
  Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

  Example 1:
  
  Input: nums = [3,0,1]
  Output: 2
  Explanation: n = 3 since there are 3 numbers, so all numbers are in the range [0,3]. 2 is the missing number in the range since it does not appear in nums.
*/
