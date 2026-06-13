/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    // const tempMap = {};

    for(let i = 0; i < nums.length; i++) {
       if(nums[i] !== val) {
            nums[k] = nums[i];
            k++;
            // if(!isNaN(tempMap[nums[i]])) tempMap[nums[i]]++;
            // else tempMap[nums[i]] = 1
        }
    }

    // let scope = 0
    // for(const [key, value] of Object.entries(tempMap)) {
    //     for(let i = 0; i < value; i++) {
    //         nums[scope] = Number(key)
    //         scope++
    //     }
    // }l

    return k;
};