/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {

    var counter = 0; 

    let hasNext = (args) =>{
        return args[counter] !== undefined
    }

    while ( hasNext(args) ) {
        counter++;
    }

    return counter;
    
};

/**
 * argumentsLength(1, 2, 3); // 3
 */
