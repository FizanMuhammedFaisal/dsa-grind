/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findPairs = function(nums, k) {
    
    const map={}

    for(let i=0;i<nums.length;i++){
        for(let j=i+1;j<nums.length;j++){
            const num1=nums[i]
            const num2=nums[j]
            // if(num1 ===num2){
            //     continue
            // }
            const val=Math.abs(num1-num2)
            if(val===k){
                const key=[nums[i],nums[j]].sort((a,b)=>a-b)
                map[key]=(map[key]||0)+1
            }
        }
    }
    console.log(map)
    return Object.keys(map).length
};