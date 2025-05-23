/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {

    let k = 0;
    let i = 0;

    while( i < nums.length ) {
        if ( nums[i] != val ){
            nums[k] = nums[i]
            k++
        }
        i++
    }
    console.log(`\noutput array : ${nums}`)
    return k
};
