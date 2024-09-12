/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
   var output = false;
   return (...args)=>{
        if(output == false){
            output = true;
            return fn(...args)
        } // ends while 
        return undefined
   }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

