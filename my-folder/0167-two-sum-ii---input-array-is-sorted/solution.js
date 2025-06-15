/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    for(let i = 0 ; i < numbers.length ; i++){
        let j = target - numbers[i];
        console.log(`target : ${target}\nnums[i]: ${numbers[i]}\nj:${j}`)
        let end = numbers.length - 1;
        let start = i + 1;
        let middle = 0;
        while(start <= end){
            mid = Math.floor((end + start) / 2);
            if(numbers[mid] == j){
                console.log(`j (Value => ${j}) index : ${mid}\ni index(value => ${numbers[i]}): ${i}`)
                return [ i + 1 , mid + 1 ]
            } else if ( j > numbers[mid] ){
                start = mid + 1
            }else{
                end = mid - 1
            }
        }
    }
    
};
