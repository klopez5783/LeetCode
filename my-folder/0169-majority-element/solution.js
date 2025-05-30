/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {

    const map = new Map();
    let majority = Math.floor(nums.length / 2);

    for ( let i = 0 ; i < nums.length ; i++){
        const num = nums[i];
        if (map.has(num)) {
            map.set(num, map.get(num) + 1);
        } else {
            map.set(num, 1);
        }
    

        if(map.get(num) > majority){
            return num
        }
    
    }
};
