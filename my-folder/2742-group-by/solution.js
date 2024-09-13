/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function(fn) {
    const res = {}
    for ( const x of this){
        const key = fn(x);
        res[key] = res[key] || []
        res[key].push(x)
    }
    return res
};


// [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 
