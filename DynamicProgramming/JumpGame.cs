// Runtime: 170 ms Beats 74.58% | Memory: 57.9 MB Beats 24.28%

public class Solution {
    public bool CanJump(int[] nums) {
        bool response = false;
        int n = nums.Length - 1;
        var pointer = n;
        if(n == 0)
            return true;
        if(nums[0] == 0)
            return response;
        for(int i = n - 1; i >= 0; i--){
            if(response){
                pointer = i + 1;
            } 
            response = nums[i] >= pointer - i;
        }
        return response;
    }
}

/*
You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.

Example 1:

Input: nums = [2,3,1,1,4]
Output: true
Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
Example 2:

Input: nums = [3,2,1,0,4]
Output: false
Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
 

Constraints:

1 <= nums.length <= 104
0 <= nums[i] <= 105
*/
