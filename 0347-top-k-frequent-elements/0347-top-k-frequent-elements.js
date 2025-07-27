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
        arr[hash[n]].push(n)
    }
    const result = []
    console.log(arr)
    for (let i=arr.length-1;i>0;i--) {

      const e=arr[i]
      console.log(e)
        if (e.length && result.length < k) {
            for(let i=0;i<e.length;i++){
                if(result.length<k){
                    result.push(Number(e[i]))
                }
            }
        }
    }
return result

};