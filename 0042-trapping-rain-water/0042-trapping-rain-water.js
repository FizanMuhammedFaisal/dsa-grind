/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let l = 0
    let r = height.length - 1
    let maxl = height[l];
    let maxr = height[r];
    let maxvol = 0
    while (l < r) {
        let vol = 0
        if (maxl < maxr) {
            l++
            maxl = Math.max(maxl, height[l])
            vol = Math.min(maxl, maxr) - height[l]
            if (vol > 0) {
                maxvol += vol
            }
        } else {
            r--
            maxr = Math.max(maxr, height[r])
            vol = Math.min(maxl, maxr) - height[r]

            if (vol > 0) {
                maxvol += vol
            }
        }

    }
    return maxvol
};