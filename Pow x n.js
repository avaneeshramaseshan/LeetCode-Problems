/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    let result = 1;
    if (n === 0) {
        return result;
    }
    if (n > 0) {
        for (let i = 1; i <= n; i++) {
            result *= x;
        }
    }
    if (n < 0) {
        n *= -1;
        for (let i = 1; i <= n; i++) {
            result /= x;
        }
    }

    return result;

};