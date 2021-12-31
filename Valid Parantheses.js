/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const chain = [];

    for (let i = 0; i < s.length; i += 1) {
        const top = chain[chain.length - 1];
        console.log(top);
        if (s[i] === '(' || s[i] === '{' || s[i] === '[') {
            chain.push(s[i]);
        } else if (s[i] === ')' && top === '(' && chain.length !== 0) {
            chain.pop();
        } else if (s[i] === ']' && top === '[' && chain.length !== 0) {
            chain.pop();
        } else if (s[i] === '}' && top === '{' && chain.length !== 0) {
            chain.pop();
        } else {
            return false;
        }
    }

    return chain.length === 0;
};