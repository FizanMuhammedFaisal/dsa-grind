/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {

    if(s1.length > s2.length) return false

    const s1Count=new Array(26).fill(0)
    const s2Count=new Array(26).fill(0)

    for(let i =0;i<s1.length;i++){
        s1Count[s1[i].charCodeAt(0)-'a'.charCodeAt(0)]+=1
        s2Count[s2[i].charCodeAt(0)-'a'.charCodeAt(0)]+=1
    }

    let matches=0
    for(let i=0;i<26;i++){
        if(s1Count[i]===s2Count[i]){
            matches++
        }
    }

    let l=0
    for(let i=s1.length;i<s2.length;i++){
        if(matches===26)return true

        let index= s2[i].charCodeAt(0) -'a'.charCodeAt(0)
        
        s2Count[index]++
        if(s1Count[index]===s2Count[index]){
            matches++
        }else if(s1Count[index]+1===s2Count[index]){
            matches--
        }

        index=s2[l].charCodeAt(0)-'a'.charCodeAt(0)
        s2Count[index]--
        if(s1Count[index]===s2Count[index]){
            matches++
        }else if(s1Count[index]-1===s2Count[index]){
            matches--
        }
        l++
    }
    return matches===26
};