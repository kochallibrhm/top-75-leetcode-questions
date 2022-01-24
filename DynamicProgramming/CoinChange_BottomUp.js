// Runtime: 185 ms, faster than 46.60% of JavaScript online submissions for Coin Change.
// Memory Usage: 42.7 MB, less than 98.70% of JavaScript online submissions for Coin Change.

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function(coins, amount) {
    if(amount < 1){
        return 0;
    }
    
    const cache = Array(amount + 1);
    cache.fill(amount + 1);
    cache[0] = 0;
    
    for(let i = 1; i <= amount; i++){
        for(let j = 0; j < coins.length; j++){
            if(coins[j] <= i){
                cache[i] = Math.min(cache[i], cache[i - coins[j]] + 1);
            }
        }
    }
    
    return cache[amount] > amount ? -1 : cache[amount];
};

/*
You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.
Return the fewest number of coins that you need to make up that amount. If that amount of money cannot be made up by any combination of the coins, return -1.
You may assume that you have an infinite number of each kind of coin.

Example 1:

Input: coins = [1,2,5], amount = 11
Output: 3
Explanation: 11 = 5 + 5 + 1

Example 2:

Input: coins = [2], amount = 3
Output: -1

Constraints:
1 <= coins.length <= 12
1 <= coins[i] <= 231 - 1
0 <= amount <= 104
*/
