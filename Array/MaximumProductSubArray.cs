// Runtime: 84 ms, faster than 82.20% of C# online submissions for Maximum Product Subarray.
// Memory Usage: 39.3 MB, less than 15.42% of C# online submissions for Maximum Product Subarray.

public class Solution {
    public int MaxProduct(int[] nums) {
        
        int maxProduct = nums[0];
        int maxValue = nums[0];
        int minValue = nums[0];
        int temp1, temp2;
        
        for(int i = 1; i < nums.Length; i++){
            temp1 = maxValue * nums[i];
            temp2 = minValue * nums[i];
            
            minValue = Math.Min(nums[i], Math.Min(temp1, temp2));
            maxValue = Math.Max(nums[i], Math.Max(temp1, temp2));
            
            maxProduct = Math.Max(maxProduct, maxValue);
        }
        return maxProduct;
    }
}

/*
Given an integer array nums, find a contiguous non-empty subarray within the array that has the largest product, and return the product.

The test cases are generated so that the answer will fit in a 32-bit integer.

A subarray is a contiguous subsequence of the array.

Example 1:

Input: nums = [2,3,-2,4]
Output: 6
Explanation: [2,3] has the largest product 6.
Example 2:

Input: nums = [-2,0,-1]
Output: 0
Explanation: The result cannot be 2, because [-2,-1] is not a subarray.
 

Constraints:

1 <= nums.length <= 2 * 104
-10 <= nums[i] <= 10
The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.
*/
