/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function(s) {

    if(s.length < 2) return s;
    
    let start = 0 , end = 0;
    
    for (let i = 0 ; i < s.length ; i++){
        expandFromCenter(i,i)
        expandFromCenter(i,i+1)
        
    }
    
    function expandFromCenter(left,right){
        while(left >= 0 && right < s.length  && s[left] == s[right]){
            if(right - left > end - start){
                start = left
                end = right
            }
            left--
            right++
        }
    }
    
    return s.slice(start, end + 1);

    
};
