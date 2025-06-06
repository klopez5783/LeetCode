/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {

    var word = "";
    
    let string = String(x)
        for(let i = string.length - 1 ; i >= 0 ; i--){
        word += string[i];
    }

    if ( string == word){
        return true;
    }
    
    return false
};
