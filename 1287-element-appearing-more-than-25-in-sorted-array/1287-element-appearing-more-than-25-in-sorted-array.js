/**
 * @param {number[]} arr
 * @return {number}
 */
var findSpecialInteger = function (arr) {


    const countToPercent = Math.floor(arr.length * (25 / 100))

    let counts = {}

    for (let a of arr) {
        counts[a] = (counts[a] || 0) + 1
    }

    for (let c in counts) {
        if (counts[c] > countToPercent) {
            console.log(typeof c)
            return parseInt(c)
        }
    }
    return null
};