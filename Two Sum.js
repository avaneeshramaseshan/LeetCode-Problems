/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let output = [];
    nums.forEach((element, i) => {
        nums.forEach((element1, j) => {
            if ((element + element1 === target) && ((output[0] !== j) || (output[1] !== i)) && (i != j)) {
                output = [i, j];
            }
        });
    });
    console.log("[" + output[0] + "," + output[1] + "]");
    return output;
};