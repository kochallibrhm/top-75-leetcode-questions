/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].

Example 2:

Input: nums = [3,2,4], target = 6
Output: [1,2]
*/

// 1. O(n) Complexity
public class Solution {
    public int[] TwoSum(int[] nums, int target) {

        Dictionary<int,int> keyValuePairs = new Dictionary<int,int>();
        
        for(int i = 0; i < nums.Length; i++)
        {
            if(keyValuePairs.ContainsKey(target - nums[i]))
                return new int[]{i, keyValuePairs[target - nums[i]]};
            else if(!keyValuePairs.ContainsKey(nums[i]))
                keyValuePairs.Add(nums[i], i);
        }
        return new int[] {-1, -1};
    }
}

// Runtime: 132 ms, faster than 82.21% of C# online submissions for Two Sum.
// Memory Usage: 42.6 MB, less than 31.63% of C# online submissions for Two Sum.


// 2. O(n^2) Complexity 
public class Solution2 { 
    public int[] TwoSum(int[] nums, int target) {
        for(int i = 0; i < nums.Length; i++){
            for(int j = i+1; j < nums.Length; j++){
                if(nums[i] + nums[j] == target){
                    return new int[] {i, j};
                }
            }
        }
        return new int[] {-1, -1};
    }
}

// Runtime: 356 ms, faster than 5.03% of C# online submissions for Two Sum.
// Memory Usage: 40.6 MB, less than 89.01% of C# online submissions for Two Sum.


