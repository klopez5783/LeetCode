/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {

    return true ? JSON.stringify(obj).length <= 2 : false;
    
};
