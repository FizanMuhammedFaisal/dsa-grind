/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function(s, k) {

    const hash={}
    let res=0
    let l=0

    for(let i=0;i<s.length;i++){
        hash[s[i]]=(hash[s[i]]||0)+1

        let maxcount=0
        for(let num in hash){
            if(maxcount<=hash[num]){
                maxcount=hash[num]
            }
        }
        console.log(maxcount,i,l)
        while((i-l+1) - maxcount >k){
            hash[s[l]]-=1
            l++
        }

         res=Math.max(res,i-l+1)

    }
    return res
};