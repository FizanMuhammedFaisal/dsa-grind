/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {

    const maps = {}
    for (let n of nums) {
        maps[n] = (maps[n] || 0) + 1
    }

    for (let i = 0; i < nums.length; i++) {
        if (maps[nums[i]] > 1) {
            return true
        }
    }

    return false
};