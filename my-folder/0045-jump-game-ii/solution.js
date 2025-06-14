/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function(nums) {
    let i = 0;
    let count = 0;

    while (i < nums.length - 1) {
        let max = 0;
        let bestIndex = i;
        if (i + nums[i] >= nums.length - 1) {
            count++;
            break;
        }
        for (let j = i + 1; j <= i + nums[i] && j < nums.length; j++) {
            if(max < j + nums[j] ){
                console.log(`Best Index Found : ${j}`)
                max =  j + nums[j]
                bestIndex = j
            }
        }
        console.log(`Best Index set to ${bestIndex}`)
        i = bestIndex;
        count++;
    }
    return count;
};

