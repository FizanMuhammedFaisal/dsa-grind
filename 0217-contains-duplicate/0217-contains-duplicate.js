/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    
    const hashmap={}
    for(const num of nums){
        hashmap[num]=(hashmap[num]||0) +1
        if(hashmap[num]>1){
            return true
        }
    }
    return false
};