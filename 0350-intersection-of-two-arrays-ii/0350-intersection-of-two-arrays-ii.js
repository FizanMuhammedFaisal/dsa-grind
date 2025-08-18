/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    const map = {}
    for (const n of nums1) {
        map[n] = (map[n] || 0) + 1
    }
    const res=[]
    console.log(map)
    for (let i=0;i<nums2.length;i++){
            console.log(map[nums2[i]])
        if(map[nums2[i]]){
            res.push(nums2[i])
            map[nums2[i]]-=1
        }
    }
    return res
};

