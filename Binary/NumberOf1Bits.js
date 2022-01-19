// Runtime: 76 ms, faster than 92.98% of JavaScript online submissions for Number of 1 Bits.
// Memory Usage: 40.2 MB, less than 50.62% of JavaScript online submissions for Number of 1 Bits.

/*
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let counter = 0;
    for(let i = 0; i < 32; i++){
        counter += n & 1;
        n >>= 1;
    }
    return counter;
};

/*
  Write a function that takes an unsigned integer and returns the number of '1' bits it has (also known as the Hamming weight).
    
  Example:
  
  Input: n = 00000000000000000000000000001011
  Output: 3
  Explanation: The input binary string 00000000000000000000000000001011 has a total of three '1' bits.
*/
