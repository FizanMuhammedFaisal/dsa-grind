/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {

    function isAlpha(l) {
        console.log(l)
        console.log("l")
        if (l === ' ') return false
        return l >= 'A' && l <= "Z" || l >= 'a' && l <= 'z' || l >= 0 && l <= 9
    }

    let l = 0
    let r = s.length - 1

    while (l < r) {
        while (!isAlpha(s[l]) && l<r) {
            l++
        }

        while (!isAlpha(s[r]) && l<r) {
            r--
        }
        console.log(s[l], s[r])
        if (s[l].toLowerCase() !== s[r].toLowerCase()) {
            return false
        }
        r--
        l++

    }
    return true

};