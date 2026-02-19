/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidString = function (s) {
    const left = []
    const star = []

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            left.push(i)
        } else if (s[i] === '*') {
            star.push(i)
        } else {
           
            if (left.length===0) {
              if(star.length===0){
                return false
              }else{
                star.pop()
              }
            }else{
                left.pop()
            }
        }
    }
    while (left.length&& star.length) {
        const si = star.pop()
        const li = left.pop()
        if (si < li) {
            return false
        }
    }
    console.log
    return left.length === 0
};