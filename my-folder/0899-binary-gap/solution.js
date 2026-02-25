/**
 * @param {number} n
 * @return {number}
 */
var binaryGap = function(n) {
    let position = 0;
    let max = 0;
    let prev;
    
    while (n > 0) {
    position++
    bit = n % 2

    if (bit === 1) {
        if (prev !== undefined) {
            max = Math.max(max, position - prev)
        }
        prev = position
    }

    n = Math.floor(n / 2)
}
    
    return max
};
