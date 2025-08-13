/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {

    let j=0
    let i=0
    
    while(j<nums.length){
        if(nums[j]===nums[i-2]){
            j++
        }else{
            nums[i]=nums[j]
            j++
            i++
        }
    }
    return i
};