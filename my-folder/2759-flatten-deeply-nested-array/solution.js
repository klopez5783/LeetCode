/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
   var output = [];
    for(let item of arr){
        if(Array.isArray(item) & n > 0){
            output.push(...flat(item,n-1));
        }else{
            output.push(item)
        }
    }
    
    return output;
};
