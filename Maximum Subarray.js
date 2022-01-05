/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    let currentSum = -Infinity;
    let maximumSum = -Infinity;
    for (let i = 0; i < nums.length; i++) {
        currentSum = Math.max(0, currentSum);
        currentSum += nums[i];
        maximumSum = Math.max(maximumSum, currentSum);
    }
    return maximumSum;
};