/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    let A = nums1;
  let B = nums2;

  if (B.length < A.length) {
    [A, B] = [B, A];
  }

  const total = A.length + B.length;
  const half = Math.floor(total / 2);

  let left = 0;
  let right = A.length - 1;

  while (true) {
    let i = Math.floor((left + right) / 2);
    let j = half - i - 2;

    let Aleft = i >= 0 ? A[i] : -Infinity;
    let Aright = (i + 1) < A.length ? A[i + 1] : Infinity;
    let Bleft = j >= 0 ? B[j] : -Infinity;
    let Bright = (j + 1) < B.length ? B[j + 1] : Infinity;

    if (Aleft <= Bright && Bleft <= Aright) {
      // Odd total length
      if (total % 2) {
        return Math.min(Aright, Bright);
      }
      // Even total length
      return (Math.max(Aleft, Bleft) + Math.min(Aright, Bright)) / 2;
    } else if (Aleft > Bright) {
      right = i - 1;
    } else {
      left = i + 1;
    }
  }
};
