/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
    const row = matrix.length
    const col = matrix[0].length

    //find which row
    let top = 0
    let bot = row - 1
    while (top <= bot) {
        const mid = Math.floor((top + bot) / 2)
        console.log(mid)
        
        if (matrix[mid][col - 1] < target) {
            top = mid + 1
        } else if (matrix[mid][0] >target  ) {
            bot = mid - 1
        } else {
            break
        }
    }

     if (!(top <= bot)) {
            return false;
        }
        const ind = Math.floor((top + bot) / 2);

        const tar = matrix[ind]

        console.log(tar)
        let l = 0
        let r = tar.length - 1
console.log(l+'l',r+'r')
console.log(target)
        while (l <= r) {
            const mid = Math.floor((l + r) / 2)
            console.log(mid)
            if (tar[mid] > target) {
                console.log('enterd')
                r = mid - 1
            } else if (tar[mid] < target) {
                l = mid + 1
            } else {
                return true
            }
        }
        return false
    

};