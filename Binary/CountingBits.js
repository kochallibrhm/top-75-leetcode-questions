// Runtime: 97 ms, faster than 75.20% of JavaScript online submissions for Counting Bits.
// Memory Usage: 44.9 MB, less than 63.98% of JavaScript online submissions for Counting Bits.

/*
 * @param {number} n
 * @return {number[]}
 */
var countBits = function(n) {
    let bitsArray = [];
    for(let i = 0; i < n+1; i++){
        let counter = 0;
        let temp = i;
        while(temp > 0){
            counter += temp & 1;
            temp >>= 1;
        }
        bitsArray.push(counter);
    } 
    return bitsArray;
};

/*
  Given an integer n, return an array ans of length n + 1 such that for each i (0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
  
  Example 1:

  Input: n = 2
  Output: [0,1,1]
  Explanation:
  0 --> 0
  1 --> 1
  2 --> 10
*/
