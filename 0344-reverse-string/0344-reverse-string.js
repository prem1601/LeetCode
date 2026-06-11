/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    const tempString = [...s]
    const till = s.length - 1;
    for(let i=0; i <= till; i++) {
        s[i] = tempString[till - i]
    }
};