/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
    const hash = {}
    for (const l of s) {
        hash[l] = (hash[l] || 0) + 1
    }
    console.log(hash)
    for (const l of t) {
        console.log(hash[l])
        if (!hash[l]) {
            return l
        }
        if (hash[l] === 1) {
            delete hash[l]
        } else {
            hash[l]--
        }

    }



};