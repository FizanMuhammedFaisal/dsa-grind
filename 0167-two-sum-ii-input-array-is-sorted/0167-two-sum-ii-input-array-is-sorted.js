/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {

    let r = numbers.length - 1
    let l = 0

    while (l < r) {

        const n = numbers[r] + numbers[l]
        console.log(n)
        if (n === target) {
            return [l+1 , r+1 ]
        }
        if (n > target) {
            r--
        } else {
            l++
        }
    }

};