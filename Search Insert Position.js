/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    var result = nums.indexOf(target);
    if (result === -1) {
        if (target < nums[0]) {
            result = 0;
        }
        if (target > nums[nums.length - 1]) {
            result = nums.length;
        }
        for (let i = 0; i < nums.length; i++) {
            if ((target > nums[i]) && (target < nums[i + 1]))
                result = i + 1;
        }
    }
    return result;
};