/**
 * @param {Object|Array} obj
 * @return {Object|Array}
 */
var compactObject = function(obj) {
    if (!obj) return false;
    if (typeof obj !== 'object') return obj;

    if(Array.isArray(obj)){
        const arr = [];
        for (let i = 0 ; i < obj.length ; i++){
            const curr = obj[i];
            if(!curr) continue;
            const subCurr = compactObject(curr);

            if(subCurr){
                arr.push(subCurr)
            }
        }
        return arr;
    }

    const newObj = {};
    
    for (const key in obj) {
        const subCurr = compactObject(obj[key])
        if (subCurr) {  // Check if the value is truthy
            newObj[key] = subCurr;
        } 
    }
    
    return newObj;
    
};
