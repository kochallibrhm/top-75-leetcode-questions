/*
Runtime 89ms Beats 95.96%of users with C#
Memory 39.96mb Beats 70.01%of users with C#

Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

public class Solution {
    public string LongestCommonPrefix(string[] strs) {
        var shortest = strs.OrderBy(x => x.Length).First();
        for (int i = 0; i < shortest.Length; i++)
        {
            if(strs.Select(x => x[i]).Distinct().Count() > 1)
                return shortest[..i];
        }

        return shortest;
    }
}
