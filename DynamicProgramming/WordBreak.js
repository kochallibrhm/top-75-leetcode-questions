// Runtime: 75 ms, faster than 89.94% of JavaScript online submissions for Word Break.
// Memory Usage: 43.7 MB, less than 13.39% of JavaScript online submissions for Word Break.

/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    let dp = Array(len + 1).fill(false);
    dp[len] = true;
    
    for(let i = len; i > -1; i--){
        for(let word of wordDict){
            if(i + word.length <= len && s.substring(i, i + word.length).includes(word))
                dp[i] = dp[i + word.length];
            if(dp[i])
                break;
        }
    }
    return dp[0];
};

/*
    Given a string s and a dictionary of strings wordDict, return true if s can be segmented into a space-separated sequence of one or more dictionary words.
    Note that the same word in the dictionary may be reused multiple times in the segmentation.
   
    Example 1:
    
    Input: s = "leetcode", wordDict = ["leet","code"]
    Output: true
    Explanation: Return true because "leetcode" can be segmented as "leet code".
    
    Example 2:
    
    Input: s = "applepenapple", wordDict = ["apple","pen"]
    Output: true
    Explanation: Return true because "applepenapple" can be segmented as "apple pen apple".
    Note that you are allowed to reuse a dictionary word.
*/

