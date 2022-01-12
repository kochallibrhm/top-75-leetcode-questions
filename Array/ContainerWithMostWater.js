// Runtime: 165 ms, faster than 10.76% of JavaScript online submissions for Container With Most Water.
// Memory Usage: 47.9 MB, less than 73.07% of JavaScript online submissions for Container With Most Water.

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let n = height.length;
    let maxAmount = 0;
    let l = 0; // for left pointer
    let r = n - 1; // for right pointer

    if(n < 2)
        return maxAmount;
    
    while(r != l){
        let currMinHeight = Math.min(height[r], height[l]);
        maxAmount = Math.max(maxAmount, (r - l)*currMinHeight);
        if(height[r] >= height[l])
            l += 1;
        else
            r -= 1;
    }
    
    return maxAmount;
};

/*
You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

Find two lines that together with the x-axis form a container, such that the container contains the most water.

Return the maximum amount of water a container can store.

Notice that you may not slant the container.

 

Example 1:


Input: height = [1,8,6,2,5,4,8,3,7]
Output: 49
Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.

*/
