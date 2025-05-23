/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
 let j = 0
    
     for (let i = 1; i < nums.length; i++) {
        if (nums[i] !== nums[j]) {
            j++; // move forward to place next unique element
            nums[j] = nums[i];
        }
    }
    
    return j + 1
    
};
