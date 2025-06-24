/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {

    let max = 0;
    let left = 0, right = height.length - 1;
    while (left < right) {
        let tallest = Math.min(height[left], height[right])
        let area = tallest * (right - left)
        max = area > max ? area : max;
        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return max

};
