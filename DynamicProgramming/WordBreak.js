/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const len = s.length;
    let dp = Array.from(s.length + 1).fill(false);
    dp[len] = true;
  
    for(let i = len; len > -1; i--){
        for(let j = 0; j < i; j++){
            if(i + wordDict.length <= len && s.substring(i, i + wordDict[j].length).includes(wordDict[j]))
                dp[i] = dp[i + wordDict.length];
            if(dp[i])
                break;
        }
    }
  
    return dp[0];
};
