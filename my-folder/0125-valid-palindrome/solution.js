/**
 * @param {s} s
 * @return {boolean}
 */
var isPalindrome = function(s) {

    s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    
    let [l , r] = [0 , s.length - 1]

    while(l < r){
        if(s[l] != s[r]) return false
        l++
        r--
    }

    return true;    
};
