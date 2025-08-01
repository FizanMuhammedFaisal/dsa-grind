/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let l = 0
    let r = height.length-1
    let maxval = 0
    while (l < r) {
        const min = Math.min(height[l], height[r])
        const volume = (r - l) * min
        console.log(volume)
        if (volume > maxval) {
            maxval = volume
        }

        if (height[l] > height[r]) {
            r--
        } else {
            l++
        }

    }
    console.log(maxval)
    return maxval

};