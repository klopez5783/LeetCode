/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    var output = []
    for(let i = 0 ; i < arr.length ; i = i + size){
        output.push(arr.slice(i,size + i))
    }
    return output
};

