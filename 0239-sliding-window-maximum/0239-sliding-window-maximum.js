/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {

    const window = [0, k - 1]
    const q = []
    const res = []

    let l = 0
    let r = 0
    while (r < nums.length) {
        while (q.length && nums[q[q.length - 1]] < nums[r]) {
            q.pop()
        }
        q.push(r)

        if (l > q[0]) {
            q.shift()
        }
        if (r + 1 >= k) {
            res.push(nums[q[0]])
            l++
        }

        r++
    }
    console.log(res)

    // function getMax(window){
    //     let max=-Infinity
    //     for(let i=window[0];i<=window[1];i++){
    //         if(max <nums[i]){
    //             max=nums[i]
    //         }
    //     }
    //     return max
    // }
    // let max =getMax(window)
    // for(let i=k;i<=nums.length;i++){
    //     res.push(max)
    //     window[0]=window[0]+1
    //     if
    //     window[1]=window[1]+1
    //     if(max<nums[window[1]]){
    //         max=nums[window[1]]
    //     }
    // }
    return res
};