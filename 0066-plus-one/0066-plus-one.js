/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    const len = digits.length - 1;

    function checkLast(i) {
        if(i < 0) return 1;

        const num = digits[i];
        if(num !== 9) {
            digits[i] = num + 1;
            return digits;
        }
        
        digits[i] = 0;
        return checkLast(i - 1)

    }

    const arr = checkLast(len);

    return Array.isArray(arr) ? arr : [1, ...digits]
};