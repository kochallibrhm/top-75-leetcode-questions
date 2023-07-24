/*
Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
Return k.

Runtime 141ms Beats 68.23%of users with C#
Memory 42.62mb Beats 80.77%of users with C#
*/

public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int count = 0;

        for (int i = 0; i < nums.Length; i++)
        {
            if (nums[i] != val)
            {
                nums[count] = nums[i];
                count++;
            }
        }
        return count;
    }
  
  // This one is slower but less memory usage beats %90 of C# submissions. 
    public int RemoveElement2(int[] nums, int val){
       List<int> notIncluding = nums.Where(x => x != val).ToList();
        int k = 0;
        foreach (var item in notIncluding)
        {
            nums[k] = item;
            k++;
        }
        return notIncluding.Count();
    }
}
