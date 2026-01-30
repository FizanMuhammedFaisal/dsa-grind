/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
    const n = nums.length;

    for (let i = 0; i < nums.length; i++) {
        while (nums[i] > 0 &&
            nums[i] <= n &&
            nums[nums[i] - 1] !== nums[i]) {
            const correctIdx = nums[i] - 1;
            [nums[i], nums[correctIdx]] = [nums[correctIdx], nums[i]];
        }
    }

    for (let i = 0; i <= nums.length; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }
    return nums.length
};