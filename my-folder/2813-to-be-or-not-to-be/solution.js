/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {

    const x = val

    return {
        toBe: function(y) {
            if (x === y) {
                return true;
            } else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(y){
            if (x !== y) {
                return true;
            } else {
                throw new Error("Equal");
            }
        }
        
    }

    function notToBe(y){
        return {
            "value" : x !== y ? true : "Equal" 
        }
    }
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */
