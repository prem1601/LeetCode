/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
    let mid = m - 1;
    let nid = n - 1;
    let right = m + n - 1;

    while (nid >= 0) {
        if (mid >= 0 && nums1[mid] > nums2[nid]) {
            nums1[right] = nums1[mid];
            mid--;
        } else {
            nums1[right] = nums2[nid];
            nid--;
        }
        right--;
    } 
};