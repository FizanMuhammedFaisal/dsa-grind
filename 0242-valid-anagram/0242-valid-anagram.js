/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    const mapt = {}
    for (let n of t) {
        mapt[n] = (mapt[n] || 0) + 1
    }
    for (let i = 0; i < s.length; i++) {

        if (mapt[s[i]]) {
            mapt[s[i]] -= 1
            if (mapt[s[i]] === 0) {
               delete mapt[s[i]]
            }
        } else {
            return false
        }
    }

    return Object.keys(mapt).length === 0


};