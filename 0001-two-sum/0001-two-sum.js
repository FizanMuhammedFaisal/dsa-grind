/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
const hash={}
for(let i=0;i<nums.length;i++){
    hash[nums[i]]=i 
}
console.log(hash)
for(let i=0;i<nums.length;i++){
    const tofind=target-nums[i]
    if(hash[tofind] && hash[tofind]!==i){
        return [i,hash[tofind]]
    }
}
}