/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function(nums) {

  const count = new Map();
  for (const num of nums) {
    count.set(num, (count.get(num) || 0) + 1);
  }

  const result = [];
  for (const [key, value] of count.entries()) {
    if (value > Math.floor(nums.length / 3)) {
      result.push(key);
    }
  }

  return result;

};