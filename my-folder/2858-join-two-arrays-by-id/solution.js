/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function(arr1, arr2) {

    let arr = [...arr1,...arr2];

    let merged = {};

    arr.forEach((x)=>{
        const id = x.id;
        if (!merged[id]) {
        merged[id] = { ...x };
        } else {
        merged[id] = { ...merged[id], ...x };
        }
    })

    const joined = Object.values(merged);
    joined.sort((a,b)=>{
        a.id - b.id;
    })
    
    return joined;


    
};
