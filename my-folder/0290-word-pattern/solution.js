/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {

    let arr = s.split(" ");

    let map = Object.create(null)
    let map2 = Object.create(null)

    if(pattern.length != arr.length) return false

    for(let i = 0 ; i < pattern.length ; i++){
        let letter = pattern[i]
        let word = arr[i]
        console.log(`letter ; ${letter}\nword : ${word}`)
        if(map[letter] && map[letter] != word ){
            return false
        }
        map[letter] = word
        console.log("Map : " , map)
    }

    for(let i = 0 ; i < pattern.length ; i++){
        let letter = pattern[i]
        let word = arr[i]
        console.log(`letter ; ${letter}\nword : ${word}`)
        if(map2[word] && map2[word] != letter ){
            return false
        }
        map2[word] = letter
        console.log("Map : " , map)
    }

    return true;


};
