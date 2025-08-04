/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {

    const set = new Set()
    let l = 0
    let toR = 0

    for (let i=0; i < s.length; i++) {
        while (set.has(s[i])) {
            set.delete(s[l])
            l++
        }
        set.add(s[i])
        toR = Math.max(toR, i - l + 1);
    }

    return toR
};