/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {

    nums.sort((a, b) => a - b)
    const res = []
    let l = 0
    let r = 0

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) break

        if (i > 0 && nums[i] === nums[i - 1]) continue
        l = i + 1
        r = nums.length - 1
        
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === 0) {
                res.push([nums[i], nums[l], nums[r]]);
                l++;
                r--;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }

            } else if (0 < sum) {
                r--
            } else {
                l++
            }

        }
    }
    console.log(res)
    return res

};


// const res=[]
// nums.sort((a,b)=>a-b)

//     for(i=0;i<nums.length;i++){
//         if(i>0 && nums[i]===nums[i-1]) continue

//         let l=i+1
//         let r=nums.length-1

//         while(l<r){
//             let sum=nums[i]+nums[l]+nums[r]

//             if(sum>0){
//                 r--
//             }else if(sum < 0){
//                 l++
//             }else{
//                 res.push([nums[i],nums[l],nums[r]])
//                 r--
//                 l++
//                 while(l<r && nums[l]===nums[l-1]){
//                     l++
//                 }
//             }
//         }

//     }
//     return res