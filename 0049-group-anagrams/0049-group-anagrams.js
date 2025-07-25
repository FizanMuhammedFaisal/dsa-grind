/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    res = {}
    for (const s of strs) {
        const count = new Array(26).fill(0);
        for (const e of s) {
            count[e.charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
        }       
        if(!res[count]){
            res[count]=[]
        }
        res[count].push(s)
    }

    return Object.values(res)
};