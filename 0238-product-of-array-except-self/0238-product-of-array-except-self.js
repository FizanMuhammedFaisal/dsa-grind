/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const n=nums.length
    const prefix =Array(n)
    const postfix = Array(n)
    const output = Array(n)

    prefix[0]=1
    postfix[n-1]=1
    for (let i = 1; i < nums.length; i++) {
        const num=prefix[i - 1]  * nums[i-1]
        prefix[i]=num
    }
    console.log(prefix)

    for (let i = nums.length - 2; i >= 0; i--) {
      const num=  postfix[i + 1]  * nums[i+1]
       
        postfix[i]=num
    }
        console.log(postfix)


    for (let i = 0; i < nums.length; i++) {
        const sum = prefix[i] * postfix[i] 
        output[i]=sum
    }
    console.log(output)
    return output
};