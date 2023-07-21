/*

Runtime 47ms Beats 83.77%of users with C#
Memory Details 29.14mb Beats 96.91%of users with C#

Given an integer x, return true if x is a palindrome, and false otherwise.

Follow up: Could you solve it without converting the integer to a string?
*/

public class Solution {
    public bool IsPalindrome(int x) {
        if(x < 0)
            return false;
        var temp = x;
        var reverse = 0;
        while(temp != 0){
            reverse = reverse*10 + temp%10;
            temp /= 10;
        }
        return reverse == x;
    }
}
