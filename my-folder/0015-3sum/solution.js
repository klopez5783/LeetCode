/**
 * @param {number[]} nums
 * @return {number[][]}
 */
function threeSum(nums) {
    nums.sort((a,b) => a - b);
    let output = [];
    
    for(let i = 0 ; i < nums.length ; i++){
        
        if(nums[i] > 0) break;
        
        if(i > 0 && nums[i] == nums[i-1]) continue;
        
        let left = i + 1;
        let right = nums.length - 1;
        while(left < right){
            const sum = nums[left] + nums[right] + nums[i]
            if(sum > 0){
                right--
            }else if(sum < 0){
                left++
            }else{
                output.push([nums[i], nums[left], nums[right]]);// ✅ use sorted numsay
                left++
                right--
                while( left < right && nums[left] == nums[left - 1]){
                    left++
                }
            }
        }
    }

    return output;

}


function mergeSort(nums) {
    if (nums.length <= 1) return nums;

    const mid = Math.floor(nums.length / 2);
    const left = nums.slice(0, mid);
    const right = nums.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let l = 0, r = 0;

    while (l < left.length && r < right.length) {
        if (left[l] < right[r]) {
            result.push(left[l++]);
        } else {
            result.push(right[r++]);
        }
    }

    return result.concat(left.slice(l)).concat(right.slice(r));
}
