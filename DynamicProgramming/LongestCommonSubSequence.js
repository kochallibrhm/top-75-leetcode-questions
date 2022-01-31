// Runtime: 92 ms, faster than 97.21% of JavaScript online submissions for Longest Common Subsequence.
// Memory Usage: 55.7 MB, less than 28.50% of JavaScript online submissions for Longest Common Subsequence.

/**
 * @param {string} text1
 * @param {string} text2
 * @return {number}
 */
var longestCommonSubsequence = function(text1, text2) {
    var memo = Array.from(Array(text1.length + 1), () => Array(text2.length + 1).fill(0));
    
    for(let i = text1.length - 1; i > -1  ; i--){
        for(let j = text2.length - 1; j > -1  ; j--){
            if(text1[i] == text2[j])
                memo[i][j] = 1 + memo[i+1][j+1];
            else
                memo[i][j] = Math.max(memo[i+1][j], memo[i][j + 1]);
        }
    }
    return memo[0][0];
};

/*
Given two strings text1 and text2, return the length of their longest common subsequence. If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

Example 1:

Input: text1 = "abcde", text2 = "ace" 
Output: 3  
Explanation: The longest common subsequence is "ace" and its length is 3.

Example 2:

Input: text1 = "abc", text2 = "abc"
Output: 3
Explanation: The longest common subsequence is "abc" and its length is 3.

Example 3:

Input: text1 = "abc", text2 = "def"
Output: 0
Explanation: There is no such common subsequence, so the result is 0.
*/
