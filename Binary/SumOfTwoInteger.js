// Runtime: 72 ms, faster than 74.63% of JavaScript online submissions for Sum of Two Integers.
// Memory Usage: 38.7 MB, less than 31.67% of JavaScript online submissions for Sum of Two Integers.

/*
Given two integers a and b, return the sum of the two integers without using the operators + and -.

Example 1:

Input: a = 1, b = 2
Output: 3
*/

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
var getSum = function(a, b) {
    let carry;
    while(carry != 0){
        carry = a & b;        
        a = a ^ b;
        b = carry << 1;
    }
    return a;
};
