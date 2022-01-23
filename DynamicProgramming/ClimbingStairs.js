/*
You are climbing a staircase. It takes n steps to reach the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Example:

Input: n = 2
Output: 2
Explanation: There are two ways to climb to the top.
1. 1 step + 1 step
2. 2 steps
*/

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let firstSub = 1;
    let secondSub = 1;
    let temp;
    for(let i = 0; i < n - 1; i++){
        temp = firstSub;
        firstSub = firstSub + secondSub;
        secondSub = temp;
    }
    return firstSub;
};


// With recursive (slower solution than first)

var climbStairsRecursive = function(n) {
    if(n == 0 || n == 1)
        return 1;
    
    return climbStairsRecursive(n - 1) + climbStairsRecursive(n - 2);
};
