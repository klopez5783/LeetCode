/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {


    let curr = m - 1
    let i = n - 1
    let end = m + n - 1
    
    while (i >= 0) {
        if (i >= 0 && nums1[curr] > nums2[i]) {
            nums1[end] = nums1[curr]; // move nums1[i]
            curr--;
        } else {
            nums1[end] = nums2[i]; // move nums2[j]
            i--;
        }
        end--;
    }
    
};
