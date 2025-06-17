/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {

    let result = Infinity;
    let total = 0;
    let left = 0;
    for(let right = left ; right < nums.length ; right++){
        total += nums[right];
        while(total >= target){
            result = Math.min(result , right - left + 1);
            total -= nums[left]
            left++
        }
    }

    return result === Infinity ? 0 : result;
    
};
