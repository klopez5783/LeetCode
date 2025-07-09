/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {

    let left = 0 , right = 0;
    let seen = {}
    let size = 0;
    while(right < s.length){
        const char = s[right]
        if( seen[char] !== undefined && seen[char] >= left ){
            left = seen[char] + 1
        }
        seen[char] = right
        size = Math.max(size , right - left + 1)
        right++
    }

    return size
    
};
