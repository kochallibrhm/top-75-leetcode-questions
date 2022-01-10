/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

A subarray is a contiguous part of an array.

Example 1:

Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
Output: 6
Explanation: [4,-1,2,1] has the largest sum = 6.
Example 2:

Input: nums = [1]
Output: 1
Example 3:

Input: nums = [5,4,-1,7,8]
Output: 23
 

Constraints:

1 <= nums.length <= 105
-104 <= nums[i] <= 104
*/

// With Kadane's Algorithm

public class Solution {
    public int MaxSubArray(int[] nums) {
        int max = nums[0];
        int max_ending = 0;
        
        for(int i = 0; i < nums.Length; i++){
            max_ending += nums[i];
            if(max < max_ending)
                max = max_ending;
            if(max_ending < 0)
                max_ending = 0;
        }
        return max;
    }
}
