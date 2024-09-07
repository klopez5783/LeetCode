/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    var filetered = []
    for(let i = 0 ; i < arr.length ; i++){
    if(fn(arr[i],i)) {  filetered.push(arr[i])  }
    }
    return filetered;
    
};
