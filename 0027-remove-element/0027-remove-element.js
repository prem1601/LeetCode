/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let k = 0;
    const tempSet = {}

    for(let i = 0; i < nums.length; i++) {
       if(nums[i] !== val) {
            k++
            if(!isNaN(tempSet[nums[i]])) tempSet[nums[i]]++;
            else tempSet[nums[i]] = 1
        }
    }

    let scope = 0
    for(const [key, value] of Object.entries(tempSet)) {
        let tempScope = scope + 0
        for(let i = 0; i < value; i++) {
            nums[scope] = Number(key)
            scope++
            tempScope++
        }
    }

    nums.length = scope
    return k;
};