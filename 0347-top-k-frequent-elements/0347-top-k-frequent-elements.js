/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
    const hash = {}
    for (const n of nums) {
        hash[n] = (hash[n] || 0) + 1
    }
    const arr = Array.from({ length: nums.length + 1 }, () => [])
    for (const n of Object.keys(hash)) {
        arr[hash[n]].push(parseInt(n))
    }
    const result = []
    for (let i=arr.length-1;i>0;i--) {
      const e=arr[i]
        if (arr[i].length && result.length < k) {
            for(const n of arr[i]){
                 result.push(n)
                if(result.length===k){
                   return result
                }
            }
        }
    }
return result

};