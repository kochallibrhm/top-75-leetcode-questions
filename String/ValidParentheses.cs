/*
Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.

Runtime 80ms Beats 57.54%of users with C#
Memory 38.07mb Beats 46.16%of users with C#

*/

public class Solution {
    public bool IsValid(string s) {
        Dictionary<char, char> brackets = new Dictionary<char, char>
        {
            { '{','}' },
            { '[',']' },
            { '(',')' }
        };

        Stack<char> openBrackets = new Stack<char>();

        foreach (char c in s) {
            if (brackets.ContainsKey(c))
            {
                openBrackets.Push(c);
            }
            else
            {
                if (openBrackets.Count == 0)
                {
                    return false;
                }
                if (brackets[openBrackets.Pop()] == c)
                {
                    continue;
                }
                return false;
            }
        }
        return openBrackets.Count == 0;
    }
}
