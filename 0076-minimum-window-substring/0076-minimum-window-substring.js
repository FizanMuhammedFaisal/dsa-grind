/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    //current window and kept window

    if(t==='')return ''
    const TCount = {}
    const window = {}

    for (const c of t) {
        TCount[c] = (TCount[c] || 0) + 1
    }
    let have = 0
    const need =Object.keys(TCount).length

    let result = [-1, -1]
    let resultL = Infinity

    let l = 0
    for (let r = 0; r < s.length; r++) {
        const c = s[r]
        window[c] = (window[c] || 0) + 1
        if (TCount[c] && window[c] === TCount[c]) {
            have++
        }
        while (have === need) {
            console.log('have and need equl')

            if (resultL >= r - l + 1) {
                result = [l, r]
                resultL = r - l + 1
            }

            window[s[l]] -= 1

            if (TCount[s[l]] && window[s[l]] < TCount[s[l]]) {
          
                have--
            }

            l++

        }
    }
    return resultL === Infinity ? '' : s.slice(result[0], result[1] + 1);



};