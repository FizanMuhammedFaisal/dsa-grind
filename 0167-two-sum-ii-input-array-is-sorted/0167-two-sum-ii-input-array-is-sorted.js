/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    

    let curr=0
    let l=0
    let r=numbers.length-1

    // for(let i=0;i<numbers.length;i++){
    //         curr=numbers[i]
    //         l=i
    //         r=i+1
    //     while( l < r && r<=numbers.length){
    //         if(curr+numbers[r]===target){
    //             return [i+1,r+1]
    //         }
    //         r++
    //     }
    // }
    while(l<r){
        if(numbers[l]+numbers[r]===target){
            return [l+1,r+1]
        }
        if(numbers[l]+numbers[r]>target){
            r--
        }else{
            l++
        }
    }

};