// Runtime: 107 ms, faster than 71.01% of C# online submissions for Word Break.
// Memory Usage: 40 MB, less than 77.73% of C# online submissions for Word Break.

public class Solution {
    public bool WordBreak(string s, IList<string> wordDict) {
        
        var len = s.Length;
        var dp= Enumerable.Repeat<bool>(false, len+1).ToArray();
        dp[len] = true;
        
        for(int i = len - 1; i > -1; i--){
            foreach(var word in wordDict){
                if(i + word.Length <= len && s.Substring(i, word.Length).Contains(word))
                    dp[i] = dp[i + word.Length];
                if(dp[i])
                    break;
            }
        }
        return dp[0];
    }
}

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

