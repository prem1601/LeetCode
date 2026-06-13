/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    for(let i = 0; i < nums.length; i++) {
        const num = nums[i]
        if(num !== val) {
            nums[k] = num;
            k++;
        }
    }
    return k;
};