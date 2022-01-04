/**
 * @param {number} n
 * @return {number}
 */
var bitwiseComplement = function (n) {
    n = n.toString(2);
    let result = 0;
    for (let i = 0; i < n.length; i++) {
        if (n[i] === "0") {
            result += Math.pow(2, (n.length - i - 1));
        }
    }
    return result;
};