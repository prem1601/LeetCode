/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    // let index = 0;
    // let current;
    // for(let i = 0; i < nums.length; i++) {
    //     current = nums[i];
    //     if(current === target || current > target) {
    //         return i;
    //     }
    //     index++;
    // }

    // return index;

    // let min = 0;
    // let max = nums.length - 1;

    // if(target > nums[max]) return max + 1;
    // if(target < nums[min]) return min;

    // while(min < max){
    //     if(target === nums[min]) return min;
    //     else if(target === nums[max]) return max;

    //     if(target > nums[min]) min++;
    //     else max--;
    // }

    // return max;

    let min = 0;
    let max = nums.length - 1;

    if (target > nums[max]) return max + 1;
    if (target < nums[min]) return min;

    while (min <= max) {
        const half = Math.floor((min + max) / 2);

        if (target === nums[half]) return half;
        else if (target > nums[half]) min = half + 1;
        else max = half - 1;
    }

    return min;
};