//Runtime 161 ms Beats 81.8%
// Memory 52.3 MB Beats 42.57%
public class Solution {
    public int LongestConsecutive(int[] nums) {
        if(nums.Length == 0)
            return 0;
        if(nums.Length == 1)
            return 1;
        Array.Sort(nums);
        var maxCount = 1;
        var temp = 1;
        for(int i = 1; i < nums.Length; i++){
            if(nums[i] == nums[i-1])
                continue;
            if(nums[i] - 1 == nums[i-1])
                temp += 1;
            else
                temp = 1;
            maxCount = Math.Max(maxCount, temp);
        }
        return maxCount;
    }
}
/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.

Example 1:

Input: nums = [100,4,200,1,3,2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.
*/
