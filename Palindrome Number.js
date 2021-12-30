/**
 * @param {number} x
 * @return {boolean}
 */
 var isPalindrome = function(x) {
    var y=true;
    if(x<0){
        return false;
    }
    else {
        x = x.toString();
        for(let i =0;i<x.length/2;i++){
            if(x[i]!==x[x.length-i-1]){
                y = false;
            }
        }
        }
    return y;
};