/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function (n, trust) {
    const arr = new Array(n + 1).fill(0);
    for (let [i, j] of trust) {
        --arr[i];
        ++arr[j];
    }
    for (let i = 1; i < arr.length; ++i) {
        if (arr[i] === n - 1) {
            return i;
        }
    }
    return -1;
};