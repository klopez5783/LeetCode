/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    let total = 0

    const romanMap = new Map([
  ['I', 1],
  ['V', 5],
  ['X', 10],
  ['L', 50],
  ['C', 100],
  ['D', 500],
  ['M', 1000]
]);

    for(let i = 0 ; i < s.length ; i++){
        if(romanMap.get(s[i])){
            let num = romanMap.get(s[i])
            let next = romanMap.get(s[i + 1]) ? romanMap.get(s[i + 1]) : null
            if(num >= next){
                total += num
            }else{
                total = total + (next - num)
                i++
            }
        }
    }
    return total;
};
