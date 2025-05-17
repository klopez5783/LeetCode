/**
 * @param {number} rowsCount
 * @param {number} colsCount
 * @return {Array<Array<number>>}
 */

Array.prototype.snail = function(rowsCount, colsCount) {

    let result = Array.from({length : rowsCount }, () => Array(colsCount).fill(0) )
    let curr = 0;
    let y = 0;

      if ( ( rowsCount * colsCount != this.length )){
        return [];
    }
    
    for (let x = 0 ; x < colsCount ; x++){
        
        if ( x % 2 != 0 ){
            
                   while ( y > 0 ){
                        y--
                        let num = this[curr];
                        result[y][x] = num;
                        curr++
                    }
            
        }
        
        if ( x % 2 == 0 ){
             while ( y < rowsCount){
                let num = this[curr];
                result[y][x] = num;
                curr++
                y++
            }
        }
        
    }
    
    return result
    
}

/**
 * const arr = [1,2,3,4];
 * arr.snail(1,4); // [[1,2,3,4]]
 */
