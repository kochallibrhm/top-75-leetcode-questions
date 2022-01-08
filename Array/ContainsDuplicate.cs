/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 
Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
*/

 public class Solution
 {
     public bool ContainsDuplicate(int[] nums)
     {
         var hash = new HashSet<int>();
         foreach (var num in nums)
         {
             if (hash.Add(num))
                 return false;
         }
         return true;
     }
 }
// Runtime: 272 ms, faster than 27.99% of C# online submissions for Contains Duplicate.
// Memory Usage: 46.2 MB, less than 46.84% of C# online submissions for Contains Duplicate.

// Another Slower Solution
 public class Solution2
 {
     public bool ContainsDuplicate1(int[] nums)
     {
         List<int> distinct = new List<int>();
         foreach (var num in nums)
         {
             if (distinct.Contains(num))
             {
                 return true;
             }
             distinct.Add(num);
         }
         return false;
 }

