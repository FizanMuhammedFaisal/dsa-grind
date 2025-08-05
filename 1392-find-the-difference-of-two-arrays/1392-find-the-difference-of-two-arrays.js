/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    const set1=new Set(nums1)
    const set2=new Set(nums2)
    const result=[]

    let arr=[]
    for(const num of set1){
        console.log(num)
        if(!set2.has(num)){
            arr.push(num)
        }
    }
    result.push(arr)
    arr=[]
    for(const num of set2){
        console.log(num)
        if(!set1.has(num)){
            arr.push(num)
        }
    }
    result.push(arr)
    console.log(result)
    return result
};