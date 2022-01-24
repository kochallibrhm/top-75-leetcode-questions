/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const maxInt = Number.MAX_SAFE_INTEGER;

var coinChange = function(coins, amount) {
    if(amount < 1){
        return 0;
    }
    
    const cache = Array(amount + 1);
    cache.fill(0);
    
    return calculateChange(coins, amount, cache);
};

var calculateChange = function(coins, amount, cache){
    if(amount < 0)
        return -1;
    
    if(amount == 0)
        return 0;
    
    if(cache[amount] != 0)
        return cache[amount];
    
    let minimum = maxInt;
    for(let i = 0; i < coins.length; i++){
        let changeResult = calculateChange(coins, amount - coins[i], cache);
        
        if(changeResult > 0 && changeResult < minimum)
            minimum = 1 + changeResult;
    }
    
    cache[amount] = minimum == maxInt ? -1 : minimum;
    return cache[amount];
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
