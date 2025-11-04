/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function(nums) {
    // make a hashtable 
    // see if a elemnt have elment-1  in arr  
    // then if ther is then it not inital element of a consicutive list if ther is then 
    // we can look if upcoming next numbers are there in arr, take the longest such arr length and reuturn


    const hash=new Set(nums)
    let longest=0
    for(const num of hash){
        if(!hash.has(num-1)){
            let curr=0
            while(hash.has(num+curr)){
                curr++
            }
           longest = Math.max(longest, curr);
        }
    }
    return longest
};