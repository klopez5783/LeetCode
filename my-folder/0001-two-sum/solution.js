/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {

   
    for ( let i = 0 ; i < nums.length ; i++){
        let check = target - nums[i]; 
        let indexCheck = nums.indexOf(check);
        if ( indexCheck != -1 && indexCheck != i ){
            return [i,indexCheck];
        }
    }
    
};
